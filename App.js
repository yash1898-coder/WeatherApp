import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import MapDetails from './src/Screens/MapDetails';

const Stack = createStackNavigator();


function secondScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
         headerShown:false
          
        }}/>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown:false
        }}/>
        <Stack.Screen
        name="MapDetails"
        component={MapDetails}
        options={{
          headerShown:false
        }}/>
    </Stack.Navigator>
  );
}

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
         headerShown:false
          
        }}/>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown:false
        }}/>
        <Stack.Screen
        name="MapDetails"
        component={MapDetails}
        options={{
          headerShown:false
        }}/>
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;

