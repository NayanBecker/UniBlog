import { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../src/services/api";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { z } from "zod";

const authenticateAccountSchema = z.object({
    email_Account: z.string().max(200, 'O email pode ter no máximo 200 caracteres').email('Formato de email inválido'),
    password_Account: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        try {
            const validation = authenticateAccountSchema.safeParse({
                email_Account: email.trim(),
                password_Account: password.trim()
            });
            if (!validation.success) {
                const firstError = validation.error.issues[0]?.message;
                Alert.alert("Atenção", firstError || "Preencha todos os campos corretamente.");
                return;
            }
            const res = await api.post("/account/login", {
                // email_Account: email,
                email_Account: email,
                // password_Account: password,
                password_Account: password,
                email_Account: email,
                password_Account: password,
            });

            await AsyncStorage.setItem("token", res.data.token);
            router.replace("/selectProfile");


        } catch (error: string | any) {
            if (error.response) {
                console.log("Erro do servidor:", error.response.data);

                Alert.alert(
                    "Login inválido",
                    error.response.data.message || "E-mail ou senha incorretos."
                );
            } else {
                Alert.alert("Erro", "Não foi possível conectar ao servidor.");
            }
        }
    }
    return (
        <View style={{ flex: 1, padding: 16, justifyContent: "center", backgroundColor: '#23A7F5' }}>
            <View style={{ alignItems: 'center', marginBottom: 172, flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
                <Image source={require("../../assets/images/logo-Uniblog.png")} />
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#E7F7FF' }}>UniBlog</Text>
            </View>
            <View style={styles.InputContainer}>
                <Ionicons name="mail-outline" size={40} color="#E7F7FF" />
                <TextInput
                    placeholder={"#EMAIL"}
                    value={email}
                    onChangeText={setEmail}
                    style={[styles.TextInputContainer, {}]}
                />
            </View>

            <View style={styles.InputContainer}>
                <Ionicons name="lock-closed-outline" size={40} color="#E7F7FF" />
                <TextInput
                    placeholder={"#SENHA"}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={[styles.TextInputContainer, {}]}
                />
            </View>
            <View style={{ alignItems: 'center', paddingTop: 25, gap: 25 }}>
                <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: '#0378BD', overflow: 'hidden', borderRadius: 12 }} onPress={handleLogin}>
                    <Text style={{ color: '#E7F7FF', fontWeight: 'bold', textAlign: 'center', lineHeight: 60, fontSize: 25 }}>Entrar</Text>
                </TouchableOpacity>


                <View style={{ marginBottom: 25 }}>
                    <Text style={{ color: '#E7F7FF' }}>Novo por aqui? <Link href="/(auth)/register" style={{ color: '#E7F7FF', fontWeight: 'bold' }}>Crie sua conta agora.</Link></Text>
                </View>

                <View style={{ marginBottom: 25 }}>
                    <Text style={{ color: '#E7F7FF' }}>Esqueceu a senha? <Link href={"/(auth)/forgetPassword/wordle" as any} style={{ color: '#E7F7FF', fontWeight: 'bold' }}>Recupere aqui.</Link></Text>
                </View>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    TextInputContainer: {
        backgroundColor: "#E7F7FF",
        textAlignVertical: 'top',
        width: '80%',
        borderRadius: 12,
        marginBottom: 25,
        opacity: 0.9,
        fontSize: 20,
        paddingHorizontal: 10,
    },
    InputContainer: {
        flexDirection: 'row', justifyContent: 'center', gap: 8
    }
});