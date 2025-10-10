import { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import { api } from "../../src/services/api";
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { z } from "zod";

const createAccountSchema = z.object({
    nome_Account: z.string()
        .max(100, 'O nome pode ter no máximo 100 caracteres')
        .min(1, 'O nome é obrigatório'),
    email_Account: z.string()
        .max(200, 'O email pode ter no máximo 200 caracteres')
        .email('Formato de email inválido'),
    matricula_Account: z.string()
        .max(20, 'A matrícula pode ter no máximo 20 caracteres')
        .min(1, 'A matrícula é obrigatória'),
    password_Account: z.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .max(20, 'A senha pode ter no máximo 20 caracteres'),
    confirmPassword_Account: z.string()
});
export default function Register() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [matricula, setMatricula] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleRegister() {
        try {
            const validation = createAccountSchema.safeParse({
                nome_Account: nome.trim(),
                email_Account: email.trim(),
                matricula_Account: matricula.trim(),
                password_Account: password,
                confirmPassword_Account: confirmPassword,
            });

            if (!validation.success) {
                const firstError = validation.error.issues[0]?.message;
                Alert.alert("Erro de validação", firstError || "Preencha todos os campos corretamente.");
                return;
            }

            if (password !== confirmPassword) {
                Alert.alert("Erro", "As senhas não coincidem.");
                return;
            }

            await api.post("/account/register", {
                nome_Account: nome,
                email_Account: email,
                matricula_Account: matricula,
                password_Account: password,
                confirmPassword_Account: confirmPassword,
            });

            Alert.alert("Sucesso", "Conta criada com sucesso!");
            router.replace("/(auth)/login");
        } catch (err: any) {
            console.error(err);
            Alert.alert("Erro", "Falha ao criar conta. Verifique os dados e tente novamente.");
        }
    }

    return (
        <View style={{ flex: 1, padding: 16, justifyContent: "center", backgroundColor: '#23A7F5' }}>
            <View style={{ alignItems: 'center', marginBottom: 172, flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
                <Image source={require("../../assets/images/logo-Uniblog.png")} />
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#E7F7FF' }}>UniBlog</Text>
            </View>

            <View style={styles.InputContainer}>
                <Ionicons name="person-outline" size={40} color="#E7F7FF" />
                <TextInput
                    placeholder={"#NOME"}
                    value={nome}
                    onChangeText={setNome}
                    style={[styles.TextInputContainer, {}]}
                />
            </View>

            <View style={styles.InputContainer}>
                <Ionicons name="mail-outline" size={40} color="#E7F7FF" />
                <TextInput
                    placeholder={"#EMAIL"}
                    value={email}
                    onChangeText={setEmail}
                    style={styles.TextInputContainer}
                />
            </View>


            <View style={styles.InputContainer}>
                <Ionicons name="school-outline" size={40} color="#E7F7FF" />
                <TextInput
                    placeholder={"#MATRICULA"}
                    value={matricula}
                    onChangeText={setMatricula}
                    style={styles.TextInputContainer}
                />
            </View>

            <View style={styles.InputContainer}>
                <Ionicons name="lock-closed-outline" size={40} color="#E7F7FF" />
                <TextInput
                    placeholder={"#SENHA"}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.TextInputContainer}
                />
            </View>

            <View style={styles.InputContainer}>
                <Ionicons name="lock-closed-outline" size={40} color="#E7F7FF" />
                <TextInput
                    placeholder={"#CONFIRMAR-SENHA"}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    style={styles.TextInputContainer}
                />
            </View>

            <View style={{ alignItems: 'center', paddingTop: 25, gap: 25 }}>
                <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: '#0378BD', overflow: 'hidden', borderRadius: 12 }} onPress={handleRegister}>
                    <Text style={{ color: '#E7F7FF', fontWeight: 'bold', textAlign: 'center', lineHeight: 60, fontSize: 25 }}>Registrar</Text>
                </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8
    }
});
