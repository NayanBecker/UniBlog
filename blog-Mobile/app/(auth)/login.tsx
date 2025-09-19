import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../src/services/api";
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        try {
            const res = await api.post("/account/login", {
                email_Account: email,
                password_Account: password,
            });

            await AsyncStorage.setItem("token", res.data.token);

            router.replace("/feed"); // leva para o feed
        } catch (err: any) {
            console.error(err);
            Alert.alert("Erro", "Falha no login. Verifique seus dados.");
        }
    }

    return (
        <View style={{ flex: 1, padding: 16, justifyContent: "center" }}>
            <Text>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            />

            <Text>Senha</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            />

            <Button title="Entrar" onPress={handleLogin} />

            <Button
                title="Criar conta"
                onPress={() => router.push("/(auth)/register")}
            />
        </View>
    );
}
