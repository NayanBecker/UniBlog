import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { api } from "../../src/services/api";
import CourseSelector from "@/src/components/CourseSelectorComponent";

export default function CreateProfile() {
    const router = useRouter();
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const [data, setData] = useState({
        nome_Perfil: "",
        email_Perfil: "",
        descricao_Perfil: "",
        tipo_Perfil: "PESSOAL",
        id_Curso_Perfil: 0,
        semestre_Perfil: "1",
    });

    async function handleCreateProfile() {
        const formData = new FormData();
        formData.append("nome_Perfil", data.nome_Perfil);
        formData.append("email_Perfil", data.email_Perfil);
        formData.append("descricao_Perfil", data.descricao_Perfil);
        formData.append("tipo_Perfil", data.tipo_Perfil);
        formData.append("id_Curso_Perfil", data.id_Curso_Perfil.toString());
        formData.append("semestre_Perfil", data.semestre_Perfil);
        formData.append("createdAt_Perfil", new Date().toISOString());

        try {
            setSending(true);
            await api.post("/profile/new", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setSuccess(true);
            setTimeout(() => router.replace("/(app)/feed"), 1800);
        } catch (err) {
            console.log("Erro ao criar perfil:", err);
            setSending(false);
        }
    }

    if (success) {
        return (
            <View style={styles.center}>
                <Text style={styles.successText}>Perfil criado com sucesso!</Text>
            </View>
        );
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.container}
        >
            <View>
                <Text style={styles.title}>Criar Novo Perfil</Text>

                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    value={data.nome_Perfil}
                    onChangeText={(t) => setData({ ...data, nome_Perfil: t })}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    value={data.email_Perfil}
                    onChangeText={(t) => setData({ ...data, email_Perfil: t })}
                />
                <TextInput
                    placeholder="Descrição"
                    style={styles.input}
                    value={data.descricao_Perfil}
                    onChangeText={(t) => setData({ ...data, descricao_Perfil: t })}
                />
                <CourseSelector
                    onSelect={(courseId) =>
                        setData({
                            ...data, id_Curso_Perfil: courseId
                        })
                    }
                />


                <TouchableOpacity
                    disabled={sending}
                    style={[styles.button, sending && { opacity: 0.6 }]}
                    onPress={handleCreateProfile}
                >
                    <Text style={styles.buttonText}>
                        {sending ? "Criando..." : "Criar Perfil"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.back()} style={styles.cancelBtn}>
                    <Text style={styles.cancelText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#23A7F5",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: { fontSize: 28, color: "#fff", fontWeight: "bold", marginBottom: 20, textAlign: "center" },
    input: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        width: 280,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#000",
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
    cancelBtn: { marginTop: 16 },
    cancelText: { color: "#fff", textAlign: "center" },
    center: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#23A7F5" },
    successText: { color: "#fff", fontSize: 20, marginTop: 20, fontWeight: "bold" },
});
