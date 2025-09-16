import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{ headerTitle: "UniBlog" }}>
            <Stack.Screen name="index" options={{ headerTitle: "Início" }} />
            <Stack.Screen name="feed" options={{ headerTitle: "Feed" }} />
            <Stack.Screen name="create-post" options={{ headerTitle: "Novo Post" }} />
        </Stack>
    );
}
