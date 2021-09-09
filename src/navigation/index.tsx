import React from 'react';
import {StatusBar} from 'react-native';
import Main from '../screens/Main/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../screens/Details/Details';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Details" component={Details} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
