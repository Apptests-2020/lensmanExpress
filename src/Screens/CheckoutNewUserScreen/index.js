import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
  Modal,
  ToastAndroid,
  Image,
  Platform,
} from 'react-native';

import axios from 'axios';
import {
  CustomHeaderPrim,
  CustomButton,
  CustomInput,
  Loader,
  CustomToaster,
} from '../../SharedComponents';

import {
  LeftArrowIcon,
  signatureIconBlack,
} from '../../SharedComponents/CommonIcons';

import {CommonStyles} from '../../SharedComponents/CustomStyles';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

class CheckoutNewUserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: '',
      isCustomToaster: '',
    };
  }

  async componentDidMount() {}

  handleEmail = (email) => this.setState({email});

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleCreateAccount = () => {
    let email = this.state.email;
    if (email !== '' && this.validateEmail(email)) {
      // this.props.navigation.navigate('')
    } else {
      this.setState({isCustomToaster: 'Enter Valid Email'});
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

  render() {
    const {TTComDB16, TTComL16, TTComDB28} = CommonStyles;

    const {isLoading, isCustomToaster} = this.state;

    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}

          <View
            style={{width: '100%', zIndex: 4, backgroundColor: 'transparent'}}>
            <CustomHeaderPrim
              leftIcon={LeftArrowIcon}
              leftIconAction={() => this.props.navigation.goBack()}
              centerLabel="Checkout"
            />
          </View>

          {isLoading ? (
            <Loader />
          ) : (
            <View style={{flex: 9, paddingHorizontal: 20}}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{paddingTop: 100}}>
                <View>
                  <Text style={TTComDB28}>New here?</Text>
                  <Text style={TTComL16}>
                    We need your email so we can help track your order and
                    notify you on updates along the way.
                  </Text>
                </View>

                <View style={{marginVertical: 20}}>
                  <CustomInput
                    placeholder="Email"
                    label="Email"
                    keyboardType="email-address"
                    onchange={(data) => this.handleEmail(data)}
                  />
                </View>

                <View>
                  <CustomButton
                    buttonStyles="btn-primary"
                    textStyles="txt-primary"
                    text="Create an account"
                    width="100%"
                    onAction={() =>
                      this.props.navigation.navigate('RegisterScreen')
                    }
                  />
                  <View style={{marginVertical: 5}} />
                  <CustomButton
                    buttonStyles="btn-secondary-black"
                    textStyles="txt-secondary"
                    text="Checkout as guest"
                    width="100%"
                    onAction={() => {
                      const {
                        itemdata,
                        productQty,
                        type,
                      } = this.props.route.params;
                      this.props.navigation.navigate('CheckoutPaymentScreen', {
                        itemdata: itemdata,
                        productQty: productQty,
                        type: type,
                      });
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: 10,
                  }}>
                  <Text style={TTComDB16}>Already have an account?</Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('LoginScreen')
                    }>
                    <Text allowFontScaling={false} style={TTComL16}>
                      {' '}
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
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

export default CheckoutNewUserScreen;
