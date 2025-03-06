import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import {BaseTextInput, BaseButton} from '../../Components';
import {NavToReg} from './components';

// Styles
import {styles} from './styles';

function LoginScreen() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = () => {
    if (userName.length > 0 && password.length > 0) {
      navigation.navigate('Home');
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.loginContentContainer}>
          <View style={styles.textInputContainer}>
            <BaseTextInput
              placeholder="User Name"
              onChangeText={text => setUserName(text)}
            />
          </View>

          <View style={styles.textInputContainer}>
            <BaseTextInput
              placeholder="Password"
              password={true}
              onChangeText={text => setPassword(text)}
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
