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

    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    if (!publishableKey) {
        throw new Error(
            'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
        )
    }

    return (
        <Stack>
            <Stack.Screen name="(taps)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/signin" options={{ headerShown: false}} />
            <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
        </Stack>
    )
}

