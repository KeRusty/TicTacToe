import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Routes
import LoginScreen from '../Screens/Login/Login';
import HomeScreen from '../Screens/Home/Home';

const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Overview'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
