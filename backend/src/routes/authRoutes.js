const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const db = require("../config/db");

const { sendWelcomeEmail } = require("../services/emailService");


// REGISTER

router.post("/register", async (req, res) => {

    try {

        const {

            full_name,
            email,
            password,
            daily_goal_liters

        } = req.body;

        // CHECK EXISTING USER

        const checkSql = `
            SELECT * FROM users
            WHERE email = ?
        `;

        db.query(checkSql, [email], async (checkErr, checkResult) => {

            if (checkErr) {

                console.log(checkErr);

                return res.status(500).json({

                    message: "Database Error"
                });
            }

            // EMAIL EXISTS

            if (checkResult.length > 0) {

                return res.status(400).json({

                    message: "Email already exists"
                });
            }

            // HASH PASSWORD

            const hashedPassword = await bcrypt.hash(

                password,
                10
            );

            // INSERT USER

            const sql = `
                INSERT INTO users (

                    full_name,
                    email,
                    password_hash,
                    daily_goal_liters

                )
                VALUES (?, ?, ?, ?)
            `;

            db.query(

                sql,

                [

                    full_name,
                    email,
                    hashedPassword,
                    daily_goal_liters
                ],

                (err, result) => {

                    if (err) {

                        console.log(err);

                        return res.status(500).json({

                            message: "Registration Failed"
                        });
                    }

                    // GENERATE JWT TOKEN

                    const token = jwt.sign(

                        {

                            id: result.insertId
                        },

                        process.env.JWT_SECRET,

                        {

                            expiresIn: "7d"
                        }
                    );

                    // RESPONSE

                    res.status(201).json({

                        token,

                        user: {

                            id: result.insertId,

                            full_name,

                            email,

                            daily_goal_liters
                        }
                    });

                    // Send welcome email asynchronously
                    sendWelcomeEmail(email, full_name).catch((emailErr) => {
                        console.error("Failed to send welcome email:", emailErr);
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
});


// LOGIN

router.post("/login", (req, res) => {

    const {

        email,
        password

    } = req.body;

    const sql = `
        SELECT * FROM users
        WHERE email = ?
    `;

    db.query(sql, [email], async (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({

                message: "Database Error"
            });
        }

        // USER NOT FOUND

        if (result.length === 0) {

            return res.status(404).json({

                message: "User Not Found"
            });
        }

        const user = result[0];

        // CHECK PASSWORD

        const validPassword = await bcrypt.compare(

            password,

            user.password_hash
        );

        if (!validPassword) {

            return res.status(401).json({

                message: "Invalid Password"
            });
        }

        // GENERATE TOKEN

        const token = jwt.sign(

            {

                id: user.id
            },

            process.env.JWT_SECRET,

            {

                expiresIn: "7d"
            }
        );

        // RESPONSE

        res.status(200).json({

            token,

            user: {

                id: user.id,

                full_name: user.full_name,

                email: user.email,

                daily_goal_liters: user.daily_goal_liters
            }
        });
    });
});

module.exports = router;