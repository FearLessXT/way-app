import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf') 
    });

    useEffect(() => {
        if(loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if(!loaded) {
        return null;
    }

    return (
        <Stack>
        <Stack.Screen name="(taps)" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ presentation: 'modal' }} />
        <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
      </Stack>
    )
}

