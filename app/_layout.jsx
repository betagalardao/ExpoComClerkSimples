import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import LoginScreen from './sign-in';
import { Drawer } from 'expo-router/drawer';

const tokenCache = {
    async getToken(key) {
        return SecureStore.getItemAsync(key);
    },
    async saveToken(key, value) {
        return SecureStore.setItemAsync(key, value);
    },
};

const CLERKPUBLIC_KEY = 'pk_test_cmVmaW5lZC1jb3lvdGUtNjAuY2xlcmsuYWNjb3VudHMuZGV2JA';

export default function Layout() {
    return (
        <ClerkProvider
            publishableKey={CLERKPUBLIC_KEY}
            tokenCache={tokenCache}
        >
        <Drawer>
                <Drawer.Screen name="home" options={{ title: 'Início' }} />
                <Drawer.Screen name="about" options={{ title: 'Sobre' }} />
                <Drawer.Screen name="sign-in" options={{ title: 'Login' }} />
            </Drawer>
        </ClerkProvider>
    );
}
