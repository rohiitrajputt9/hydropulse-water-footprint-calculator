const express = require("express");

const router = express.Router();

const db = require("../config/db");

const authMiddleware = require("../middleware/authMiddleware");


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

                DATE(log_date) AS date,

                SUM(total_usage) AS totalUsage

            FROM water_logs

            WHERE user_id = ?

            GROUP BY DATE(log_date)

            ORDER BY DATE(log_date) ASC

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

                DATE_FORMAT(log_date, '%Y-%m') AS month,

                ROUND(AVG(total_usage), 2) AS averageUsage,

                SUM(total_usage) AS totalUsage

            FROM water_logs

            WHERE user_id = ?

            GROUP BY DATE_FORMAT(log_date, '%Y-%m')

            ORDER BY DATE_FORMAT(log_date, '%Y-%m') ASC
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

module.exports = router;