import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={{ flex: 1, gap: 16, alignItems: "center", justifyContent: "center" }}>
            <Text>UniBlog Mobile ✅</Text>
            <Link href="/feed">Ir para o Feed</Link>
            <Link href="/create-post">Criar Post</Link>
        </View>
    );
}
