import React, { useState } from 'react';
import { SafeAreaView, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AuthService from '../../Utils/api/AuthService';
import { registerUser } from '../../Utils/redux/slices/user/userSlice';

// Components
import { BaseTextInput, BaseButton, LogoTitle } from '../../Components';

// Styles
import { styles } from './styles';

function RegisterScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onRegister = async () => {
    if (password === confirmPassword) {
      try {
        const registerResponse = await AuthService.register(email, password, name);
        if (registerResponse?.token) {
          dispatch(registerUser(registerResponse));
          navigation.navigate('Home');
        }
      } catch (error) {
        console.error('Register error', error);
      }
    } else {
      Alert.alert('Passwords Do Not Match', 'Check your password and try again', [
        {
          text: 'Try Again',
          onPress: () => {
            setEmail('');
            setName('');
            setPassword('');
            setConfirmPassword('');
          },
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <LogoTitle />
        <View style={styles.loginContentContainer}>
          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={email}
              placeholder="Email"
              type="email-address"
              onChangeText={(text: string) => setEmail(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={name}
              placeholder="Name"
              type="default"
              onChangeText={(text: string) => setName(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={password}
              placeholder="Password"
              password={true}
              type="default"
              onChangeText={(text: string) => setPassword(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={confirmPassword}
              placeholder="Confirm Password"
              password={true}
              type="default"
              onChangeText={(text: string) => setConfirmPassword(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <BaseButton text={'Register'} smallButton={true} onPress={onRegister} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RegisterScreen;
