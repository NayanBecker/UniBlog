import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type NavRoute = '/(app)/feed' | '/(app)/create-post';

const navItems: { name: string; icon: string; route: NavRoute }[] = [
    { name: 'Home', icon: 'home-outline', route: '/(app)/feed' },
    { name: 'Search', icon: 'search-outline', route: '/(app)/feed' },
    { name: 'Post', icon: 'add-circle-outline', route: '/(app)/create-post' },
    { name: 'Notifications', icon: 'notifications-outline', route: '/(app)/feed' },
    { name: 'Profile', icon: 'person-outline', route: '/(app)/feed' },
];

const NavBar: React.FC = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {navItems.map((item) => (
                <TouchableOpacity
                    key={item.name}
                    style={styles.navItem}
                    onPress={() => router.navigate(item.route)}
                >
                    <Ionicons name={item.icon as any} size={26} color="#333" />
                    <Text style={styles.label}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navItem: {
        alignItems: 'center',
        flex: 1,
    },
    label: {
        fontSize: 12,
        color: '#333',
        marginTop: 2,
    },
});

export default NavBar;