import React from 'react';
import {TextInput, View} from 'react-native';

// styles
import {styles} from './styles';

interface BaseTextInputProps {
  placeholder?: string;
  password?: boolean;
  value?: string;
  onChangeText: any;
}

function BaseTextInput({
  placeholder,
  password = false,
  value,
  onChangeText,
}: BaseTextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputContainer}
        placeholder={placeholder}
        secureTextEntry={password}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
}

export default BaseTextInput;
