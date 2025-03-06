import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';

// Components
import {BaseTextInput, BaseButton} from '../../Components';
import {NavToReg} from './components';

// Styles
import {styles} from './styles';

function LoginScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.loginContentContainer}>
          <View style={styles.textInputContainer}>
            <BaseTextInput placeholder="User Name" />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput placeholder="Password" password={true} />
          </View>

          <View style={styles.buttonContainer}>
            <BaseButton text={'Login'} onPress={() => {}} />
          </View>
        </View>

        <View>
          <NavToReg />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
