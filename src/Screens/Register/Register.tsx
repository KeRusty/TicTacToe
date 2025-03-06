import React, {useState} from 'react';
import {SafeAreaView, View, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Components
import {BaseTextInput, BaseButton} from '../../Components';

// Styles
import {styles} from './styles';
import {registerUser} from '../../Utils/redux/slices/user/userSlice';

function RegisterScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onRegister = () => {
    if (password === confirmPassword) {
      dispatch(registerUser({firstName, lastName, userName, password}));
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Passwords Do Not Match',
        'Check your password and try again',
        [
          {
            text: 'Try Again',
            onPress: () => {
              setFirstName('');
              setLastName('');
              setUserName('');
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
        <View style={styles.loginContentContainer}>
          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={firstName}
              placeholder="First Name"
              onChangeText={(text: string) => setFirstName(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={lastName}
              placeholder="Last Name"
              onChangeText={(text: string) => setLastName(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              value={userName}
              placeholder="User Name"
              onChangeText={(text: string) => setUserName(text)}
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
