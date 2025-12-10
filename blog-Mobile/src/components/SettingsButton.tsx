import React, { useState } from "react";
import { View, Modal, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { logout } from "../utils/logout";

export function SettingsButton() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogout = () => {
        setModalVisible(false);
        logout();
    };

    return (
        <View>
            {/* Ícone de engrenagem */}
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.iconButton}>
                <Ionicons name="settings-outline" size={35} color="#0378BD" />
            </TouchableOpacity>

            {/* Modal com opções */}
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPressOut={() => setModalVisible(false)}
                >
                    <View style={styles.menu}>
                        <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
                            <Text style={styles.menuText}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        position: "absolute",
        top: 60,
        right: 20,
        zIndex: 2,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    menu: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginRight: 20,
        marginBottom: 100,
        width: 150,
        paddingVertical: 10,
        elevation: 5,
    },
    menuItem: {
        paddingVertical: 12,
        paddingHorizontal: 15,
    },
    menuText: {
        fontSize: 16,
        color: "#FF4F45",
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    },
});
