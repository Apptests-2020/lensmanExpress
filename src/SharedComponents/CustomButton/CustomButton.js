import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {RFPercentage} from 'react-native-responsive-fontsize';

import {CommonStyles} from '..';

const Container = (props) => {
  return (
    <View style={{marginVertical: 15, alignItems: 'center'}}>
      {props.children}
    </View>
  );
};

const Button = (props) => {
  const {buttonStyles, textStyles, text, icon, onAction, width} = props.data;
  const {
    btnPrimary,
    btnSecondary,
    txtSecondary,
    btnSecondaryBlack,
    btnPrimaryColor,
  } = Styles;
  return (
    <TouchableOpacity
      onPress={() => onAction && onAction()}
      style={
        buttonStyles === 'btn-primary' && width
          ? [btnPrimary, {width: width}]
          : buttonStyles === 'btn-primary-color' && width
          ? [btnPrimaryColor, {width: width}]
          : buttonStyles === 'btn-primary'
          ? btnPrimary
          : buttonStyles === 'btn-secondary' && width
          ? [btnSecondary, {width: width}]
          : buttonStyles === 'btn-secondary'
          ? btnSecondary
          : buttonStyles === 'btn-secondary-black' && width
          ? [btnSecondaryBlack, {width: width}]
          : buttonStyles === 'btn-secondary-black'
          ? btnSecondaryBlack
          : buttonStyles
      }>
      {icon && <Image source={icon} style={{position: 'absolute', left: 30}} />}
      <Text
        allowFontScaling={false}
        style={
          textStyles === 'txt-primary'
            ? CommonStyles.txtPrimary
            : textStyles === 'txt-secondary'
            ? CommonStyles.txtSecondary
            : [CommonStyles.TTComDB18, {color: '#fff'}]
        }>
        {text && text}
      </Text>
    </TouchableOpacity>
  );
};

const CustomButton = (props) => {
  if (props.alignCenter) {
    return (
      <Container props={props}>
        <Button data={props} />
      </Container>
    );
  } else {
    return <Button data={props} />;
  }
};

const Styles = StyleSheet.create({
  btnPrimary: {
    borderRadius: 26,
    backgroundColor: '#FF6C00',
    width: 304,

    // height          : ,//49,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPrimaryColor: {
    borderRadius: 26,
    backgroundColor: '#FFD2B1',
    width: 304,
    // height          : ,//49,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSecondary: {
    borderRadius: 26,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    width: 304,
    paddingVertical: 15,
    // height          : 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSecondaryBlack: {
    borderRadius: 26,
    borderWidth: 1.5,
    borderColor: '#000',
    width: 304,
    paddingVertical: 15,
    // height          : 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSecondary: {
    fontSize: RFPercentage(18) / 7, //18,
    color: '#000',
    fontFamily:
      Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
  },
});

export default CustomButton;
