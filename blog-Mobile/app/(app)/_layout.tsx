import { useEffect, useState } from "react";
import { Slot, router } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppLayout() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkAuth() {
            const token = await AsyncStorage.getItem("token");

            if (!token) {
                router.replace("/(auth)/login");
            }

            setLoading(false);
        }

        checkAuth();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return <Slot />;
}
