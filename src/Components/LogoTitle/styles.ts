import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    // marginTop: -40, not wise to use a negative margin
  },
  text: {
    color: colors.black,
    fontSize: 40,
    fontWeight: '600',
  },
});
