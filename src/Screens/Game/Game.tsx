import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../Utils/redux/slices/user/selector';
import AuthService from '../../Utils/api/AuthService';
import { startGameSession } from '../../Utils/redux/slices/game/slice';

// Components
import { TicTacToeBoard } from '../../Components';

// Styles
import { styles } from './styles';

function GameScreen({ route }) {
  const { whoStarts } = route.params;
  const dispatch = useDispatch();
  const userDetails = useSelector(getUserDetails);

  const startNewGameSession = async () => {
    try {
      const startSession = await AuthService.createGameSession();
      if (startSession) {
        dispatch(startGameSession(startSession));
      }
    } catch (error) {
      console.error('Register error', error);
    }
  };

  useEffect(() => {
    if (userDetails) {
      startNewGameSession();
    }
  }, [userDetails]);

  return (
    <View style={styles.container}>
      <TicTacToeBoard whoStarts={whoStarts} />
    </View>
  );
}

export default GameScreen;
