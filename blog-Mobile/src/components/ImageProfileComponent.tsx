import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface ImageProfileComponentProps {
  name: string | undefined;
  photoUrl?: string | null;
  size?: number; 
}

export function ImageProfileComponent({
  name,
  photoUrl,
  size = 50,
}: ImageProfileComponentProps) {
  const initial = name?.charAt(0).toUpperCase() || "?";
  const borderRadius = size / 2;

  const invalidPhotoUrls = [null, undefined, "", "undefined", "null"];

  const validPhotoUrl =
    photoUrl && !invalidPhotoUrls.includes(photoUrl.trim().toLowerCase())
      ? photoUrl
      : null;

  return (
    <View
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
    </View>
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
});
