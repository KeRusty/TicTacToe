import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainStack from './src/Routes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0000" />
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
