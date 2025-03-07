import React, { useState } from 'react';
import { SafeAreaView, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../Utils/redux/slices/user/userSlice';
import AuthService from '../../Utils/api/AuthService';

// Components
import { BaseTextInput, BaseButton, LogoTitle } from '../../Components';
import { NavToReg } from './components';

// Styles
import { styles } from './styles';

function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = async () => {
    if (email.length > 0 && password.length > 0) {
      try {
        const loginResponse = await AuthService.login(email, password);
        if (loginResponse?.token) {
          dispatch(setUserDetails(loginResponse));
          navigation.navigate('Home');
        }
      } catch (error) {
        console.error('Register error', error);
      }
      // navigation.navigate('Home');
    } else {
      Alert.alert('Invalid User', 'Please check your details and try again', [
        {
          text: 'Try Again',
          onPress: () => {
            setEmail('');
            setPassword('');
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
            <BaseTextInput placeholder="Email" type="email-address" onChangeText={(text: string) => setEmail(text)} />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              placeholder="Password"
              type="default"
              password={true}
              onChangeText={(text: string) => setPassword(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <BaseButton text={'Login'} onPress={() => onLogin()} />
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
