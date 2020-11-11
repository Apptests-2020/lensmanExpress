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
  BackHandler,
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
  yellowBoxIcon,
  circleWithQuestMarkIcon,
} from '../../SharedComponents/CommonIcons';
import {connect} from 'react-redux';
import {setCartItem, removeFromCart, updateCart} from '../../store/actions';
import {CommonStyles} from '../../SharedComponents/CustomStyles';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';
import {FlatList} from 'react-native-gesture-handler';

class CheckoutHistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      cartItems: [],
    };
  }

  async componentDidMount() {
    this.BackHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('ShoppingListScreen');
      return true;
    });
    this.props.navigation.addListener('blur', () => {
      this.props.removeFromCart();
      // The screen is focused
      // Call any action
    });
  }

  componentWillUnmount() {
    this.BackHandler.remove();
  }
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
    const {TTComM18, TTComDB14, TTComDB28, TTComM14, TTComDB18} = CommonStyles;

    const {isLoading, options, showStates} = this.state;

    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/* <StatusBar backgroundColor = "#fff" barStyle = "dark-content" /> */}

          {isLoading ? (
            <Loader />
          ) : (
            <View style={{flex: 9, paddingHorizontal: 20, paddingTop: 80}}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop: 100}} />

                <CustomTracker stage={3} />

                <View
                  style={{
                    height: 100,
                    backgroundColor: '#FFC000',
                    borderRadius: 12,
                    justifyContent: 'flex-end',
                    marginTop: 30,
                  }}>
                  <Image
                    source={yellowBoxIcon}
                    style={{position: 'absolute', top: -20, left: 20}}
                  />
                  <Text style={[TTComDB28, {color: '#fff', padding: 20}]}>
                    Arriving 2 Dec - 4 Dec
                  </Text>
                </View>

                <View
                  style={{
                    borderWidth: 1.5,
                    borderRadius: 12,
                    borderColor: '#E9E9E9',
                    padding: 20,
                    marginVertical: 30,
                    marginBottom: 50,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text style={[TTComM14, {marginVertical: 5}]}>
                        Order Ref.
                      </Text>
                      <Text style={[TTComDB18, {marginVertical: 5}]}>
                        #123456
                      </Text>
                    </View>

                    <View>
                      <Image source={circleWithQuestMarkIcon} />
                    </View>
                  </View>

                  <View style={{marginTop: 30}}>
                    <FlatList
                      keyExtractor={(index) => index.toString()}
                      data={this.state.cartItems}
                      renderItem={({item}) => {
                        return (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginTop: 10,
                            }}>
                            <Image
                              source={{uri: item.images}}
                              style={{height: 50, width: 50, borderRadius: 10}}
                            />
                            <Text style={{marginLeft: 10}}>
                              X{item.quantity}
                            </Text>
                            <Text style={{marginLeft: 10, width: '70%'}}>
                              {item.itemname}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>

                <View style={{marginBottom: 30}}>
                  <CustomButton
                    buttonStyles="btn-primary"
                    textStyles="txt-primary"
                    text="Done"
                    width="100%"
                    onAction={() =>
                      this.props.navigation.navigate('ShoppingListScreen')
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
              leftIconAction={() =>
                this.props.navigation.navigate('ShoppingListScreen')
              }
              centerLabel="Confirmation"
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.Layout.cartList,
  };
};
const mapDispatchToProps = {
  setCartItem,
  removeFromCart,
  updateCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutHistoryScreen);
