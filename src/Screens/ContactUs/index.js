import React, {Component} from 'react';
import {View} from 'react-native';
class ContactUsScreen extends Component {
  state = {
    form: {
      fullName: '',
      email: '',
      mobileNumber: '',
      Description: '',
      confirmPassword: '',
    },
    passwordConfirm: '',
    isSelected: false,
    isCustomToaster: '',
  };

  render() {
    return <View></View>;
  }
}

export default ContactUsScreen;
