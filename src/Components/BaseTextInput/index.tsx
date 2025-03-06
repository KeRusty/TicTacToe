import React from 'react';
import {TextInput, View} from 'react-native';

// styles
import {styles} from './styles';

interface BaseTextInputProps {
  placeholder?: string;
  password?: boolean;
  value?: string;
}

function BaseTextInput({
  placeholder,
  password = false,
  value,
}: BaseTextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputContainer}
        placeholder={placeholder}
        secureTextEntry={password}
        value={value}
      />
    </View>
  );
}

export default BaseTextInput;
