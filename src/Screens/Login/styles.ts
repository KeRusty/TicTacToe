import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  textInputContainer: {
    paddingVertical: 10,
    width: '100%',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  loginContentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
