import axios from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOCAL_BASE =
    Platform.OS === "android" ? "http://192.168.1.13:3333" : "http://192.168.1.13:3333";
// ⚠️ Troca 192.168.0.10 pelo IP da tua máquina se for celular físico

export const api = axios.create({
    baseURL: LOCAL_BASE,
});

// adiciona o token em cada request
api.interceptors.request.use(async (config) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9BY2NvdW50IjoxNCwiaWF0IjoxNzU3NDU5NTk5LCJleHAiOjE3NTgwNjQzOTl9.VA2I7oDRFaaeN_6K48lSl7pA8q7IzqxoZJf6RfnmJXM'

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});