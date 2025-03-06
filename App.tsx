import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainStack from './src/Routes';
import {Provider} from 'react-redux';
import {store} from './src/Utils/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#0000" />
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
