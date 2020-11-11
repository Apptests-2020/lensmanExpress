import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ToastAndroid,
  TouchableOpacity,
  Text,
} from 'react-native';

import {
  CustomInput,
  CustomButton,
  CustomHeader,
  closeIcon,
  logoSmall,
  Loader,
  CustomToaster,
} from '../../SharedComponents';

import {setLoginData} from '../../store/actions';

import {connect} from 'react-redux';

import {CommonStyles} from '../../SharedComponents/CustomStyles';
import {InputContainer} from '../Login/components';
import graphqlFetchHandler from '../../utils/graphqlFetchHandler';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

class ForgotPasswordScreen extends Component {
  state = {
    email: '',
    isLoading: false,
    isCustomToaster: '',
  };

  showToaster = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50,
    );
  };

  handleLogin = (data, type) => {
    let form = {...this.state.form};
    if (type === 'userName') {
      form.userName = data;
    } else if (type === 'password') {
      form.password = data;
    }
    this.setState({form});
  };

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  submitLogin = () => {
    const {email} = this.state;
    if (!this.validateEmail(email)) {
      this.setState({
        isCustomToaster: 'Enter valid Email',
      });
      return;
    }
    const query = `
    mutation customerRecover($email: String!) {
      customerRecover(email: $email) {
        customerUserErrors {
          code
          field
          message
        }
      }
    }`;
    const onSuccess = (response) => {
      console.warn(response);
      this.setState({isLoading: false});
      let message = 'Recovery link send to yor email';
      if (
        response &&
        response.data &&
        response.data.customerRecover.customerUserErrors.length > 0
      ) {
        message = response.data.customerRecover.customerUserErrors[0].message;
      }
      this.setState({
        isCustomToaster: message,
      });
    };

    this.setState({isLoading: true});
    graphqlFetchHandler({query, variables: {email}}, onSuccess, (error) => {
      this.setState({
        isLoading: false,
        isCustomToaster: 'Something Error occured',
      });
      console.log(error);
    });
  };

  render() {
    const {isLoading, isCustomToaster} = this.state;
    const {TTComDB16} = CommonStyles;
    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <CustomHeader
            leftIcon={closeIcon}
            rightIcon={logoSmall}
            leftIconAction={() =>
              this.props.navigation.navigate('AuthScreen', {
                fromLogin: true,
              })
            }
          />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <View style={{flex: 9, paddingHorizontal: 20, marginTop: 25}}>
                <InputContainer>
                  <CustomInput
                    placeholder="Email"
                    label="Email"
                    keyboardType="email-address"
                    onchange={(data) => this.setState({email: data})}
                  />
                </InputContainer>

                <InputContainer alignCenter>
                  <CustomButton
                    buttonStyles="btn-primary"
                    textStyles="txt-primary"
                    text="Recover"
                    onAction={() => this.submitLogin()}
                    width="100%"
                  />
                </InputContainer>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('LoginScreen')}
                  style={{
                    marginVertical: 15,
                    alignItems: 'center',
                  }}>
                  <Text style={TTComDB16}>Back to login</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          {isCustomToaster !== '' && (
            <CustomToaster
              position="flex-end"
              onend={() => this.setState({isCustomToaster: ''})}
              isCustomToaster={true}
              message={isCustomToaster}
            />
          )}
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  setLoginData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordScreen);
