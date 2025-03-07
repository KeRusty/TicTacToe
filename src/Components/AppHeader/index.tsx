import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AuthService from '../../Utils/api/AuthService';

// styles
import { styles } from './styles';
import { removeUserdetails } from '../../Utils/redux/slices/user/userSlice';

interface AppHeaderProps {
  routeName?: string;
  isBackVisible?: boolean;
  isTitleVisible?: boolean;
  title?: string;
  isRightTextVisible?: boolean;
  rightText?: string;
  showNoColor?: boolean;
}

function AppHeader({
  routeName,
  title,
  isBackVisible = false,
  isTitleVisible = false,
  isRightTextVisible = false,
  rightText,
  showNoColor,
}: AppHeaderProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLogout = async () => {
    try {
      await AuthService.logout();
      dispatch(removeUserdetails());
      navigation.navigate('Login');
    } catch (error) {
      console.error('Register error', error);
    }
  };
  return (
    <SafeAreaView style={[showNoColor ? styles.appHeaderContainerWhite : styles.appHeaderContainer]}>
      <View style={styles.textContainer}>
        {isBackVisible ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {isTitleVisible ? <Text>{title ?? routeName}</Text> : <View />}
        {isRightTextVisible && (
          <TouchableOpacity onPress={onLogout}>
            <Text style={[showNoColor ? styles.rightText : styles.backText]}>{rightText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

export default AppHeader;
