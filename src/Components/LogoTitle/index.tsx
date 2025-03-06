import * as React from 'react';
import {View, Text} from 'react-native';

// styles
import {styles} from './styles';

function LogoTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tic.Tac.Toe</Text>
    </View>
  );
}

export default LogoTitle;
