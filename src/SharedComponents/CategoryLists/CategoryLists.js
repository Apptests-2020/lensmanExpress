import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {CommonStyles} from '../CustomStyles';

const CategoryList = (props) => {
  const {image, label, price, onPress} = props;
  const {TTComDB18, TTComM16} = CommonStyles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{justifyContent: 'center', padding: 5, marginRight: 10}}>
      <Image
        resizeMode="contain"
        source={image}
        defaultSource={require('../../../assests/Common/imagePlaceholder/placeholder.jpg')}
        style={{borderRadius: 27, width: 150, height: 150}}
      />
      <Text
        style={[
          TTComDB18,
          {
            marginTop: 10,
            paddingLeft: 10,
            width: 150,
            marginRight: 10,
          },
        ]}>
        {label}
      </Text>
      <Text style={[TTComM16, {paddingLeft: 10}]}>{price}</Text>
    </TouchableOpacity>
  );
};

export default CategoryList;
