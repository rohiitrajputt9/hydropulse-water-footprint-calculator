const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const db = require("../config/db");

const authMiddleware = require("../middleware/authMiddleware");


// GET CURRENT USER

router.get(

    "/profile",

    authMiddleware,

    (req, res) => {

        const userId = req.user.id;

        const sql = `
            SELECT

                id,
                full_name,
                email,
                daily_goal_liters

            FROM users

            WHERE id = ?
        `;

        db.query(sql, [userId], (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Database Error"
                });
            }

            if (result.length === 0) {

                return res.status(404).json({

                    message: "User Not Found"
                });
            }

            res.status(200).json(result[0]);
        });
    }
);


// UPDATE PROFILE

router.put(

    "/profile",

    authMiddleware,

    (req, res) => {

        const userId = req.user.id;

        const {

            full_name,
            email,
            daily_goal_liters

        } = req.body;

        const sql = `
            UPDATE users

            SET

                full_name = ?,
                email = ?,
                daily_goal_liters = ?

            WHERE id = ?
        `;

        db.query(

            sql,

            [

                full_name,
                email,
                daily_goal_liters,
                userId
            ],

            (err, result) => {

                if (err) {

                    console.log(err);

                    return res.status(500).json({

                        message: "Profile Update Failed"
                    });
                }

                res.status(200).json({

                    message: "Profile Updated Successfully"
                });
            }
        );
    }
);


// CHANGE PASSWORD

router.put(

    "/change-password",

    authMiddleware,

    async (req, res) => {

        try {

            const userId = req.user.id;

            const {

                currentPassword,
                newPassword

            } = req.body;

            const sql = `
                SELECT * FROM users
                WHERE id = ?
            `;

            db.query(sql, [userId], async (err, result) => {

                if (err) {

                    console.log(err);

                    return res.status(500).json({

                        message: "Database Error"
                    });
                }

                const user = result[0];

                const validPassword = await bcrypt.compare(

                    currentPassword,

                    user.password_hash
                );

                if (!validPassword) {

                    return res.status(401).json({

                        message: "Current password incorrect"
                    });
                }

                const hashedPassword = await bcrypt.hash(

                    newPassword,

                    10
                );

                const updateSql = `
                    UPDATE users

                    SET password_hash = ?

                    WHERE id = ?
                `;

                db.query(

                    updateSql,

                    [

                        hashedPassword,
                        userId
                    ],

                    (updateErr, updateResult) => {

                        if (updateErr) {

                            console.log(updateErr);

                            return res.status(500).json({

                                message: "Password Update Failed"
                            });
                        }

                        res.status(200).json({

                            message: "Password Updated Successfully"
                        });
                    }
                );
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({

                message: "Server Error"
            });
        }
    }
);

module.exports = router;