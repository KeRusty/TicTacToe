import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    marginHorizontal: 16,
  },
  pageHeading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  pageText: {
    color: colors.blue,
    fontSize: 20,
    fontWeight: '600',
  },
  buttonContainer: {
    marginVertical: 30,
  },
});
