import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";

const NavBar: React.FC = () => {
    const router = useRouter();
    const currentPath = usePathname();

    return (
        <View style={styles.container}>
            {/* Home */}
            <TouchableOpacity
                style={[
                    styles.navItem,
                    currentPath === "/(app)/feed" && styles.navItemSelected,
                ]}
                onPress={() => router.push("/(app)/feed")}
            >
                <Ionicons
                    name={currentPath === "/(app)/feed" ? "home" : "home-outline"}
                    size={28}
                    color={currentPath === "/(app)/feed" ? "#444444" : "#FFFFFF"}
                />
            </TouchableOpacity>

            {/* Notifications */}
            <TouchableOpacity
                style={[
                    styles.navItem,
                    currentPath === "/(app)/notification" && styles.navItemSelected,
                ]}
                onPress={() => router.push("/(app)/notification")}
            >
                <Ionicons
                    name={
                        currentPath === "/(app)/notification"
                            ? "notifications"
                            : "notifications-outline"
                    }
                    size={28}
                    color={currentPath === "/(app)/notification" ? "#444444" : "#FFFFFF"}
                />
            </TouchableOpacity>

            {/* Search */}
            <TouchableOpacity
                style={[
                    styles.navItem,
                    currentPath === "/(app)/search" && styles.navItemSelected,
                ]}
                onPress={() => router.push("/(app)/search")}
            >
                <Ionicons
                    name={currentPath === "/(app)/search" ? "search" : "search-outline"}
                    size={28}
                    color={currentPath === "/(app)/search" ? "#444444" : "#FFFFFF"}
                />
            </TouchableOpacity>

            {/* Profile */}
            <TouchableOpacity
                style={[
                    styles.navItem,
                    currentPath === "/(app)/profile" && styles.navItemSelected,
                ]}
                onPress={() => router.push("/(app)/profile")}
            >
                <Ionicons
                    name={currentPath === "/(app)/profile" ? "person" : "person-outline"}
                    size={28}
                    color={currentPath === "/(app)/profile" ? "#444444" : "#FFFFFF"}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 70,
        backgroundColor: "#0378BD",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 10,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    navItem: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    navItemSelected: {
        backgroundColor: "#ff0000ff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});

export default NavBar;
