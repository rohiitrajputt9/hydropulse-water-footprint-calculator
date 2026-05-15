const db = require("../config/db");


// CREATE WATER LOG

const createWaterLog = (req, res) => {

    const user_id = req.user.id;

    const {

        log_date,
        shower_minutes,
        dishwasher_loads,
        laundry_loads,
        cooking_liters,
        drinking_liters,
        garden_liters,
        carwash_liters

    } = req.body;

    const indoor_usage =
        (Number(shower_minutes) * 9) +
        (Number(dishwasher_loads) * 15) +
        (Number(laundry_loads) * 25) +
        Number(cooking_liters) +
        Number(drinking_liters);

    const outdoor_usage =
        Number(garden_liters) +
        Number(carwash_liters);

    const total_usage =
        indoor_usage + outdoor_usage;

    let sustainability_status = "AVERAGE";

    if (total_usage < 120) {

        sustainability_status = "LOW";

    } else if (total_usage > 180) {

        sustainability_status = "HIGH";
    }

    const sql = `
        INSERT INTO water_logs (

            user_id,
            log_date,
            shower_minutes,
            dishwasher_loads,
            laundry_loads,
            cooking_liters,
            drinking_liters,
            garden_liters,
            carwash_liters,
            indoor_usage,
            outdoor_usage,
            total_usage,
            sustainability_status

        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(

        sql,

        [

            user_id,
            log_date,
            shower_minutes,
            dishwasher_loads,
            laundry_loads,
            cooking_liters,
            drinking_liters,
            garden_liters,
            carwash_liters,
            indoor_usage,
            outdoor_usage,
            total_usage,
            sustainability_status
        ],

        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Database Error"
                });
            }

            res.status(201).json({

                message: "Water Log Added Successfully",

                total_usage,

                sustainability_status
            });
        }
    );
};


// GET ALL WATER LOGS

const getAllWaterLogs = (req, res) => {

    const user_id = req.user.id;

    const sql = `
        SELECT * FROM water_logs

        WHERE user_id = ?

        ORDER BY created_at DESC
    `;

    db.query(sql, [user_id], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({

                message: "Database Error"
            });
        }

        res.status(200).json(result);
    });
};


// GET SINGLE WATER LOG

const getSingleWaterLog = (req, res) => {

    const user_id = req.user.id;

    const { id } = req.params;

    const sql = `
        SELECT * FROM water_logs

        WHERE id = ?
        AND user_id = ?
    `;

    db.query(sql, [id, user_id], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({

                message: "Database Error"
            });
        }

        if (result.length === 0) {

            return res.status(404).json({

                message: "Water Log Not Found"
            });
        }

        res.status(200).json(result[0]);
    });
};


// UPDATE WATER LOG

const updateWaterLog = (req, res) => {

    const user_id = req.user.id;

    const { id } = req.params;

    const {

        shower_minutes,
        dishwasher_loads,
        laundry_loads,
        cooking_liters,
        drinking_liters,
        garden_liters,
        carwash_liters

    } = req.body;

    const indoor_usage =
        (Number(shower_minutes) * 9) +
        (Number(dishwasher_loads) * 15) +
        (Number(laundry_loads) * 25) +
        Number(cooking_liters) +
        Number(drinking_liters);

    const outdoor_usage =
        Number(garden_liters) +
        Number(carwash_liters);

    const total_usage =
        indoor_usage + outdoor_usage;

    let sustainability_status = "AVERAGE";

    if (total_usage < 120) {

        sustainability_status = "LOW";

    } else if (total_usage > 180) {

        sustainability_status = "HIGH";
    }

    const sql = `
        UPDATE water_logs

        SET

            shower_minutes = ?,
            dishwasher_loads = ?,
            laundry_loads = ?,
            cooking_liters = ?,
            drinking_liters = ?,
            garden_liters = ?,
            carwash_liters = ?,
            indoor_usage = ?,
            outdoor_usage = ?,
            total_usage = ?,
            sustainability_status = ?

        WHERE id = ?
        AND user_id = ?
    `;

    db.query(

        sql,

        [

            shower_minutes,
            dishwasher_loads,
            laundry_loads,
            cooking_liters,
            drinking_liters,
            garden_liters,
            carwash_liters,
            indoor_usage,
            outdoor_usage,
            total_usage,
            sustainability_status,
            id,
            user_id
        ],

        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Database Error"
                });
            }

            res.status(200).json({

                message: "Water Log Updated Successfully",

                total_usage,

                sustainability_status
            });
        }
    );
};


// DELETE WATER LOG

const deleteWaterLog = (req, res) => {

    const user_id = req.user.id;

    const { id } = req.params;

    const sql = `
        DELETE FROM water_logs

        WHERE id = ?
        AND user_id = ?
    `;

    db.query(sql, [id, user_id], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({

                message: "Database Error"
            });
        }

        res.status(200).json({

            message: "Water Log Deleted Successfully"
        });
    });
};

module.exports = {

    createWaterLog,
    getAllWaterLogs,
    getSingleWaterLog,
    updateWaterLog,
    deleteWaterLog
};