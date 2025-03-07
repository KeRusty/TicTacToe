import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserDetails } from '../../Utils/redux/slices/user/selector';
import { useNavigation } from '@react-navigation/native';

// Components
import { TicTacToeBoard, BaseButton } from '../../Components';

// Styles
import { styles } from './styles';

function HomeScreen() {
  const navigation = useNavigation();
  const userDetails = useSelector(getUserDetails);

  return (
    <View style={styles.container}>
      <View style={styles.pageHeading}>
        <Text style={styles.pageText}>{`Welcome ${userDetails?.name}`}</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <BaseButton text={'Play New Game'} onPress={() => navigation.navigate('Game')} />
        </View>

        <View style={styles.buttonContainer}>
          <BaseButton text={'Resume Game'} onPress={() => {}} />
        </View>
      </View>

      {/* <TicTacToeBoard /> */}
    </View>
  );
}

export default HomeScreen;
