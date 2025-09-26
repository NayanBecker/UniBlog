import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
    useEffect(() => {
        async function checkAuth() {
            const token = await AsyncStorage.getItem("token");

            if (token) {
                router.replace("/feed");
            } else {
                router.replace("/login");
            }
        }

        checkAuth();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size="large" />
        </View>
    );
}
