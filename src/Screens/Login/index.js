import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ToastAndroid,
  TouchableOpacity,
  Text,
  Platform,
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
// import axios from 'axios';
// import {BaseUrl, base64Auth} from '../../utils/constants';
import graphqlFetchHandler from '../../utils/graphqlFetchHandler';

import {setLoginData} from '../../store/actions';

import {connect} from 'react-redux';

import {InputContainer} from './components';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonStyles} from '../../SharedComponents/CustomStyles';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

class LoginScreen extends Component {
  state = {
    form: {
      userName: '',
      password: '',
    },
    isLoader: false,
    isCustomToaster: '',
  };
  getUserDetails = (token) => {
    const query = `
    {
      customer(customerAccessToken: "${token}") {
        id
        firstName
        lastName
        email
        phone
        orders(first: 5) {
          edges {
            node {
              lineItems(first: 5) {
                edges {
                  node {
                    quantity
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
    `;
    const onSuccess = (response) => {
      if (response) {
        this.setState({isLoader: false});
        this.saveDataLocal(response.data.customer);
        this.props.navigation.navigate('DashboardScreen', {
          fromLogin: true,
        });
      } else {
        this.setState({
          isCustomToaster: 'Not registred user',
          isLoader: false,
        });
      }
    };
    this.setState({isLoader: true});
    graphqlFetchHandler({query}, onSuccess, (error) => {
      this.setState({isCustomToaster: 'Something wrong', isLoader: false});
      console.log(error);
    });
  };

  checkLoginData = () => {
    const query = `
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerUserErrors {
          code
          field
          message
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
      }
    }
`;
    const {
      form: {userName: email, password},
    } = this.state;
    const onSuccess = (response) => {
      this.setState({isLoader: false});

      if (
        response &&
        response.data.customerAccessTokenCreate.customerAccessToken
      ) {
        this.getUserDetails(
          response.data.customerAccessTokenCreate.customerAccessToken
            .accessToken,
        );
      } else {
        this.setState({
          isCustomToaster: 'Email id or Password is Incorrect',
        }),
          console.log('response creataaccess', JSON.stringify(response));
      }
    };
    const input = {
      email,
      password,
    };
    this.setState({isLoader: true});
    graphqlFetchHandler({query, variables: {input}}, onSuccess, (error) => {
      this.setState({isCustomToaster: 'Something wrong', isLoader: false});
      console.log(error);
    });
    /* axios
      .get(BaseUrl + '/admin/api/2020-07/customers.json', {
        headers: {
          Authorization: base64Auth,
        },
      })
      .then((res) => {
        if (res.data.customers) {
          let customerMailIds = res.data.customers.map((item) => item.email);

          if (customerMailIds.indexOf(this.state.form.userName) !== -1) {
            // console.log("customerMailIds.indexOf(this.state.form.userName) ", res.data.customers[customerMailIds.indexOf(this.state.form.userName)])
            'Successfully Logined');

            this.saveDataLocal(
              res.data.customers[
                customerMailIds.indexOf(this.state.form.userName)
              ],
            );
            this.props.navigation.navigate('DashboardScreen', {
              fromLogin: true,
            });
          } else {
            'Mail id is not matched');
          }
        }
      })
      .catch((err) => {
        console.log('Err in get Product list in Dashboard', err);
      });
      */
  };

  saveDataLocal = async (data) => {
    if (data) {
      console.warn('jhgfvhbj', data);

      try {
        await AsyncStorage.setItem('loginDetails', JSON.stringify(data));
        this.props.setLoginData(data);
      } catch (err) {
        console.log('Err in set Login Dat to Local', err);
      }
    } else {
      this.setState({
        isCustomToaster: "Login data Didn't get propertly",
        isLoader: false,
      });
    }
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
    let form = {...this.state.form};

    if (form.userName !== '' && form.password !== '') {
      if (this.validateEmail(form.userName)) {
        this.checkLoginData();
        // this.props.navigation.navigate('DashboardScreen',{
        //     fromLogin : true
        // });
      } else {
        this.setState({
          isCustomToaster: 'Enter Valida Mail Id.',
        });
      }
    } else {
      this.setState({
        isCustomToaster: 'please fill user name and password',
      });
    }
  };

  render() {
    const {isLoader, isCustomToaster} = this.state;
    const {TTComDB16} = CommonStyles;
    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
          <CustomHeader
            leftIcon={closeIcon}
            rightIcon={logoSmall}
            leftIconAction={() =>
              this.props.navigation.navigate('AuthScreen', {
                fromLogin: true,
              })
            }
          />

          <View style={{flex: 9, paddingHorizontal: 20, marginTop: 25}}>
            <InputContainer>
              <CustomInput
                placeholder="Email"
                label="Email"
                keyboardType="email-address"
                onchange={(data) => this.handleLogin(data, 'userName')}
              />
            </InputContainer>
            {isLoader && <Loader />}
            <InputContainer>
              <CustomInput
                placeholder="Password"
                label="Enter Password"
                secure
                onchange={(data) => this.handleLogin(data, 'password')}
              />
            </InputContainer>

            <InputContainer alignCenter>
              <CustomButton
                buttonStyles="btn-primary"
                textStyles="txt-primary"
                text="Login"
                onAction={() => this.submitLogin()}
                width="100%"
              />
            </InputContainer>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('ForgotPasswordScreen')
              }
              style={{
                marginVertical: 15,
                alignItems: 'center',
              }}>
              <Text style={TTComDB16}>Forget Password?</Text>
            </TouchableOpacity>
            {isCustomToaster !== '' && (
              <CustomToaster
                position="flex-end"
                onend={() => this.setState({isCustomToaster: ''})}
                isCustomToaster={true}
                message={isCustomToaster}
              />
            )}
          </View>
        </SafeAreaView>
      </>
    );
  }
}

// export default LoginScreen;

const mapStateToProps = (state) => {
  console.log('PROP in REDUX in LOGIN ', state.Login);
  return {};
};
const mapDispatchToProps = {
  setLoginData,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
