import React, { useState } from "react";
import { View, Button, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export interface FileObject {
    uri: string;
    name: string;
    type: string;
}

interface ImagePickerComponentProps {
    onFileSelected: (file: FileObject) => void;
}

export default function ImagePickerComponent({ onFileSelected }: ImagePickerComponentProps) {
    const [imageUri, setImageUri] = useState<string>("");

    const handlePickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 7],
                quality: 1,
            });

            console.log("Resultado do ImagePicker:", result);

            if (!result.canceled && result.assets && result.assets.length > 0) {
                const asset = result.assets[0];

                const filename = asset.fileName || asset.uri.split("/").pop() || "upload.jpg";
                const ext = filename.split(".").pop();
                const type = asset.mimeType || (ext ? `image/${ext}` : "image/jpeg");

                const file: FileObject = {
                    uri: asset.uri,
                    name: filename,
                    type: type,
                };

                setImageUri(asset.uri);
                onFileSelected(file); // 🔹 devolve o arquivo pronto
            }
        } catch (error) {
            console.error("Erro ao selecionar imagem:", error);
            Alert.alert("Erro", "Não foi possível selecionar a imagem");
        }
    };

    return (
        <View style={styles.container}>
            <Button
                title={imageUri ? "Imagem selecionada" : "Selecionar imagem"}
                onPress={handlePickImage}
            />
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.imagePreview} />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginVertical: 12, alignItems: "center" },
    imagePreview: { width: 150, height: 150, marginTop: 12, borderRadius: 8 },
});
