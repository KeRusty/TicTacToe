import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserStats } from '../../Utils/redux/slices/game/selector';

// styles
import { styles } from './styles';

function StatsBoard() {
  const stats = useSelector(getUserStats);
  return (
    <View style={styles.container}>
      <View style={styles.statBox}>
        <Text style={styles.statText}>Wins: {`${stats ? stats?.userStats?.wins : 0}`}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.statBox}>
          <Text style={styles.statText}>Losses: {`${stats ? stats?.userStats?.losses : 0}`}</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statText}>Draws: {`${stats ? stats?.userStats?.draws : 0}`}</Text>
        </View>
      </View>
    </View>
  );
}

export default StatsBoard;
