import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserDetails } from '../../Utils/redux/slices/user/selector';

// Components
import { TicTacToeBoard } from '../../Components';

// Styles
import { styles } from './styles';

function HomeScreen() {
  const userDetails = useSelector(getUserDetails);

  return (
    <View style={styles.container}>
      <View style={styles.pageHeading}>
        <Text style={styles.pageText}>{`Welcome ${userDetails?.name}`}</Text>
      </View>
      <TicTacToeBoard />
    </View>
  );
}

export default HomeScreen;
