import axios from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const LOCAL_BASE =
    Platform.OS === "android" ? "http://192.168.3.6:3333" : "http://minio.uniblog.cloud:3333";
//Platform.OS === "android" ? "http://uno.uniblog.cloud:3000" : "http://minio.uniblog.cloud:3333";


export const url = LOCAL_BASE;

export const api = axios.create({
    baseURL: LOCAL_BASE,
});

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
