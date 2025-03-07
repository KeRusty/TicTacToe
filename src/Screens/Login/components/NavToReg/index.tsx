import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

function NavToReg() {
  const navigation = useNavigation();
  return (
    <View style={styles.navToRegContainer}>
      <Text>Don't have an account?</Text>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerButtonText}>Register Here</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NavToReg;
