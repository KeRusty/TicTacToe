import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { AppHeader } from '../Components';

// Routes
import LoginScreen from '../Screens/Login/Login';
import HomeScreen from '../Screens/Home/Home';
import RegisterScreen from '../Screens/Register/Register';
import StatisticsScreen from '../Screens/Statistics/Statistics';
import GameScreen from '../Screens/Game/Game';

const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => {
            return <AppHeader routeName={'Login'} isRightTextVisible={true} rightText="Log Out" showNoColor />;
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          header: () => {
            return <AppHeader routeName={'Login'} showNoColor={true} />;
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          header: () => {
            return <AppHeader routeName={'Register'} isBackVisible={true} />;
          },
        }}
      />
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{
          header: () => {
            return <AppHeader routeName={'Game'} isBackVisible={true} />;
          },
        }}
      />
      <Stack.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          header: () => {
            return <AppHeader routeName={'Game'} isBackVisible={true} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
