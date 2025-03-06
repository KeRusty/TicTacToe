import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// styles
import {styles} from './styles';

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
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[
        showNoColor
          ? styles.appHeaderContainerWhite
          : styles.appHeaderContainer,
      ]}>
      <View style={styles.textContainer}>
        {isBackVisible && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        )}
        {isTitleVisible && <Text>{title ?? routeName}</Text>}
        {isRightTextVisible && <Text>{rightText}</Text>}
      </View>
    </SafeAreaView>
  );
}

export default AppHeader;
