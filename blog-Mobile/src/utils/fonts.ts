import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export function useFonts() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync({
                    'Montserrat-Regular': require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
                    'Khula-Regular': require('../../assets/fonts/Khula-Regular.ttf'),
                    'Khula-Bold': require('../../assets/fonts/Khula-Bold.ttf'),
                });
                setFontsLoaded(true);
            } catch (e) {
                console.warn('Error loading fonts:', e);
            } finally {
                SplashScreen.hideAsync();
            }
        }

        loadFonts();
    }, []);

    return fontsLoaded;
}