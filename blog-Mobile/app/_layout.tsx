import { useFonts } from "@/src/utils/fonts";
import { Stack, Slot } from "expo-router";
import { View } from 'react-native';

export default function RootLayout() {
    const fontsLoaded = useFonts();


    if (!fontsLoaded) {
        return <View />;
    }
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Slot />

            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(app)" />
        </Stack>
    );
}
