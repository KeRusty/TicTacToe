import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  appHeaderContainer: {
    backgroundColor: colors.blue,
    height: 100,
    justifyContent: 'center',
  },
  appHeaderContainerWhite: {
    backgroundColor: colors.white,
    height: 100,
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  backText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  rightText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '600',
  },
});
