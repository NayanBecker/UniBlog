import { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "@/src/services/api";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useRouter } from "expo-router";


export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleUpdatePassword() {
        try {
            const id_Account = await AsyncStorage.getItem("id_Account");
            console.log(id_Account);

            if (!id_Account) {
                return Alert.alert("Erro", "ID da conta não encontrado!");
            }

            await api.put(`/account/update/${id_Account}`, {
                password_Account: password
            });

            Alert.alert("Senha atualizada!", "Você pode fazer login agora.");
            router.replace("/(auth)/login");
        } catch (err) {
            console.log(err);
            Alert.alert("Erro", "Falha ao atualizar senha.");
        }
    }

    return (
        <View style={{ flex: 1, padding: 16, justifyContent: "center", backgroundColor: '#23A7F5' }}>

            <View style={{ alignItems: 'center', marginBottom: 50 }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#E7F7FF' }}>
                    Redefinir Senha
                </Text>
                <Text style={{ fontSize: 18, color: '#E7F7FF', opacity: 0.8 }}>
                    Defina sua nova senha abaixo
                </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
                <Ionicons name="lock-closed-outline" size={40} color="#E7F7FF" />
                <TextInput
                    placeholder={"#NOVA SENHA"}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor="#5399bd"
                    style={{
                        backgroundColor: "#E7F7FF",
                        width: "80%",
                        borderRadius: 12,
                        fontSize: 20,
                        paddingHorizontal: 10,
                        opacity: 0.9
                    }}
                />
            </View>

            <View style={{ alignItems: 'center', paddingTop: 40 }}>
                <TouchableOpacity
                    style={{
                        height: 60,
                        width: 300,
                        backgroundColor: '#0378BD',
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    onPress={handleUpdatePassword}
                >
                    <Text style={{ color: '#E7F7FF', fontWeight: 'bold', fontSize: 25 }}>
                        Atualizar Senha
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}