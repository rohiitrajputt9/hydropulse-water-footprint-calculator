import api from "./api";


// GET ALL WATER LOGS

export const getWaterLogs = async () => {

    try {

        const response = await api.get("/logs");

        return response.data;

    } catch (error) {

        console.log(error);

        throw error;
    }
};


// CREATE WATER LOG

export const createWaterLog = async (logData) => {

    try {

        const response = await api.post(

            "/logs",

            logData
        );

        return response.data;

    } catch (error) {

        console.log(error);

        throw error;
    }
};


// DELETE WATER LOG

export const deleteWaterLog = async (id) => {

    try {

        const response = await api.delete(

            `/logs/${id}`
        );

        return response.data;

    } catch (error) {

        console.log(error);

        throw error;
    }
};