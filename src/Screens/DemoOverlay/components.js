import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';

import {SignatureContainer, DemoDots} from '../../SharedComponents';
import {closeIcon} from '../../SharedComponents/CommonIcons';
import {CommonStyles} from '../../SharedComponents/CustomStyles';

const DemoOverlay = (props) => {
  const {
    text,
    text2,
    dotName,
    image,
    buttonName,
    onAction,
    handleOverlay,
  } = props;
  const {TTComDB18} = CommonStyles;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000e6',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <TouchableOpacity
        onPress={() => handleOverlay(true)}
        style={{
          position: 'absolute',
          top: 20,
          left: 10,
          padding: 15,
          zIndex: 2,
        }}>
        <Image source={closeIcon} />
      </TouchableOpacity>

      <View style={{flex: 2, justifyContent: 'flex-end', width: '100%'}}>
        <SignatureContainer light />
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: 150,
        }}>
        <Image source={image} />
      </View>

      <View style={{flex: 4, width: '100%', alignItems: 'center'}}>
        <Text style={[TTComDB18, {color: '#fff', marginTop: 15}]}>{text}</Text>
        {text2 ? (
          <Text style={[TTComDB18, {color: '#fff', marginVertical: 5}]}>
            {text2}
          </Text>
        ) : (
          <Text style={[TTComDB18, {color: '#fff', marginVertical: 5}]} />
        )}
        <View style={{marginVertical: 10}}>
          <DemoDots name={dotName} />
        </View>

        <TouchableOpacity
          onPress={() => {
            buttonName == 'Let’s go'
              ? onAction && onAction()
              : handleOverlay && handleOverlay();
            // this.props.handleCloseOverlay&&this.props.handleCloseOverlay()
            // onAction&&onAction()
          }}
          style={{
            borderWidth: 1.5,
            borderColor: '#fff',
            borderRadius: 26,
            width: 140,
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <Text
            style={[
              TTComDB18,
              {
                color: '#fff',
                paddingVertical: 10,
                textAlign: 'center',
              },
            ]}>
            {buttonName}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DemoOverlay;
