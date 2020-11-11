import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  PixelRatio,
  Dimensions,
  Platform,
} from 'react-native';

import {CommonStyles} from '../../../SharedComponents';
import DemoStyles from './DemoStyle';
const sinatureIcon = require('../../../../assests/Common/signature/LMOK-14.png');
const dotYellowIcon = require('../../../../assests/DemoScreen/demoScreenDots/Rectangle1576.png');
const dotWhiteIcon = require('../../../../assests/DemoScreen/demoScreenDots/Rectangle1577.png');

import {closeIcon} from '../../../SharedComponents/CommonIcons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const DemoDots = (props) => {
  const {name} = props;
  // console.log("Props 002",name)
  return name === 'demo1' ? (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={dotYellowIcon} style={DemoStyles.imgMargin} />
      <Image source={dotWhiteIcon} style={DemoStyles.imgMargin} />
      <Image source={dotWhiteIcon} style={DemoStyles.imgMargin} />
    </View>
  ) : name === 'demo2' ? (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={dotWhiteIcon} style={DemoStyles.imgMargin} />
      <Image source={dotYellowIcon} style={DemoStyles.imgMargin} />
      <Image source={dotWhiteIcon} style={DemoStyles.imgMargin} />
    </View>
  ) : (
    name === 'demo3' && (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={dotWhiteIcon} style={DemoStyles.imgMargin} />
        <Image source={dotWhiteIcon} style={DemoStyles.imgMargin} />
        <Image source={dotYellowIcon} style={DemoStyles.imgMargin} />
      </View>
    )
  );
};

const Demo = (props) => {
  const {
    icon,
    label,
    label2,
    navigateTo,
    noSign,
    name,
    changeScreen,
    closeModal,
  } = props;
  const {height, width} = Dimensions.get('screen');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000000d9',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={{
          backgroundColor: '#323AE4',
          width: '90%',
          height: '75%',
          borderRadius: 27,
        }}>
        <TouchableOpacity
          onPress={() =>
            closeModal ? closeModal() : changeScreen && changeScreen(true)
          }
          style={{
            left: 10,
            top: 10,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={closeIcon} style={{}} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '60%',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <Image
              source={icon && icon}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(
                  280 / PixelRatio.get(),
                ),
                height: PixelRatio.getPixelSizeForLayoutSize(
                  265 / PixelRatio.get(),
                ),
              }}
            />
            {/* {!noSign&&<Image source={sinatureIcon} style={{position : 'absolute', bottom : 10, right : -20}} />} */}
          </View>

          <View style={{height: '30%'}}>
            {label && label2 ? (
              <View>
                <Text
                  style={{
                    flexDirection: 'row',
                    color: '#FFFFFF',
                    fontSize:
                      Platform.OS === 'android'
                        ? width > 370
                          ? RFPercentage(30) / 7
                          : RFPercentage(32) / 7
                        : RFPercentage(32) / 7, //RFPercentage(5.5),//32,//PixelRatio.getPixelSizeForLayoutSize(32),
                    fontFamily: 'TTCommons-Bold',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // paddingHorizontal : 30
                  }}>
                  {label && label}
                </Text>
                <Text
                  style={{
                    flexDirection: 'row',
                    color: '#FFFFFF',
                    fontSize:
                      Platform.OS === 'android'
                        ? width > 370
                          ? RFPercentage(30) / 7
                          : RFPercentage(32) / 7
                        : RFPercentage(32) / 7, //32+5,
                    fontFamily: 'TTCommons-Bold',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 30,
                  }}>
                  {label2 && label2}
                </Text>
              </View>
            ) : (
              <Text
                style={{
                  flexDirection: 'row',
                  color: '#FFFFFF',
                  fontSize:
                    Platform.OS === 'android'
                      ? width > 370
                        ? RFPercentage(30) / 7
                        : RFPercentage(32) / 7
                      : RFPercentage(32) / 7, //32+5,
                  fontFamily: 'TTCommons-Bold',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 30,
                }}>
                {label && label}
              </Text>
            )}
          </View>

          <View
            style={{
              flex: 2,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              height: '10%',
            }}>
            {<DemoDots name={name} />}
            <TouchableOpacity
              onPress={() => changeScreen && changeScreen()} //name === 'demo3'&&navigateTo&&navigateTo()} //
              style={{padding: 10}}>
              <Text style={CommonStyles.txtPrimary}>
                {name === 'demo3' ? "Let's go" : 'Next'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Demo;
