import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { api } from "../../src/services/api";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePickerComponent, { FileObject } from "../../src/components/ImageImportComponent";

export default function CreatePost() {
    const [titlePost, setTitlePost] = useState("");
    const [contentPost, setContentPost] = useState("");
    const [imagePost, setImagePost] = useState<FileObject | null>(null);

    async function handleSave() {
        const token = await AsyncStorage.getItem("token");
        const idPerfil = await AsyncStorage.getItem("id_perfil");
        console.log("Token:", token);
        console.log("ID Perfil:", idPerfil);

        try {
            const formData = new FormData();

            if (titlePost) {
                formData.append("title_Post", titlePost);
            }
            if (contentPost) {
                formData.append("content_Post", contentPost);
            }
            if (imagePost) {
                formData.append("image_Post", {
                    uri: imagePost.uri,
                    name: imagePost.name,
                    type: imagePost.type,
                } as any);
            }

            console.log("FormData enviado:");
            console.log("title_Post:", titlePost);
            console.log("content_Post:", contentPost);

            (formData as any)._parts.forEach((p: any) => {
                console.log("FormData:", p[0], p[1]);
            });

            const response = await api.post("/posts/new", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                    "id_perfil": idPerfil,

                },
            });
            console.log("Resposta do servidor:", response.data);

            Alert.alert("Sucesso", "Post criado!");

            router.navigate("/feed");
        } catch (e: any) {
            Alert.alert("Erro", e?.message ?? "Falha ao criar post");
            console.error("Erro ao criar post:", e?.message ?? e);
        }
    }

    return (
        <View style={{ flex: 1, gap: 12, padding: 16 }}>
            <View style={{ alignItems: "center", marginTop: 40, marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Criar Novo Post</Text>

            </View>
            <TextInput
                placeholder="Título (opcional)"
                value={titlePost}
                onChangeText={setTitlePost}
                style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}
            />
            <TextInput
                placeholder="Conteúdo (opcional)"
                value={contentPost}
                onChangeText={setContentPost}
                multiline
                style={{ borderWidth: 1, padding: 12, borderRadius: 8, minHeight: 120 }}
            />
            <ImagePickerComponent onFileSelected={setImagePost} />

            <Button title="Publicar" onPress={handleSave} />
        </View>
    );
}
