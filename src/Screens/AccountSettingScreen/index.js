import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import axios from 'axios';
import {BaseUrl, base64Auth} from '../../utils/constants';

import {
  CustomInput,
  CustomButton,
  CustomHeader,
  closeIcon,
  logoSmall,
  radioButton,
  radioButtonFill,
} from '../../SharedComponents';

import {Container} from '../RegisterScreen/components';
import {CommonStyles} from '../../SharedComponents/CustomStyles';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

class AccountSettingScreen extends Component {
  state = {
    form: {
      fullName: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
    },
    passwordConfirm: '',
    isSelected: false,
  };

  submitRegister = () => {
    const {fullName, email, phone} = this.state.form;

    let payload = {
      customer: {
        first_name: 'fullName 1',
        last_name: 'fullName 2',
        email: 'email@TestScheduler.com',
        phone: '9400720100',
        verified_email: false,
        addresses: [
          {
            address1: '123 Oak St',
            city: 'Ottawa',
            province: 'ON',
            phone: '555-1212',
            zip: '123 ABC',
            last_name: 'Lastnameson',
            first_name: 'Mother',
            country: 'CA',
          },
        ],
      },
    };

    fetch(BaseUrl + '/admin/api/2020-07/customers.json', {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: base64Auth,
      }),
      body: payload,
    })
      .then((res) => {
        console.log('Res 110', res.data);
      })
      .catch((err) => {
        console.log('Err in res', err);
      });
  };

  handleFormDatas = (data, type) => {
    let form = {...this.state.form};

    if (type === 'fullName') {
      form.fullName = data;
    } else if (type === 'email') {
      form.email = data;
    } else if (type === 'mobileNumber') {
      form.mobileNumber = data;
    } else if (type === 'password') {
      form.password = data;
    } else if (type === 'confirmPassword') {
      form.confirmPassword = data;
    }
    this.setState({form}, () => console.log('Result in form', this.state.form));
  };

  validatePasswordConfirm = () => {
    let form = {...this.state.form};
    console.log(form.password, form.confirmPassword);
    if (form.confirmPassword === '') {
      this.setState({passwordConfirm: ''});
    } else {
      if (form.password !== form.confirmPassword) {
        this.setState({passwordConfirm: true});
      } else {
        this.setState({passwordConfirm: false});
      }
    }
  };

  toggleSelect = () => {
    this.setState({isSelected: !this.state.isSelected});
  };

  showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Test Toaster',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50,
    );
  };

  render() {
    const {passwordConfirm, isSelected} = this.state;
    const {TTComM16} = CommonStyles;
    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}

          {/* Header section  */}
          <View style={{flex: 0.5}}>
            <CustomHeader
              leftIcon={closeIcon}
              rightIcon={logoSmall}
              leftIconAction={() => this.props.navigation.goBack()}
            />
          </View>
          {/* Header section End */}

          {/* Form Section */}
          <View style={{flex: 10, paddingHorizontal: 20}}>
            <View
              style={{
                flex: 1,

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={CommonStyles.TTComDB14}>
                No Setting Currently Available
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default AccountSettingScreen;
