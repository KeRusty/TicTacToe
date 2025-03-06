import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getUserDetails} from '../../Utils/redux/slices/user/selector';

function HomeScreen() {
  const userDetails = useSelector(getUserDetails);

  return (
    <View>
      <Text>{`Welcome ${userDetails?.firstName}`}</Text>
    </View>
  );
}

export default HomeScreen;
