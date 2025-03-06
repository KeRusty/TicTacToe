import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';

// Styles
import {styles} from './styles';

function LoginScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text>LOGIN</Text>
        <TextInput placeholder="enter" />
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
