import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('screen');

const CustomStatusBar = (props) => {
  const {platform} = props;
  if (Platform.OS === 'android')
    return (
      <StatusBar
        backgroundColor="#2B32C4"
        translucent={true}
        barStyle="dark-content"
      />
    );
  else if (Platform.OS === 'ios') {
    return (
      <View
        style={{
          height: height < 690 ? '3%' : '5%',
          backgroundColor: '#2B32C4',
        }}
      />
    );
  } else return null;
};

export default CustomStatusBar;
