import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUserDetails} from '../../Utils/redux/slices/user/userSlice';

// Components
import {BaseTextInput, BaseButton, LogoTitle} from '../../Components';
import {NavToReg} from './components';

// Styles
import {styles} from './styles';

function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = () => {
    if (email.length > 0 && password.length > 0) {
      dispatch(setUserDetails({email, password}));
      navigation.navigate('Home');
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <LogoTitle />
        <View style={styles.loginContentContainer}>
          <View style={styles.textInputContainer}>
            <BaseTextInput
              placeholder="User Name"
              onChangeText={(text: string) => setEmail(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              placeholder="Password"
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
