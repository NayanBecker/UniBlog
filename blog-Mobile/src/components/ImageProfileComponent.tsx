import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface ImageProfileComponentProps {
    name: string | undefined;
    photoUrl?: string | null;
}

export function ImageProfileComponent({ name, photoUrl }: ImageProfileComponentProps) {
    const initial = name?.charAt(0).toUpperCase() || "?";

    return (
        <View style={styles.container}>
            {photoUrl ? (
                <Image
                    source={{ uri: photoUrl }}
                    style={styles.image}
                />
            ) : (
                <View style={styles.initialsContainer}>
                    <Text style={styles.initialsText}>{initial}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    initialsContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#23A7F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    initialsText: {
        color: '#23A7F5',
        fontSize: 24,
        fontWeight: 'bold',
    },
});