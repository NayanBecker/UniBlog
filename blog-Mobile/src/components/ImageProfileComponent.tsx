import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

interface ImageProfileComponentProps {
  name: string | undefined;
  photoUrl?: string | null;
  size?: number;
  editable?: boolean;
  onPhotoChange?: (uri: string) => void;
}

export function ImageProfileComponent({
  name,
  photoUrl,
  size = 50,
  editable = false,
  onPhotoChange,
}: ImageProfileComponentProps) {
  const initial = name?.charAt(0).toUpperCase() || "?";
  const borderRadius = size / 2;

  const invalidPhotoUrls = [null, undefined, "", "undefined", "null"];

  const validPhotoUrl =
    photoUrl && !invalidPhotoUrls.includes(photoUrl.trim().toLowerCase())
      ? photoUrl
      : null;

  async function handlePickImage() {
    try {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        Alert.alert("Permissão necessária", "Permita o acesso às fotos para escolher uma imagem.");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        onPhotoChange?.(uri);
      }
    } catch (error) {
      console.error("Erro ao escolher imagem:", error);
    }
  }

  const ImageContainer = editable ? TouchableOpacity : View;

  return (
    <ImageContainer
      onPress={editable ? handlePickImage : undefined}
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius,
        },
      ]}
    >
      {validPhotoUrl ? (
        <Image
          source={{ uri: validPhotoUrl }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius,
          }}
        />
      ) : (
        <View
          style={[
            styles.initialsContainer,
            {
              borderRadius,
            },
          ]}
        >
          <Text
            style={[
              styles.initialsText,
              {
                fontSize: size / 2.2,
              },
            ]}
          >
            {initial}
          </Text>
        </View>
      )}

      {editable && (
        <View style={styles.editBadge}>
          <Text style={{ color: "#fff", fontSize: 10 }}>Editar</Text>
        </View>
      )}
    </ImageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  initialsContainer: {
    width: "100%",
    height: "100%",
    borderWidth: 3,
    borderColor: "#23A7F5",
    justifyContent: "center",
    alignItems: "center",
  },
  initialsText: {
    color: "#23A7F5",
    fontWeight: "bold",
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#23A7F5",
    width: "100%",
    paddingVertical: 2,
    alignItems: "center",
  },
});
