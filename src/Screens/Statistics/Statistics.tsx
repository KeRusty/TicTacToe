import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../Utils/redux/slices/user/selector';
import AuthService from '../../Utils/api/AuthService';
import { updateUserStats } from '../../Utils/redux/slices/game/slice';

// Components
import StatsBoard from '../../Components/StatsBoard';

// styles
import { styles } from './styles';

function StatisticsScreen() {
  const userDetails = useSelector(getUserDetails);
  const dispatch = useDispatch();

  const getUserStats = async () => {
    try {
      const statsResponse = await AuthService.getStats();
      if (statsResponse) {
        dispatch(updateUserStats(statsResponse));
      }
    } catch (error) {
      console.error('Register error', error);
    }
  };

  useEffect(() => {
    if (userDetails) {
      getUserStats();
    }
  }, [userDetails]);

  return (
    <View>
      <View style={styles.pageHeading}>
        <Text style={styles.pageText}>{`Your Statistics are displayed below, ${userDetails?.name}`}</Text>
      </View>
      <StatsBoard />
    </View>
  );
}

export default StatisticsScreen;
