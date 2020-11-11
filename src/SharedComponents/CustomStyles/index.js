import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
const CommonStyles = StyleSheet.create({
  txtPrimary: {
    fontSize: RFPercentage(18) / 7, //18
    fontFamily: 'TTCommons-Medium',
    color: '#FFFFFF',
  },
  txtSecondary: {
    fontSize: RFPercentage(18) / 7, //18
    fontFamily:
      Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
    color: '#000',
  },
  container: {
    paddingHorizontal: 20,
  },
  customInputLabel: {
    fontSize: RFPercentage(18) / 7, //18,
    fontFamily: 'TTCommons-Medium',
    // Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
    color: '#000',
    paddingBottom: 15,
  },
  customInput: {
    borderRadius: 12,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    fontFamily: 'TTCommons-Medium',
    borderWidth: 1.5,
    borderColor: '#E9E9E9',
    paddingLeft: 20,
    height: 50,
  },
  customInputWrapper: {
    width: '93%',
    flexDirection: 'row',
    borderColor: '#E9E9E9',
    borderWidth: 1,
    marginLeft: 20,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  customInputPhone: {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    fontFamily: 'TTCommons-Medium',
    paddingLeft: 5,
    maxHeight: 50,
    width: '81%',
  },
  tabNavContainer: {
    backgroundColor: '#323AE4',
    minHeight: 50,
    position: 'absolute',
    bottom: 50,
    width: '100%',
    borderRadius: 27,
    alignSelf: 'center',
  },
  // commont font family with size
  TTComDB28: {
    fontFamily:
      Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
    fontSize: RFPercentage(28) / 7,
    color: '#000',
  },
  TTComDB20: {
    fontFamily: 'TTCommons-Medium',
    // Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
    fontSize: RFPercentage(20) / 7,
    color: '#000',
  },
  TTComDB18: {
    fontFamily: 'TTCommons-Medium',
    // Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
    fontSize: RFPercentage(18) / 7,
    color: '#000',
  },
  TTComM18: {
    fontFamily: 'TTCommons-Medium',
    fontSize: RFPercentage(18) / 7,
    color: '#000',
  },
  TTComM16: {
    fontFamily: 'TTCommons-Medium',
    fontSize: RFPercentage(16) / 7,
    color: '#000',
  },
  TTComM15: {
    fontFamily: 'TTCommons-Medium',
    fontSize: RFPercentage(15) / 7,
    color: '#000',
  },
  TTComDB17: {
    fontFamily: 'TTCommons-Medium',
    // Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
    fontSize: RFPercentage(17) / 7,
    color: '#000',
  },
  TTComDB16: {
    fontFamily: 'TTCommons-Medium',
    // Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
    fontSize: RFPercentage(16) / 7,
    color: '#000',
  },
  TTComL16: {
    fontFamily: 'TTCommons-Light',
    fontSize: RFPercentage(16) / 7,
    color: '#000',
  },
  TTComDB14: {
    fontFamily: 'TTCommons-Medium',
    // Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
    fontSize: RFPercentage(14) / 7,
    color: '#000',
  },
  TTComM14: {
    fontFamily: 'TTCommons-Medium',
    fontSize: RFPercentage(14) / 7,
    color: '#000',
  },
  TTComDB12: {
    fontFamily: 'TTCommons-Medium',
    // Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
    fontSize: RFPercentage(12) / 7,
    color: '#000',
  },
  tabNavContainer: {
    backgroundColor: '#323AE4',
    minHeight: 40,
    position: 'absolute',
    bottom: 25,
    width: '80%',
    borderRadius: 27,
    alignSelf: 'center',
  },
});

export {CommonStyles};
