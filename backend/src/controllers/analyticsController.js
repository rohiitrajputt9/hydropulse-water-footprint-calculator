const db = require("../config/db");

const getDailyAverage = (req, res) => {

    const sql = `
        SELECT AVG(total_usage) AS daily_average
        FROM water_logs
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json(result[0]);
    });
};

const getWeeklyAverage = (req, res) => {

    const sql = `
        SELECT
            EXTRACT(WEEK FROM log_date) AS week_number,
            AVG(total_usage) AS weekly_average
        FROM water_logs
        GROUP BY EXTRACT(WEEK FROM log_date)
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json(result);
    });
};

const getMonthlyAverage = (req, res) => {

    const sql = `
        SELECT
            EXTRACT(MONTH FROM log_date) AS month,
            AVG(total_usage) AS monthly_average
        FROM water_logs
        GROUP BY EXTRACT(MONTH FROM log_date)
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json(result);
    });
};

const getUsageComparison = (req, res) => {

    const sql = `
        SELECT
            SUM(indoor_usage) AS indoor_total,
            SUM(outdoor_usage) AS outdoor_total
        FROM water_logs
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json(result[0]);
    });
};

module.exports = {
    getDailyAverage,
    getWeeklyAverage,
    getMonthlyAverage,
    getUsageComparison
};