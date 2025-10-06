import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../../src/components/navBarComponent';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search Screen</Text>
            <Text style={styles.subtitle}>This is the search page for testing navbar navigation</Text>
            <NavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#23A7F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});