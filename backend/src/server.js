const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const waterLogRoutes = require("./routes/waterLogRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors({

    origin: "*",

    methods: ["GET", "POST", "PUT", "DELETE"],

    credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("HydroPulse Backend Running");
});

app.use("/api/logs", waterLogRoutes);
app.use("/api/analytics", analyticsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});