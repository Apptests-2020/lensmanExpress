import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';

import {headerImage} from '../../SharedComponents';

const CustomHeader = (props) => {
  const {leftIcon, rightIcon, leftIconAction} = props;
  return (
    <View style={{zIndex: 10}}>
      <ImageBackground
        source={headerImage}
        style={
          leftIcon && rightIcon
            ? {
                minHeight: 130,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }
            : {flex: 3}
        }>
        {leftIcon && rightIcon && (
          <>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                // backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => leftIconAction && leftIconAction()}>
              <Image source={leftIcon} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={rightIcon} />
            </TouchableOpacity>
          </>
        )}
      </ImageBackground>
    </View>
  );
};

export default CustomHeader;
