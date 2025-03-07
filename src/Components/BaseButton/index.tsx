import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface BaseButtonProps {
  text: string;
  onPress: () => void;
  smallButton?: boolean;
}
function BaseButton({ text, onPress, smallButton = false }: BaseButtonProps) {
  return (
    <TouchableOpacity style={[smallButton ? styles.buttonContainerSmall : styles.buttonContainer]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default BaseButton;
