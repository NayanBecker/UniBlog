import { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { api } from "../src/services/api";
import { router } from "expo-router";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function handleSave() {
        try {
            await api.post("/posts", {
                title_Post: title || undefined,
                content_Post: content || undefined,
            });
            Alert.alert("Sucesso", "Post criado!");
            router.replace("/feed");
        } catch (e: any) {
            Alert.alert("Erro", e?.message ?? "Falha ao criar post");
        }
    }

    return (
        <View style={{ flex: 1, gap: 12, padding: 16 }}>
            <TextInput
                placeholder="Título (opcional)"
                value={title}
                onChangeText={setTitle}
                style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}
            />
            <TextInput
                placeholder="Conteúdo (opcional)"
                value={content}
                onChangeText={setContent}
                multiline
                style={{ borderWidth: 1, padding: 12, borderRadius: 8, minHeight: 120 }}
            />
            <Button title="Publicar" onPress={handleSave} />
        </View>
    );
}
