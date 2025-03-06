import React, {useState} from 'react';
import {SafeAreaView, View, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Components
import {BaseTextInput, BaseButton, LogoTitle} from '../../Components';

// Styles
import {styles} from './styles';
import {registerUser} from '../../Utils/redux/slices/user/userSlice';

function RegisterScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onRegister = () => {
    if (password === confirmPassword) {
      dispatch(registerUser({email, name, password}));
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Passwords Do Not Match',
        'Check your password and try again',
        [
          {
            text: 'Try Again',
            onPress: () => {
              setEmail('');
              setName('');
              setPassword('');
              setConfirmPassword('');
            },
          },
        ],
      );
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
              onChangeText={(text: string) => setEmail(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={name}
              placeholder="Name"
              onChangeText={(text: string) => setName(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={password}
              placeholder="Password"
              password={true}
              onChangeText={(text: string) => setPassword(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={confirmPassword}
              placeholder="Confirm Password"
              password={true}
              onChangeText={(text: string) => setConfirmPassword(text)}
            />
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
