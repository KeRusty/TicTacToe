import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

interface BaseButtonProps {
  text: string;
  onPress: () => void;
}
function BaseButton({text, onPress}: BaseButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default BaseButton;
