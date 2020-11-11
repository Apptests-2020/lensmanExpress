import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import {CommonStyles} from '../';

const CustomInput = (props) => {
  const {
    label,
    placeholder,
    onchange,
    value,
    type,
    secure,
    onAction,
    dropdown,
    validationErr,
    validatePassword,
    keyboardType,
    onFocus,
    isValidationErr,
    height,
  } = props;
  return (
    <View style={{}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {label && <Text style={CommonStyles.customInputLabel}>{label}</Text>}
        {validationErr !== '' && validationErr && (
          <Text style={[CommonStyles.customInputLabel, {color: '#FA3838'}]}>
            {validationErr === '' ? '' : validationErr ? 'Does not match!' : ''}
          </Text>
        )}
      </View>
      {type === 'phone' ? (
        <View
          style={
            isValidationErr
              ? {borderWidth: 1, borderColor: 'red', borderRadius: 12}
              : {}
          }>
          <View style={CommonStyles.customInputWrapper}>
            <View
              style={{
                position: 'relative',
                backgroundColor: '#E9E9E9',
                width: 100,
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: 12,
                flexDirection: 'row',
                left: -21,
                zIndex: 5,
                height: 50,
              }}>
              <Image source={require('../../../assests/Test/Image91.png')} />
              <Text style={CommonStyles.TTComM16}>+971</Text>
            </View>
            <View style={{width: '83%', zIndex: 0}}>
              <TextInput
                placeholder={placeholder && placeholder}
                value={value && value}
                style={[
                  CommonStyles.customInputPhone,
                  isValidationErr && {width: '84%'},
                ]}
                onChangeText={(text) => onchange && onchange(text)}
                keyboardType={keyboardType && keyboardType}
              />
            </View>
          </View>
        </View>
      ) : dropdown ? (
        <TextInput
          placeholder={placeholder && placeholder}
          value={value && value}
          style={CommonStyles.customInput}
          onChangeText={(text) => onchange && onchange(text)}
          onBlur={() => onAction && onAction()}
        />
      ) : height ? (
        <TextInput
          placeholder={placeholder && placeholder}
          value={value && value}
          onChangeText={(text) => onchange && onchange(text)}
          secureTextEntry={secure ? true : false}
          onEndEditing={() => validatePassword && validatePassword()}
          keyboardType={keyboardType && keyboardType}
          onFocus={(data) => onFocus && onFocus(data)}
          multiline={true}
          style={[
            CommonStyles.customInput,
            {
              maxHeight: height,
              height: height,
              textAlignVertical: 'top',
              padding: 7,
              paddingTop: 16,
            },
            isValidationErr && {borderColor: 'red'},
          ]}
        />
      ) : (
        <TextInput
          placeholder={placeholder && placeholder}
          value={value && value}
          onChangeText={(text) => onchange && onchange(text)}
          secureTextEntry={secure ? true : false}
          onEndEditing={() => validatePassword && validatePassword()}
          keyboardType={keyboardType && keyboardType}
          onFocus={(data) => onFocus && onFocus(data)}
          style={[
            CommonStyles.customInput,
            isValidationErr && {borderColor: 'red'},
          ]}
        />
      )}
    </View>
  );
};

export default CustomInput;
