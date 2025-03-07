import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../Utils/colors';

const { width } = Dimensions.get('window');
const SIZE = (width * 0.8) / 3; // Dynamic cell size

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.gray },
  status: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  board: { width: width * 0.8, flexDirection: 'row', flexWrap: 'wrap' },
  cell: {
    width: SIZE,
    height: SIZE,
    borderWidth: 2,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: { fontSize: 32, fontWeight: 'bold' },
  resetButton: { marginTop: 20, padding: 10, backgroundColor: colors.blue, borderRadius: 5 },
  resetText: { color: colors.white, fontSize: 18, fontWeight: 'bold' },
});
