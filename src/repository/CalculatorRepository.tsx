import axios from "../axios/axios";

const token = localStorage.getItem("authToken");

const CalculatorRepository = {
    getBMI: async (userId: string): Promise<string> => {
        const response = await axios.get<string>(`/calculator/calculateBMI?userId=${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },

    getBMR: async (userId: string): Promise<string> => {
        const response = await axios.get<string>(`/calculator/calculateBMR?userId=${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },

    getIdealBodyWeight: async (userId: string): Promise<string> => {
        const response = await axios.get<string>(`/calculator/idealBodyWeight?userId=${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },

    getBodyFatPercentage: async (userId: string): Promise<string> => {
        const response = await axios.get<string>(`/calculator/bodyFatPercentage?userId=${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },

    getTargetHeartRate: async (userId: string): Promise<string> => {
        const response = await axios.get<string>(`/calculator/targetHeartRate?userId=${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },

    getLeanBodyMass: async (userId: string): Promise<string> => {
        const response = await axios.get<string>(`/calculator/leanBodyMass?userId=${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },
};

export default CalculatorRepository;
