import React from 'react';
import {View} from 'react-native';

export const Container = (props) => {
  return <View style={{marginVertical: 10}}>{props.children}</View>;
};
