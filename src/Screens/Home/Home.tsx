import React from 'react';
import { View, Text, Alert } from 'react-native';
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

  const navigateToGamePage = async() => {
    
    Alert.alert('Who Starts the Game?', 'would it be you or the CPU?', [
      {
        text: 'Me',
        onPress: () => {
          navigation.navigate('Game', {
            whoStarts: 'player',
          });
        },
      },
      {
        text: 'CPU',
        onPress: () => {
          navigation.navigate('Game', {
            whoStarts: 'cpu',
          });
        },
      },
    ]);
  };

  const navigateToStats = () => {
    navigation.navigate('Statistics');
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageHeading}>
        <Text style={styles.pageText}>{'Welcome to Tic.Tac.Toe'}</Text>
        <Text style={styles.pageTextSubHeading}>{"Choose what you'd like to do"}</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <BaseButton text={'Play New Game'} onPress={navigateToGamePage} />
        </View>

        <View style={styles.buttonContainer}>
          <BaseButton text={'View Statistics'} onPress={navigateToStats} />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
