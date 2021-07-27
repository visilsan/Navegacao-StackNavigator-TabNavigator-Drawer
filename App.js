import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppContacts from "./src/screens/AppContacts";
import Contacts from "./src/screens/Contacts";
import Information from "./src/screens/Information";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="AppContacts" component={AppContacts}/>
    <Tab.Screen name="Contacts" component={Contacts}/>
  </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppContacts" component={Tabs} />
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
