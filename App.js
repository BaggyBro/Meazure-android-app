import { View, Text, StyleSheet } from "react-native";
import MainDataScreen from "./app/screens/MainDataScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CustDataDetail from "./app/components/CudtDataDetail";
import { NavigationContainer } from "@react-navigation/native";
import DataProvider from "./app/context/DataProvider";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DataProvider>
        <stack.Navigator
          screenOptions={{ headerTitle: "", headerTransparent: true }}
        >
          <stack.Screen component={MainDataScreen} name="MainDataScreen" />
          <stack.Screen component={CustDataDetail} name="CustDataDetail" />
        </stack.Navigator>
      </DataProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
