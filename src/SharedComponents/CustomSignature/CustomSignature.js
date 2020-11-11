import React from 'react';

import {View, Text, Image, Platform} from 'react-native';

import {RFPercentage} from 'react-native-responsive-fontsize';

import {signatureIconBlack, signature} from '../CommonIcons';

const SignatureContainer = (props) => {
  const {light} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
      <Text
        style={{
          color: light ? '#fff' : '#000',
          fontSize: RFPercentage(18) / 7,
          fontFamily:
            Platform.OS === 'android'
              ? 'TTCommonsDemiBold'
              : 'TTCommons-DemiBold',
        }}>
        Powered by
      </Text>
      <Image source={light ? signature : signatureIconBlack} />
    </View>
  );
};

export default SignatureContainer;
