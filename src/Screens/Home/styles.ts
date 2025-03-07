import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  mainContainer: {
    marginHorizontal: 16,
  },
  pageHeading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  pageText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '600',
  },
  pageTextSubHeading: {
    paddingTop: 10,
    color: colors.black,
    fontSize: 14,
    fontWeight: '400',
  },
  buttonContainer: {
    marginVertical: 15,
  },
});
