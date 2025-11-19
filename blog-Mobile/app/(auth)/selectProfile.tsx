import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { api } from "../../src/services/api";

type ProfileData = {
    id_Perfil: number;
    nome_Perfil: string;
    foto_Perfil?: string | null;
};

export default function SelectProfile() {
    const [profiles, setProfiles] = useState<ProfileData[]>([]);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        async function fetchProfiles() {
            try {
                const res = await api.get("/profile/get/AccountProfiles");
                setProfiles(res.data);
            } catch (err: any) {
                console.log("Erro ao carregar perfis:", err.message);
                Alert.alert("Erro", "Falha ao carregar perfis");
            } finally {
                setLoading(false);
            }
        }
        fetchProfiles();
    }, []);

    const handleSelect = async (profile: ProfileData) => {
        try {
            await AsyncStorage.setItem("id_Perfil", String(profile.id_Perfil));
            console.log("Perfil selecionado:", profile.id_Perfil);

            router.replace("/(app)/feed");
        } catch (err: any) {
            console.log("Erro ao selecionar perfil:", err.message);
            Alert.alert("Erro", "Falha ao selecionar perfil");
        }
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
                <Text>Carregando perfis...</Text>
            </View>
        );
    }

    return (
        <View style={styles.backGroundContainer}>
            <Text style={styles.title}>Selecione um Perfil</Text>
            <FlatList
                data={profiles}
                keyExtractor={(item) => String(item.id_Perfil)}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.profileItem}
                        onPress={() => handleSelect(item)}
                    >
                        <Text style={styles.profileName}>{item.nome_Perfil}</Text>
                    </TouchableOpacity>

                )}
                ListEmptyComponent={<Text>Nenhum perfil encontrado.</Text>}
                ListFooterComponent={
                    <TouchableOpacity
                        style={[styles.profileItem, styles.newProfileButton]}
                        onPress={() => router.push("/registerProfile")}
                    >
                        <Text style={styles.newProfileText}>+ Criar Novo Perfil</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backGroundContainer: { flex: 1, padding: 24, backgroundColor: "#23A7F5" },
    title: { fontSize: 30, fontWeight: "bold", marginVertical: 24 },
    profileItem: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#f2f2f2",
        marginBottom: 12,
    },
    profileName: { fontSize: 18 },
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    newProfileButton: { backgroundColor: "#000", alignItems: "center" },
    newProfileText: { color: "#fff", fontWeight: "bold" },
});