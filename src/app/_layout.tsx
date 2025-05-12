import {Stack} from "expo-router";
import {ToastProvider} from "react-native-toast-notifications"
import AuthProvider from "../provider/auth-provider";
import QueryProvider from "../provider/query-provider";
import { StripeProvider } from "@stripe/stripe-react-native";
export default function RootLayout() {
    return (
      <ToastProvider>
        <AuthProvider>
          <QueryProvider>
            <StripeProvider publishableKey={process.env.STRIPE_PUBLISHABLE_KEY!}>
              <Stack>
                <Stack.Screen
                  name="(shop)"
                  options={{ headerShown: false, title: "Shop" }}
                />
                <Stack.Screen
                  name="Categories"
                  options={{ headerShown: false, title: "Categories" }}
                />

                <Stack.Screen
                  name="product"
                  options={{ headerShown: true, title: "Products" }}
                />
                <Stack.Screen
                  name="cart"
                  options={{ presentation: "modal", title: "Shopping Cart" }}
                />
                <Stack.Screen name="auth" options={{ headerShown: false }} />
              </Stack>
            </StripeProvider>
          </QueryProvider>
        </AuthProvider>
      </ToastProvider>
    );
}