import api from "./api";


// MAIN ANALYTICS

export const getAnalytics = async () => {

    try {

        const response = await api.get("/analytics");

        return response.data;

    } catch (error) {

        console.error("Analytics Fetch Error:", error);

        throw error;
    }
};


// WEEKLY TRENDS

export const getWeeklyTrends = async () => {

    try {

        const response = await api.get(

            "/analytics/weekly-trends"
        );

        return response.data;

    } catch (error) {

        console.error(

            "Weekly Trends Fetch Error:",
            error
        );

        throw error;
    }
};


// MONTHLY TRENDS

export const getMonthlyTrends = async () => {

    try {

        const response = await api.get(

            "/analytics/monthly-trends"
        );

        return response.data;

    } catch (error) {

        console.error(

            "Monthly Trends Fetch Error:",
            error
        );

        throw error;
    }
};


// CATEGORY BREAKDOWN

export const getCategoryBreakdown = async () => {

    try {

        const response = await api.get(

            "/analytics/category-breakdown"
        );

        return response.data;

    } catch (error) {

        console.error(

            "Category Breakdown Error:",
            error
        );

        throw error;
    }
};


// AI PREDICTION

export const getAIPrediction = async () => {

    try {

        const response = await api.get(

            "/analytics/ai-prediction"
        );

        return response.data;

    } catch (error) {

        console.error(

            "AI Prediction Error:",
            error
        );

        throw error;
    }
};


// NOTIFY CSV EXPORT

export const notifyCSVExport = async () => {

    try {

        const response = await api.post("/analytics/notify-csv");

        return response.data;

    } catch (error) {

        console.error("CSV Notify Error:", error);

        throw error;
    }
};