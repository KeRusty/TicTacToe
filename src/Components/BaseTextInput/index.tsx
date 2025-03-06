import React from 'react';
import {TextInput, View} from 'react-native';

// styles
import {styles} from './styles';

interface BaseTextInputProps {
  placeholder?: string;
  password?: boolean;
}

function BaseTextInput({placeholder, password = false}: BaseTextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputContainer}
        placeholder={placeholder}
        secureTextEntry={password}
      />
    </View>
  );
}

export default BaseTextInput;
