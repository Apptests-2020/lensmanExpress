import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ToastAndroid,
  Image,
} from 'react-native';

import axios from 'axios';
import {
  CustomHeaderPrim,
  CustomButton,
  Loader,
  CustomTracker,
} from '../../SharedComponents';

import {
  LeftArrowIcon,
  radioButton,
  radioButtonFill,
  appleBlackIcon,
} from '../../SharedComponents/CommonIcons';

import {CommonStyles} from '../../SharedComponents/CustomStyles';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';
import {TextInput} from 'react-native-gesture-handler';

const CardIcon1 = require('../../../assests/CardLogo/icon1.png');
const CardIcon2 = require('../../../assests/CardLogo/icon2.png');
const CardIcon3 = require('../../../assests/CardLogo/icon3.png');
class CheckoutPaymentScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      CardName: '',
      CardNumber: '',
      CardMonth: '',
      CardYear: '',
      CardCVV: '',
    };
  }

  async componentDidMount() {}

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
    const {TTComDB16, TTComL16, TTComDB28, TTComM14, TTComM18} = CommonStyles;

    const {isLoading, options, showStates} = this.state;

    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          {/* <StatusBar backgroundColor = "#fff" barStyle = "dark-content" /> */}

          {isLoading ? (
            <Loader />
          ) : (
            <View style={{flex: 9, paddingHorizontal: 20, marginTop: 80}}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop: 100}} />

                <CustomTracker stage={2} />

                <View
                  style={{
                    borderRadius: 12,
                    borderColor: '#E9E9E9',
                    padding: 20,
                    width: '100%',
                    marginVertical: 20,
                    backgroundColor: '#F2F2F2',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{width: '50%'}}>
                      <Text style={[TTComM14, {marginVertical: 5}]}>
                        Subtotal
                      </Text>
                      <Text style={[TTComM14, {marginVertical: 5}]}>
                        Shipping
                      </Text>
                      <Text style={[TTComM14, {marginVertical: 5}]}>
                        VAT 5%
                      </Text>
                    </View>

                    <View style={{width: '50%', alignItems: 'flex-end'}}>
                      <Text style={[TTComM18, {marginVertical: 3}]}>
                        210.25 AED
                      </Text>
                      <Text style={[TTComM18, {marginVertical: 3}]}>
                        15.00 AED
                      </Text>
                      <Text style={[TTComM18, {marginVertical: 3}]}>
                        5.25 AED
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: '#000',
                      marginVertical: 5,
                    }}
                  />

                  <View style={{flexDirection: 'row'}}>
                    <View style={{width: '50%'}}>
                      <Text style={[TTComM18, {marginVertical: 5}]}>Total</Text>
                    </View>

                    <View style={{width: '50%', alignItems: 'flex-end'}}>
                      <Text style={[TTComDB28, {marginVertical: 3}]}>
                        230.50 AED
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{marginBottom: 30}}>
                  <View
                    style={{
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                      backgroundColor: 'white',
                      shadowColor: 'white',
                      //   shadowOffset: {height: 0, width: 0},
                      elevation: 5,
                      shadowOpacity: 0,
                      borderRadius: 10,
                      height: 70,
                      alignItems: 'center',
                      shadowRadius: 5,
                      marginHorizontal: 3,
                    }}>
                    <Image
                      source={CardIcon2}
                      resizeMode="contain"
                      style={{height: 35, width: 50, opacity: 0.2}}
                    />
                    <Image
                      resizeMode="contain"
                      source={CardIcon1}
                      style={{height: 35, width: 50}}
                    />
                    <Image
                      source={CardIcon3}
                      style={{height: 35, width: 120, opacity: 0.2}}
                    />
                  </View>
                  <View style={{marginTop: 30}} />
                  <CustomTextInput
                    placeholder="Name"
                    width="80%"
                    onPress={(CardName) => {
                      this.setState({CardName});
                    }}
                  />
                  <View style={{marginTop: 30}} />
                  <CustomTextInput
                    value={this.state.CardNumber}
                    placeholder="Card Number"
                    width="80%"
                    imageSource={appleBlackIcon}
                    onPress={(text) => {
                      let formattedText = text.split(' ').join('');
                      if (formattedText.length > 0) {
                        formattedText = formattedText
                          .match(new RegExp('.{1,4}', 'g'))
                          .join(' ');
                        this.setState({CardNumber: formattedText});
                      } else {
                        this.setState({CardNumber: ''});
                      }
                    }}
                  />
                  <View style={{marginTop: 30}} />
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <CustomTextInput
                      placeholder="MM"
                      flex={1 / 4}
                      onPress={(CardMonth) => {
                        this.setState({CardMonth});
                      }}
                    />
                    <CustomTextInput
                      placeholder="YY"
                      flex={1 / 3}
                      onPress={(CardYear) => {
                        this.setState({CardYear});
                      }}
                    />
                    <CustomTextInput
                      placeholder="CVV"
                      flex={1 / 3}
                      onPress={(CardCVV) => {
                        this.setState({CardCVV});
                      }}
                    />
                  </View>
                  <View style={{marginTop: 30}} />
                  <CustomButton
                    buttonStyles="btn-primary"
                    textStyles="txt-primary"
                    text="Pay"
                    width="100%"
                    onAction={() =>
                      this.props.navigation.navigate('CheckoutHistoryScreen')
                    }
                  />
                </View>
              </ScrollView>
            </View>
          )}
          <View
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: 'transparent',
            }}>
            <CustomHeaderPrim
              leftIcon={LeftArrowIcon}
              leftIconAction={() => this.props.navigation.goBack()}
              centerLabel="Checkout"
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default CheckoutPaymentScreen1;

const CustomSelector = (props) => {
  const {text, days, price, option, toggleOption} = props;
  const {TTComM16, TTComDB16} = CommonStyles;
  return (
    <TouchableOpacity
      onPress={() => toggleOption && toggleOption()}
      style={{flexDirection: 'row', marginVertical: 10, marginHorizontal: 20}}>
      <Image
        source={option ? radioButtonFill : radioButton}
        style={{marginRight: 15}}
      />
      <Text style={TTComM16}>{text && text}</Text>
      <Text style={[TTComDB16, {color: '#7E82E6', marginHorizontal: 5}]}>
        {days && days}
      </Text>
      <Text style={[TTComDB16, {color: '#7E82E6'}]}>{price && price}</Text>
    </TouchableOpacity>
  );
};

const CustomInputDropdown = (props) => {
  const {label, value, onAction, placeholder} = props;
  console.log('value', value);
  return (
    <View>
      {label && (
        <Text style={CommonStyles.customInputLabel}>{label && label}</Text>
      )}
      <TouchableOpacity onPress={() => onAction()} style={{}}>
        <Text
          style={{
            color: placeholder ? '#8C8C8C' : '#000',
            fontSize: 16,
            borderRadius: 12,
            backgroundColor: '#fff',
            fontFamily: 'TTCommons-Medium',
            borderWidth: 1.5,
            borderColor: '#E9E9E9',
            paddingLeft: 20,
            height: 50,
            textAlignVertical: 'center',
          }}>
          {value === '' && placeholder
            ? placeholder
            : value === ''
            ? 'Country'
            : value}
        </Text>
        <Image
          source={require('../../../assests/RegisterScreen/dropdownDownIcon/Polygon2.png')}
          style={{position: 'absolute', top: '40%', right: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};
const CustomTextInput = (props) => {
  const {onPress, placeholder, width, flex, value} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 6,
        justifyContent: 'space-between',
        borderRadius: 10,
        alignItems: 'center',
        flex: flex,
      }}>
      <TextInput
        value={value}
        placeholder={placeholder && placeholder}
        style={{height: 40, width: '100%'}}
        onChangeText={(text) => onPress && onPress(text)}
      />
    </View>
  );
};
