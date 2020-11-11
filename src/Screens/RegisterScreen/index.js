import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import graphqlFetchHandler from '../../utils/graphqlFetchHandler';

import {
  CustomInput,
  CustomButton,
  CustomHeader,
  closeIcon,
  logoSmall,
  radioButton,
  radioButtonFill,
  CustomToaster,
  Loader,
} from '../../SharedComponents';

import {Container} from './components';
import {CommonStyles} from '../../SharedComponents/CustomStyles';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

class RegisterScreen extends Component {
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
    isCustomToaster: true,
    apiStatus: {
      message: '',
      status: false,
    },
    isLoading: false,
  };

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  reset = () => {
    const apiStatus = {...this.state.apiStatus};
    apiStatus.message = '';
    apiStatus.status = false;
    setTimeout(() => {
      this.setState({apiStatus});
    }, 1000);
  };

  submitRegister = () => {
    const {
      fullName,
      email,
      mobileNumber: phone,
      password,
      confirmPassword,
    } = this.state.form;
    const apiStatus = {...this.state.apiStatus};

    let input = {
      firstName: fullName,
      email,
      password,
    };
    // let phonerefgex = /^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/;

    if (
      fullName !== '' &&
      email !== '' &&
      phone !== '' &&
      password &&
      confirmPassword
    ) {
      if (this.validateEmail(email)) {
        this.setState({isLoading: true}, () => {
          /*axios
            .post(BaseUrl + '/admin/api/2020-07/customers.json', payload, {
              headers: {Authorization: base64Auth},
            })
            .then((res) => {
              console.log('1100 Registeration page', res.data);
              apiStatus.message = 'Successfully Registered ..!';
              apiStatus.status = true;
              this.setState(
                {
                  isCustomToaster: true,
                  isLoading: false,
                  apiStatus,
                },
                () => {
                  setTimeout(() => {
                    this.props.navigation.navigate('LoginScreen');
                  });
                },
                2005,
              );
            })
            .catch((err) => {
              console.warn('Err in Register API', err.response.data);
              if (err.response.data.errors && err.response.data.errors.base) {
                apiStatus.message = err.response.data.errors.base;
                apiStatus.status = false;
                this.setState({
                  isCustomToaster: true,
                  apiStatus,
                });
              }
              this.setState({isLoading: false});
            });*/
        });
        const query = `
        mutation customerCreate($input: CustomerCreateInput!) {
          customerCreate(input: $input) {
            customerUserErrors {
              code
              field
              message
            }
            customer {
              id
            }
          }
        }`;
        const onSuccess = (res) => {
          console.warn(res);
          this.setState({isLoading: false});
          // console.log('1100 Registeration page', JSON.stringify(res));
          if (
            res &&
            res.data.customerCreate &&
            res.data.customerCreate.customer
          ) {
            apiStatus.message = 'Successfully Registered ..!';
            apiStatus.status = true;
            this.setState(
              {
                isCustomToaster: true,
                apiStatus,
              },
              () => {
                setTimeout(() => {
                  this.props.navigation.navigate('LoginScreen');
                });
              },
              2005,
            );
          } else {
            apiStatus.message = 'Some error occured';
            if (
              res.data.customerCreate &&
              res.data.customerCreate.customerUserErrors &&
              res.data.customerCreate.customerUserErrors.length > 0
            ) {
              apiStatus.message =
                res.data.customerCreate.customerUserErrors[0].message;
            }
            apiStatus.status = false;
            this.setState({
              isCustomToaster: true,
              apiStatus,
            });
          }
        };
        const onFail = (err) => {
          console.warn('Err in Register API', err);
          // if (err.response.data.errors && err.response.data.errors.base) {
          //   apiStatus.message = 'Some error occured';
          //   apiStatus.status = false;
          //   this.setState({
          //     isCustomToaster: true,
          //     apiStatus,
          //   });
          // }
          this.setState({isLoading: false});
        };

        graphqlFetchHandler({query, variables: {input}}, onSuccess, onFail);
      } else {
        apiStatus.message = 'Enter Valid Mail Id';
        apiStatus.status = false;
        this.setState({isCustomToaster: true, apiStatus}, () => this.reset());
      }
    } else {
      console.log('Please Fill All Fields');
      apiStatus.message = 'Please Fill All Fields';
      apiStatus.status = false;
      this.setState({isCustomToaster: true, apiStatus}, () => this.reset());
    }
    // const {fullName, email, password, phone} = this.state.form;

    // let payload = {
    //   firstName: fullName,
    //   email,
    //   phone,
    //   password,
    // };
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
    const {
      passwordConfirm,
      isSelected,
      isLoading,
      isCustomToaster,
      apiStatus,
    } = this.state;
    const {TTComM16} = CommonStyles;
    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/* Header section  */}

          {/* Header section End */}

          {/* Form Section */}
          <View style={{flex: 10, paddingHorizontal: 20}}>
            {isLoading ? (
              <Loader />
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{paddingTop: 10}}>
                <View style={{marginTop: 130}}>
                  <Container>
                    <CustomInput
                      placeholder="Full Name"
                      label="Full Name"
                      onchange={(data) =>
                        this.handleFormDatas(data, 'fullName')
                      }
                    />
                  </Container>
                </View>

                <Container>
                  <CustomInput
                    placeholder="Email"
                    label="Email"
                    onchange={(data) => this.handleFormDatas(data, 'email')}
                    keyboardType="email-address"
                  />
                </Container>

                <Container>
                  <CustomInput
                    placeholder="Mobile Number"
                    label="Mobile Number"
                    onchange={(data) =>
                      this.handleFormDatas(data, 'mobileNumber')
                    }
                    type="phone"
                    keyboardType="phone-pad"
                  />
                </Container>

                <Container>
                  <CustomInput
                    placeholder="Password"
                    label="Password"
                    onchange={(data) => this.handleFormDatas(data, 'password')}
                    secure
                  />
                </Container>
                <Container>
                  <CustomInput
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    onchange={(data) =>
                      this.handleFormDatas(data, 'confirmPassword')
                    }
                    secure
                    validationErr={passwordConfirm}
                    validatePassword={() => this.validatePasswordConfirm()}
                  />
                </Container>

                <TouchableOpacity
                  onPress={() => this.toggleSelect()}
                  style={{flexDirection: 'row'}}>
                  <Image source={isSelected ? radioButtonFill : radioButton} />
                  <Text
                    style={[
                      TTComM16,
                      {marginLeft: 10, fontSize: RFPercentage(16) / 7},
                    ]}>
                    I wish to receive promotions from Lensman Express on my
                    email and SMS.
                  </Text>
                </TouchableOpacity>

                <Container>
                  <CustomButton
                    buttonStyles="btn-primary"
                    textStyles="txt-primary"
                    text="Sign Up"
                    alignCenter
                    onAction={() => this.submitRegister()} //this.props.navigation.navigate('LoginScreen')} //
                    width="100%"
                  />
                </Container>
              </ScrollView>
            )}
            {isCustomToaster && apiStatus.message !== '' && (
              <CustomToaster
                onend={() => this.setState({isCustomToaster: false})}
                position="flex-end"
                isCustomToaster={isCustomToaster}
                message={apiStatus.message}
                redirect={() =>
                  apiStatus.status &&
                  this.props.navigation.navigate('LoginScreen')
                }
              />
            )}
          </View>
          <View style={{flex: 0.5, position: 'absolute', width: '100%'}}>
            <CustomHeader
              leftIcon={closeIcon}
              rightIcon={logoSmall}
              leftIconAction={() =>
                this.props.navigation.navigate('AuthScreen')
              }
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default RegisterScreen;
