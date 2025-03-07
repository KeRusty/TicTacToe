import React from 'react';
import { TextInput, View } from 'react-native';

// styles
import { styles } from './styles';

interface BaseTextInputProps {
  placeholder?: string;
  password?: boolean;
  value?: string;
  onChangeText: any;
  type?: string;
}

function BaseTextInput({ placeholder, password = false, value, onChangeText, type }: BaseTextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputContainer}
        placeholder={placeholder}
        secureTextEntry={password}
        value={value}
        keyboardType={type}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
}

export default BaseTextInput;
