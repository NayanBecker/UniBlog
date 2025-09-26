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

            if (!result.canceled && result.assets?.length > 0) {
                const asset = result.assets[0];
                setImageUri(asset.uri);

                const fileName = asset.uri.split("/").pop() || "image.jpg";
                const fileType = fileName.endsWith(".png") ? "image/png" : "image/jpeg";

                onFileSelected({
                    uri: asset.uri,
                    name: fileName,
                    type: fileType,
                });
            }
        } catch (error) {
            console.log("Erro ao selecionar imagem:", error);
            Alert.alert("Erro", "Falha ao selecionar imagem");
        }
    };

    return (
        <View style={styles.container}>
            <Button
                title={imageUri ? "Imagem selecionada" : "Selecionar imagem"}
                onPress={handlePickImage}
            />
            {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginVertical: 12, alignItems: "center" },
    imagePreview: { width: 150, height: 150, marginTop: 12, borderRadius: 8 },
});
