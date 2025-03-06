import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.blue,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
