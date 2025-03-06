import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

interface BaseButtonProps {
  text: string;
}
function BaseButton({text}: BaseButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

export default BaseButton;
