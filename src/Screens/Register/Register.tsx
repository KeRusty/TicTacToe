import React from 'react';
import {SafeAreaView, View} from 'react-native';

// Components
import {BaseTextInput, BaseButton} from '../../Components';

// Styles
import {styles} from './styles';

function RegisterScreen() {
  const onRegister = () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.loginContentContainer}>
          <View style={styles.textInputContainer}>
            <BaseTextInput placeholder="First Name" />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput placeholder="Last Name" />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput placeholder="User Name" />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput placeholder="Password" password={true} />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput placeholder="Confirm Password" password={true} />
          </View>

          <View style={styles.buttonContainer}>
            <BaseButton text={'Register'} onPress={onRegister} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RegisterScreen;
