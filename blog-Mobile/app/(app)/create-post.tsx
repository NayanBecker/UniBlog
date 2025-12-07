import { useState } from "react";
import { View, TextInput, Button, Alert, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePickerComponent, { FileObject } from "../../src/components/ImageImportComponent";
import { url } from "../../src/services/api";
import Ionicons from "@expo/vector-icons/build/Ionicons";

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
                Alert.alert(
                    "Sessão expirada",
                    "Você precisa estar logado para criar um post."
                );
                router.navigate("/(auth)/login");
                return;
            }


            if (!titlePost && !contentPost && !imagePost) {
                Alert.alert(
                    "Post vazio",
                    "Adicione pelo menos um título, conteúdo ou imagem antes de publicar."
                );
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

                const response = await fetch(`${url}/posts/new`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        id_perfil: idPerfil,
                    },
                    body: formData,
                });

                if (!response.ok) {
                    let errorMsg = "Erro ao criar post.";
                    try {
                        const errorData = await response.json();
                        if (errorData?.message) errorMsg = errorData.message;
                    } catch { }

                    Alert.alert("Falha no envio", errorMsg);
                    return;
                }

                Alert.alert("Sucesso", "Seu post foi publicado com sucesso!");
                router.navigate("/(app)/feed");
            } catch (e: any) {
                if (e.message?.includes("Network request failed")) {
                    Alert.alert(
                        "Sem conexão",
                        "Não foi possível se conectar ao servidor. Verifique sua internet."
                    );

                } else {
                    Alert.alert(
                        "Erro inesperado",
                        e?.message ?? "Algo deu errado. Tente novamente."
                    );
                }
                console.error("Erro ao criar post:", e);

            }

        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <View style={styles.backgroundView}>
            <View style={{ position: 'absolute', top: 15, zIndex: 1 }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close-circle-sharp" size={70} color={"#eeee"} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerView}>

                <TextInput
                    placeholder="#Título"
                    value={titlePost}
                    onChangeText={setTitlePost}
                    style={styles.TextInputContainerTitle}
                />

                <TextInput
                    placeholder="#Conteúdo"
                    value={contentPost}
                    onChangeText={setContentPost}
                    multiline
                    style={styles.TextInputContainer}
                />

                <View style={styles.ImageInputView}>
                    <ImagePickerComponent onFileSelected={setImagePost} />
                </View>

                <View style={{ backgroundColor: "#007AFF", borderRadius: 8, overflow: "hidden", marginBottom: 10 }}>
                    <Button
                        color={"#7AC8F6"}
                        title={isSubmitting ? "Publicando..." : "Blogar"}
                        onPress={handleSave}
                        disabled={isSubmitting}
                    />
                </View>

                {isSubmitting && <ActivityIndicator style={{ marginTop: 10 }} />}
            </View>

        </View>
    );
}
const styles = StyleSheet.create({

    backgroundView: {
        flex: 1,
        backgroundColor: "#23A7F5",
    },
    containerView: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 49,
        borderTopEndRadius: 40,
        padding: 12,
        backgroundColor: "#0378BD",

    },
    TextInputContainerTitle: {
        backgroundColor: "#E7F7FF",
        textAlign: 'left',
        padding: 12,
        borderRadius: 16,
        marginBottom: 20,
        marginTop: 48,
        opacity: 0.9
    },
    TextInputContainer: {
        backgroundColor: "#E7F7FF",
        textAlignVertical: 'top',
        padding: 12,
        borderRadius: 16,
        marginBottom: 25,
        minHeight: 150,
        opacity: 0.9
    },

    ImageInputView: {
        backgroundColor: "#E7F7FF",
        borderRadius: 16,
        marginBottom: 20,
        opacity: 0.9
    },

});