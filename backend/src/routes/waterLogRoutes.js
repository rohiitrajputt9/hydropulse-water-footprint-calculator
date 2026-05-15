const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

    createWaterLog,
    getAllWaterLogs,
    getSingleWaterLog,
    updateWaterLog,
    deleteWaterLog

} = require("../controllers/waterLogController");


// CREATE WATER LOG

router.post(

    "/",

    authMiddleware,

    createWaterLog
);


// GET ALL WATER LOGS

router.get(

    "/",

    authMiddleware,

    getAllWaterLogs
);


// GET SINGLE WATER LOG

router.get(

    "/:id",

    authMiddleware,

    getSingleWaterLog
);


// UPDATE WATER LOG

router.put(

    "/:id",

    authMiddleware,

    updateWaterLog
);


// DELETE WATER LOG

router.delete(

    "/:id",

    authMiddleware,

    deleteWaterLog
);

module.exports = router;