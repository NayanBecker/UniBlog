import axios from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const LOCAL_BASE =
    Platform.OS === "android" ? "http://uniblog.cloud:3333" : "http://uniblog.cloud:3333";

export const api = axios.create({
    baseURL: LOCAL_BASE,
});

// adiciona o token em cada request
api.interceptors.request.use(async (config) => {

    const token = await AsyncStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9BY2NvdW50IjoxNCwiaWF0IjoxNzU3NDU5NTk5LCJleHAiOjE3NTgwNjQzOTl9.VA2I7oDRFaaeN_6K48lSl7pA8q7IzqxoZJf6RfnmJXM'
    return config;
});

api.interceptors.response.use(
    (res) => res,
    async (err) => {
        if (err.response?.status === 401) {
            await AsyncStorage.removeItem("token");
            router.replace("/(auth)/login");
        }
        return Promise.reject(err);
    }
);
