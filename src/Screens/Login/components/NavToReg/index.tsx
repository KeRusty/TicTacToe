import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

function NavToReg() {
  return (
    <View style={styles.navToRegContainer}>
      <Text>Don't have an account?</Text>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register Here</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NavToReg;
