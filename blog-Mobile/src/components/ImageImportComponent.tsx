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
            {!imageUri ? (
                <View style={{ overflow: "hidden", borderRadius: 16 }}>
                    <Button
                        title={"Selecionar Momento"}
                        onPress={handlePickImage}
                        color={"#7AC8F6"}

                    />
                </View>
            ) : (
                <View style={styles.containerImage}>
                    {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} />}

                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
                        <Button
                            title={"Cancelar"}
                            onPress={() => {
                                setImageUri("");
                            }}
                        />
                        <Button
                            title={"Selecionar"}
                            onPress={handlePickImage}
                        />
                    </View>

                </View>

            )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },

    imagePreview: {
        width: 320,
        height: 310,
        borderRadius: 16,
        alignSelf: "center",
    },
    containerImage: {

    }
});
