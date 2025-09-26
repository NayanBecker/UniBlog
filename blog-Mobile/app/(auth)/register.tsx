import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { api } from "../../src/services/api";
import { useRouter } from 'expo-router';

export default function Register() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [matricula, setMatricula] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    async function handleRegister() {
        try {
            await api.post("/account/register", {
                nome_Account: nome,
                email_Account: email,
                matricula_Account: matricula,
                password_Account: password,
                confirmPassword_Account: confirm,
            });

            Alert.alert("Sucesso", "Conta criada com sucesso!");
            router.replace("/(auth)/login");
        } catch (err: any) {
            console.error(err);
            Alert.alert("Erro", "Falha ao criar conta.");
        }
    }

    return (
        <View style={{ flex: 1, padding: 16, justifyContent: "center" }}>
            <Text>Nome</Text>
            <TextInput
                value={nome}
                onChangeText={setNome}
                style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            />

            <Text>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            />

            <Text>Matrícula</Text>
            <TextInput
                value={matricula}
                onChangeText={setMatricula}
                style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            />

            <Text>Senha</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            />

            <Text>Confirmar Senha</Text>
            <TextInput
                value={confirm}
                onChangeText={setConfirm}
                secureTextEntry
                style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            />

            <Button title="Registrar" onPress={handleRegister} />
        </View>
    );
}
