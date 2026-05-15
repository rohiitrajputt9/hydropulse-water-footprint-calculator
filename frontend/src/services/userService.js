import api from "./api";


// GET PROFILE

export const getProfile = async () => {

    try {

        const response = await api.get(

            "/users/profile"
        );

        return response.data;

    } catch (error) {

        console.log(error);

        throw error;
    }
};


// UPDATE PROFILE

export const updateProfile = async (profileData) => {

    try {

        const response = await api.put(

            "/users/profile",

            profileData
        );

        return response.data;

    } catch (error) {

        console.log(error);

        throw error;
    }
};


// CHANGE PASSWORD

export const changePassword = async (passwordData) => {

    try {

        const response = await api.put(

            "/users/change-password",

            passwordData
        );

        return response.data;

    } catch (error) {

        console.log(error);

        throw error;
    }
};