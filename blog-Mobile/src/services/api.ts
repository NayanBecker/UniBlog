import axios from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

// Use environment variable if available, otherwise fall back to default
// EXPO_PUBLIC_API_URL should be set in .env file (see .env.example)
const DEFAULT_BASE = Platform.OS === "android" ? "http://10.0.2.2:3333" : "http://minio.uniblog.cloud:3333";
const LOCAL_BASE = (process.env.EXPO_PUBLIC_API_URL as string | undefined) || DEFAULT_BASE;


export const url = LOCAL_BASE;

export const api = axios.create({
    baseURL: LOCAL_BASE,
});

// adiciona o token em cada request
api.interceptors.request.use(async (config) => {

    const token = await AsyncStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
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
