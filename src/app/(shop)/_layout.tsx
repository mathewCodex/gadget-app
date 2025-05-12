import {Redirect, Tabs} from 'expo-router';
import {StyleSheet, ActivityIndicator} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesome} from '@expo/vector-icons'
import {useAuth} from "../../provider/auth-provider"
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string
}){
   return  <FontAwesome size={24} {...props} style={{ color: "#1BC464"}} />;
}



const TabsLayout = () => {
  const {session, mounting} = useAuth();

  if (mounting) return <ActivityIndicator />;

  if (!session) return <Redirect  href="/auth" />
    return (
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#1BC454",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: { fontSize: 16 },
            tabBarStyle: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingTop: 10,
            },
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              //   headerShown: false,
              title: "shop",
              tabBarIcon(props) {
                return <TabBarIcon {...props} name="shopping-cart" />;
              },
            }}
          />
          <Tabs.Screen
            name="orders"
            options={{
              //   headerShown: false,
              title: "Orders",
              tabBarIcon(props) {
                return <TabBarIcon {...props} name="book" />;
              },
            }}
          />
        </Tabs>
      </SafeAreaView>
    );
}
export default TabsLayout;


const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
})