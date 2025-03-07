import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  statBox: {
    backgroundColor: colors.darkGray,
    padding: 20,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  statBoxGreen: {
    backgroundColor: colors.lightGreen,
    padding: 20,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  statBoxRed: {
    backgroundColor: colors.lightRed,
    padding: 20,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  statText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
