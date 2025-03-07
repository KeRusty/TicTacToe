import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  pageHeading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  pageText: {
    color: colors.black,
    fontSize: 30,
    fontWeight: '600',
  },
  buttonContainer: {
    marginVertical: 30,
  },
});
