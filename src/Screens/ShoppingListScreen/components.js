import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {CommonStyles} from '../../SharedComponents/CustomStyles';
import {rightArrowIcon} from '../../SharedComponents/CommonIcons';

export const FilterItem = (props) => {
  const {name, onAction} = props;
  const {TTComDB18} = CommonStyles;
  return (
    <TouchableOpacity
      onPress={() => onAction && onAction()}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 15,
      }}>
      <Text style={TTComDB18}>{name}</Text>
      <Image source={rightArrowIcon} />
    </TouchableOpacity>
  );
};

export const CustomSelectList = (props) => {
  const {label, isActive, onPress} = props;
  const {TTComM18} = CommonStyles;
  return (
    <TouchableOpacity style={{paddingRight: 10}} onPress={() => onPress()}>
      <Text style={isActive ? TTComM18 : [TTComM18, {opacity: 0.5}]}>
        {label}
      </Text>
      {isActive ? (
        <View
          style={{backgroundColor: '#FFC000', height: 3, borderRadius: 5}}
        />
      ) : (
        <View style={{height: 3, borderRadius: 5}} />
      )}
    </TouchableOpacity>
  );
};

export const CategoryList = (props) => {
  const {label, image, selectCategory} = props;
  const {TTComDB16} = CommonStyles;
  return (
    <TouchableOpacity
      onPress={() => selectCategory()}
      style={{alignItems: 'center', padding: 10}}>
      {/* <ImageBackground
        style={{borderRadius: 50}}
        source={
          require('../../../assests/Common/imagePlaceholder/placeholder.jpg') //Indicator
        } */}
      <View style={{width: 100, height: 100}}>
        <Image
          defaultSource={require('../../../assests/Common/imagePlaceholder/placeholder.jpg')}
          source={image}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      </View>
      <Text style={[TTComDB16, {paddingVertical: 10}]}>{label}</Text>
    </TouchableOpacity>
  );
};
