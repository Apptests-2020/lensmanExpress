import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import {RFPercentage} from 'react-native-responsive-fontsize';
import {setLoginData} from '../../store/actions';

import {connect} from 'react-redux';

// custom components
import {CustomButton} from '../../SharedComponents';

import {CommonStyles} from '../../SharedComponents/CustomStyles';
// import CustomFonts from "../../utils/CommonUtils";
import {
  closeIcon,
  googleWhiteIcon,
  fbWhiteIcon,
} from '../../SharedComponents/CommonIcons';
import AsyncStorage from '@react-native-community/async-storage';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }
  saveDataLocal = async () => {
    const guestLogin = {
      email: 'guestlogin@gmail.com',
      firstName: 'Guest User',
      id: '1wf23gv3erty3jt1234he',
      lastName: null,
      orders: {edges: []},
      phone: null,
    };
    try {
      await AsyncStorage.setItem('loginDetails', JSON.stringify(guestLogin));
      this.props.setLoginData(guestLogin);
    } catch (err) {
      alert('some error occurs');
      console.log('Err in set Login Dat to Local', err);
    }
  };
  render() {
    const {TTComDB16, TTComL16} = CommonStyles;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#000000d9',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#323AE4',
            width: '90%',
            height: '75%',
            borderRadius: 27,
          }}>
          <TouchableOpacity
            onPress={() => {
              // console.warn('kk');

              this.props.handleCloseModal && this.props.handleCloseModal();
              this.props.navigation.navigate('DashboardScreen', {
                fromLogin: true,
              });
            }}
            style={{
              // backgroundColor: 'red',
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
              top: 10,
              left: 10,
              // position: 'absolute',
              // backgroundColor: 'red',
            }}>
            <Image source={closeIcon} />
          </TouchableOpacity>
          <View
            style={{flex: 5, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Image
              source={require('../../../assests/Common/logo/icon[-20.png')}
            />
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: RFPercentage(32) / 6, //32+3,
                fontFamily: 'TTCommons-Bold',
                textAlign: 'center',
                paddingHorizontal: 20,
                marginTop: 30,
              }}>
              Welcome to the express way.
            </Text>
          </View>

          <View
            style={{flex: 7, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '',
                paddingVertical: 10,
              }}>
              <CustomButton
                text="Sign up for free"
                buttonStyles="btn-primary"
                textStyles="txt-primary"
                onAction={() => {
                  this.props.handleCloseModal && this.props.handleCloseModal();
                  this.props.navigation.navigate('RegisterScreen');
                }}
              />

              <View style={{marginVertical: 5}} />

              {/* <CustomButton
                                text            = "Continue with Google"
                                buttonStyles    = "btn-secondary"
                                textStyles      = "txt-primary"
                                icon            = {googleWhiteIcon}
                            /> */}
              {/* <View style={{marginVertical : 5}}/> */}

              {/* <CustomButton
                                text            = "Continue with Facebook"
                                buttonStyles    = "btn-secondary"
                                textStyles      = "txt-primary"
                                icon            = {fbWhiteIcon}
                            />
                                 */}
              <View style={{marginVertical: 5}} />

              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={[TTComL16, {color: '#fff'}]}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.props.handleCloseModal &&
                      this.props.handleCloseModal();
                    this.props.navigation.navigate('LoginScreen');
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={[
                      TTComL16,
                      {color: '#fff', fontFamily: 'TTCommons-Bold'},
                    ]}>
                    {''} Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('PROP in REDUX in LOGIN ', state.Login);
  return {};
};
const mapDispatchToProps = {
  setLoginData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
