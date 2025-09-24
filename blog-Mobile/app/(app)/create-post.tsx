import { useState } from "react";
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePickerComponent, { FileObject } from "../../src/components/ImageImportComponent";

export default function CreatePost() {
    const [titlePost, setTitlePost] = useState("");
    const [contentPost, setContentPost] = useState("");
    const [imagePost, setImagePost] = useState<FileObject | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSave() {
        try {
            setIsSubmitting(true);
            const token = await AsyncStorage.getItem("token");
            const idPerfil = await AsyncStorage.getItem("id_perfil");

            if (!token || !idPerfil) {
                Alert.alert("Erro", "Usuário não autenticado ou perfil não selecionado");
                router.navigate("/(auth)/login");
                return;
            }

            const formData = new FormData();

            for (const [key, value] of (formData as any).entries()) {
                console.log("📦 FormData:", key, value);
            }

            if (titlePost) {
                formData.append("title_Post", titlePost);
            }
            if (contentPost) {
                formData.append("content_Post", contentPost);
            }
            if (imagePost) {
                formData.append("image_Post", {
                    uri: imagePost.uri,
                    type: imagePost.type || "image/jpeg",
                    name: imagePost.name || "upload.jpg",
                } as any);
            }

            try {
                const response = await fetch(`http://minio.uniblog.cloud:3333/posts/new`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        id_perfil: idPerfil,
                    },
                    body: formData,
                });

                Alert.alert("Sucesso", "Post criado!");
                router.navigate("/(app)/feed");
            } catch (e: any) {
                Alert.alert("Erro", e?.message ?? "Falha ao criar post");
                console.error("Erro ao criar post:", e?.message ?? e);
            }

            function handleFileSelected(file: FileObject) {
                setImagePost(file);
                console.log("Imagem selecionada:", file.uri);
            }
        }

        catch (e: any) {
            Alert.alert("Erro", e?.message ?? "Falha ao criar post");
            console.error("Erro ao criar post:", e?.message ?? e);
        } finally {
            setIsSubmitting(false);
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

            <Button
                title={isSubmitting ? "Publicando..." : "Publicar"}
                onPress={handleSave}
                disabled={isSubmitting}
            />

            {isSubmitting && <ActivityIndicator style={{ marginTop: 10 }} />}
        </View>
    );
}
