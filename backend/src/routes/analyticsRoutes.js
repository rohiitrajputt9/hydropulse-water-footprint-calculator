const express = require("express");

const router = express.Router();

const db = require("../config/db");

const authMiddleware = require("../middleware/authMiddleware");

const { sendCSVNotificationEmail } = require("../services/emailService");


// MAIN ANALYTICS

router.get("/", authMiddleware, (req, res) => {

    const userId = req.user.id;

    const analyticsQuery = `

        SELECT

            SUM(total_usage) AS totalUsage,

            ROUND(AVG(total_usage), 2) AS averageUsage,

            COUNT(*) AS totalLogs,

            SUM(indoor_usage) AS indoorUsage,

            SUM(outdoor_usage) AS outdoorUsage

        FROM water_logs

        WHERE user_id = ?
    `;

    db.query(

        analyticsQuery,

        [userId],

        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Analytics Fetch Failed"
                });
            }

            const analytics = result[0];

            const prediction = Math.round(

                (analytics.averageUsage || 0) * 30
            );

            let ecoScore = 100;

            if (analytics.averageUsage > 200) {

                ecoScore = 60;

            } else if (analytics.averageUsage > 150) {

                ecoScore = 80;
            }

            const recommendedUsage = 150;

            const waterSaved = Math.max(

                0,

                recommendedUsage -

                (analytics.averageUsage || 0)
            );

            res.json({

                totalUsage:
                    analytics.totalUsage || 0,

                averageUsage:
                    analytics.averageUsage || 0,

                totalLogs:
                    analytics.totalLogs || 0,

                indoorUsage:
                    analytics.indoorUsage || 0,

                outdoorUsage:
                    analytics.outdoorUsage || 0,

                prediction,

                ecoScore,

                waterSaved
            });
        }
    );
});


// WEEKLY TREND ANALYTICS

router.get(

    "/weekly-trends",

    authMiddleware,

    (req, res) => {

        const userId = req.user.id;

        const sql = `

            SELECT

                log_date AS date,

                SUM(total_usage) AS totalUsage

            FROM water_logs

            WHERE user_id = ?

            GROUP BY log_date

            ORDER BY log_date ASC

            LIMIT 7
        `;

        db.query(sql, [userId], (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Weekly Trends Fetch Failed"
                });
            }

            res.status(200).json(result);
        });
    }
);


// MONTHLY ANALYTICS

router.get(

    "/monthly-trends",

    authMiddleware,

    (req, res) => {

        const userId = req.user.id;

        const sql = `

            SELECT

                to_char(log_date, 'YYYY-MM') AS month,

                ROUND(AVG(total_usage), 2) AS averageUsage,

                SUM(total_usage) AS totalUsage

            FROM water_logs

            WHERE user_id = ?

            GROUP BY to_char(log_date, 'YYYY-MM')

            ORDER BY to_char(log_date, 'YYYY-MM') ASC
        `;

        db.query(sql, [userId], (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Monthly Trends Fetch Failed"
                });
            }

            res.status(200).json(result);
        });
    }
);


// CATEGORY ANALYTICS

router.get(

    "/category-breakdown",

    authMiddleware,

    (req, res) => {

        const userId = req.user.id;

        const sql = `

            SELECT

                SUM(indoor_usage) AS indoorUsage,

                SUM(outdoor_usage) AS outdoorUsage

            FROM water_logs

            WHERE user_id = ?
        `;

        db.query(sql, [userId], (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Category Analytics Failed"
                });
            }

            res.status(200).json(result[0]);
        });
    }
);


// AI PREDICTION ANALYTICS

router.get(

    "/ai-prediction",

    authMiddleware,

    (req, res) => {

        const userId = req.user.id;

        const sql = `

            SELECT

                ROUND(AVG(total_usage), 2) AS averageUsage

            FROM water_logs

            WHERE user_id = ?
        `;

        db.query(sql, [userId], (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Prediction Analytics Failed"
                });
            }

            const avg = result[0].averageUsage || 0;

            const nextMonthPrediction = Math.round(

                avg * 30
            );

            let recommendation =
                "Excellent sustainability performance.";

            if (avg > 200) {

                recommendation =
                    "High consumption detected. Reduce outdoor usage.";

            } else if (avg > 150) {

                recommendation =
                    "Moderate usage. Minor reductions recommended.";
            }

            res.status(200).json({

                averageUsage: avg,

                nextMonthPrediction,

                recommendation
            });
        });
    }
);


// CSV DOWNLOAD NOTIFICATION EMAIL

router.post(

    "/notify-csv",

    authMiddleware,

    (req, res) => {

        const userId = req.user.id;

        const sql = `
            SELECT full_name, email FROM users
            WHERE id = ?
        `;

        db.query(sql, [userId], (err, result) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Database query failed during CSV notification"
                });
            }

            if (result.length === 0) {

                return res.status(404).json({

                    message: "User not found"
                });
            }

            const user = result[0];

            // Send notification email asynchronously
            sendCSVNotificationEmail(user.email, user.full_name)
                .then(() => {
                    res.status(200).json({
                        message: "CSV download email sent successfully"
                    });
                })
                .catch((emailErr) => {
                    console.error("Failed to send CSV download email:", emailErr);
                    // Still return 200 so the user download experience doesn't break if mail servers are slow
                    res.status(200).json({
                        message: "CSV downloaded (email sending failed)"
                    });
                });
        });
    }
);

module.exports = router;