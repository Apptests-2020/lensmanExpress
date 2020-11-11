import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  CustomHeaderPrim,
  logoSmall,
  TabNavButton,
  CustomButton,
} from '../../SharedComponents';
import {setCartItem, removeFromCart, updateCart} from '../../store/actions';
import {CommonStyles} from '../../SharedComponents/CustomStyles';
import {
  upDownArrowIcon,
  uploadIcon,
  closeIcon,
  uploadIconGrey,
  closeIconBlack,
} from '../../SharedComponents/CommonIcons';

import AsyncStorage from '@react-native-community/async-storage';
import {QuantityList} from '../ItemDetailsScreen/components';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

class CartScreen extends Component {
  state = {
    isCancelItemModal: false,
    selectedIndexForDelete: 0,
    totalAmount: 0,
    isQuantityModal: false,
    productQty: 0,
    productQtyIndex: 0,
    cartListTotal: [],
    Id: '1wf23gv3erty3jt1234he',
    isSearchData: false,
  };

  componentDidMount() {
    console.log('Component Did Mount');
    this.getUserDetails();
    this.calculateTotalAmount();
  }

  componentWillUnmount() {
    console.log('componentWillUnmount in Cart Screen');
  }

  handleCancelModal = (index) => {
    console.log('11111', index);
    this.setState(
      {
        isCancelItemModal: !this.state.isCancelItemModal,
        selectedIndexForDelete: index,
      },
      () => this.calculateTotalAmount(),
    );
  };

  handleRemoveItemFromCart = () => {
    this.props.removeFromCart(this.state.selectedIndexForDelete);
    this.handleCancelModal();
  };

  calculateTotalAmount = async () => {
    let cartList = this.props.cartList;
    let totalAmount = this.state.totalAmount;
    let total = 0;
    let cartListTotal;
    cartListTotal = cartList.map(
      (item) => item.data.variants[0].price * item.count,
    );

    cartListTotal.map((price) => {
      total = total + Number(price);
    });

    this.setState({totalAmount: total}, () => {});
  };

  handleQuantity = (index) => {
    this.setState({
      isQuantityModal: !this.state.isQuantityModal,
      productQtyIndex: index,
    });
  };

  handleProductCount = (count) => {
    console.log('Count, Index', count);
    let cartList = this.props.cartList; //[this.state.productQtyIndex]
    cartList[this.state.productQtyIndex].count = count;
    console.warn('100', this.props.cartList);
    this.props.updateCart(cartList);
    this.setState({isQuantityModal: false});
    this.calculateTotalAmount();
  };

  getUserDetails = async () => {
    let loginDetails = await AsyncStorage.getItem('loginDetails');
    if (loginDetails !== null) {
      let userId = JSON.parse(loginDetails);
      this.setState({Id: userId.id});
      console.warn(userId.id);
    } else {
      this.setState({Id: ''});
    }
  };

  filterData = (data) => {
    // console.warn(data.id);

    if (data) {
      let id = data.id;
      this.props.navigation.navigate('ItemDetailsScreen', {productId: id});
    }
  };
  render() {
    const {TTComDB28, TTComDB18, TTComM18, tabNavContainer} = CommonStyles;

    const {
      isCancelItemModal,
      selectedIndexForDelete,
      totalAmount,
      isQuantityModal,
      productQty,
      productQtyIndex,
      Id,
      isSearchData,
    } = this.state;
    const {cartList, isFocused} = this.props;
    console.warn(
      '100',
      cartList.map((item) => item.data.variants[0].price * item.count),
    );
    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}

          <View
            style={{
              flex: 9.5,
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              paddingTop: 100,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={[TTComDB28, {marginTop: 100}]}>Your Cart</Text>

              {cartList && cartList.length ? (
                cartList.map((item, index) => {
                  return (
                    <CatItems
                      key={index}
                      index={index}
                      data={item.data}
                      count={item.count ? item.count : 1}
                      handleCancelModal={this.handleCancelModal}
                      handleQuantity={this.handleQuantity}
                      // changeCount={() => this.handleChangeCount()}
                    />
                  );
                })
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 150,
                  }}>
                  <Text style={CommonStyles.TTComDB14}>Your Cart is Empty</Text>
                </View>
              )}

              {cartList && cartList.length > 0 && (
                <View
                  style={{
                    marginVertical: 15,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}>
                  <View style={{width: '50%', paddingBottom: 5}}>
                    <TouchableOpacity
                      style={{
                        minHeight: 10,
                        borderRadius: 26,
                        borderWidth: 1.5,
                        borderColor: '#000',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        width: '80%',
                      }}>
                      <Text style={[TTComDB18, {textAlign: 'center'}]}>
                        Apply voucher
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      width: '50%',
                      // paddingLeft: 20,
                    }}>
                    <Text style={TTComM18}>Total</Text>
                    <Text style={TTComDB28}>{totalAmount} AED</Text>
                  </View>
                </View>
              )}

              {cartList && cartList.length > 0 && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 15,
                    marginBottom: 80,
                  }}>
                  <CustomButton
                    buttonStyles="btn-primary"
                    textStyles="txt-primary"
                    text="Checkout"
                    width="100%"
                    onAction={() =>
                      this.props.navigation.navigate(
                        Id !== '' && Id !== '1wf23gv3erty3jt1234he'
                          ? 'CheckoutPaymentScreen'
                          : 'CheckoutNewUserScreen',
                        {itemdata: '', productQty: '', type: 'cart'},
                      )
                    }
                  />
                </View>
              )}
            </ScrollView>
            {!isSearchData && (
              <View style={[tabNavContainer, {width: '100%'}]}>
                <TabNavButton
                  nav={this.props}
                  active="3"
                  cartNotification={cartList}
                />
              </View>
            )}
            {isCancelItemModal && (
              <Modal
                animationType="slide"
                transparent={true}
                visible={isCancelItemModal}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00000038',
                  }}>
                  <View
                    style={{
                      width: 260,
                      height: 250,
                      backgroundColor: '#fff',
                      borderRadius: 15,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        TTComDB18,
                        {textAlign: 'center', paddingTop: 10},
                      ]}>
                      Remove
                    </Text>
                    <Text
                      style={[
                        TTComDB18,
                        {
                          textAlign: 'center',
                          paddingVertical: 2,
                          paddingBottom: 10,
                        },
                      ]}>
                      {cartList &&
                        cartList.length &&
                        cartList[selectedIndexForDelete].data.title}
                    </Text>

                    <View
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '65%',
                      }}>
                      <CustomButton
                        buttonStyles="btn-primary"
                        textStyles="txt-primary"
                        text="Yes"
                        width="80%"
                        onAction={() => this.handleRemoveItemFromCart()}
                      />
                      <View style={{marginVertical: 5}} />
                      <CustomButton
                        buttonStyles="btn-secondary-black"
                        textStyles="txt-secondary"
                        text="No"
                        width="80%"
                        onAction={() =>
                          this.setState({isCancelItemModal: false})
                        }
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            )}
            {isQuantityModal && (
              <Modal
                animationType="slide"
                transparent={true}
                visible={isQuantityModal}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#292f332e',
                  }}>
                  <View
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      borderRadius: 15,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                      }}>
                      <Text style={[TTComDB18, {paddingVertical: 5}]}>
                        Select Quantity
                      </Text>
                      <TouchableOpacity
                        style={{paddingLeft: 10, padding: 10}}
                        onPress={() => this.setState({isQuantityModal: false})}>
                        <Image source={closeIcon} style={{tintColor: '#000'}} />
                      </TouchableOpacity>
                    </View>

                    <QuantityList
                      count={1}
                      isSelect={cartList[productQtyIndex].count === 1}
                      handleProductCount={() => this.handleProductCount(1)}
                    />
                    <QuantityList
                      count={2}
                      isSelect={cartList[productQtyIndex].count === 2}
                      handleProductCount={() => this.handleProductCount(2)}
                    />
                    <QuantityList
                      count={3}
                      isSelect={cartList[productQtyIndex].count === 3}
                      handleProductCount={() => this.handleProductCount(3)}
                    />
                    <QuantityList
                      count={4}
                      isSelect={cartList[productQtyIndex].count === 4}
                      handleProductCount={() => this.handleProductCount(4)}
                    />
                  </View>
                </View>
              </Modal>
            )}
          </View>
          <View
            style={[
              {
                zIndex: 1,
                position: 'absolute',
                backgroundColor: 'transparent',
                width: '100%',
              },
              isSearchData && {height: '100%'},
            ]}>
            <CustomHeaderPrim
              leftIcon={logoSmall}
              placeholder="What are you looking for?"
              searchBox
              leftIconAction={() =>
                this.props.navigation.navigate('DashboardScreen')
              }
              filterData={this.filterData}
              onSearchEvent={(isShow) => {
                this.setState({isSearchData: isShow});
              }}
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
)(function (props) {
  const isFocused = useIsFocused();

  return <CartScreen {...props} isFocused={isFocused} />;
});

const CatItems = (props) => {
  const {TTComDB18, TTComM16, TTComM18} = CommonStyles;

  const {handleCancelModal, data, index, count, handleQuantity} = props;
  return (
    <View style={{flex: 1, flexDirection: 'row', marginVertical: 8}}>
      <View
        style={{
          flex: 10.5,
          borderRadius: 14,
          borderColor: '#E9E9E9',
          borderWidth: 1.5,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri:
                data &&
                data.image &&
                data.image.src !== '' &&
                data.image.src !== null &&
                data.image.src,
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 12,
              // borderWidth: 2,
              resizeMode: 'contain',
            }}
          />
          {/* <Image
            source={require('../../../assests/Test/martin-pechy-veoAiHnM3AI-unsplash.png')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 200,
              position: 'absolute',
              bottom: 10,
              right: 30,
              borderWidth: 2,
              borderColor: '#fff',
            }}
          /> */}
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={TTComDB18}>
            {data && data.title && data.title.length > 15
              ? data.title.slice(0, 11) + '...'
              : data && data.title && data.title}
          </Text>
          <Text style={TTComM16}>
            {data &&
              data.variants &&
              data.variants[0] &&
              data.variants[0].price &&
              data.variants[0].price}
            {' AED'}
          </Text>
        </View>
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{backgroundColor: '#E9E9E9', padding: 15, borderRadius: 10}}>
            <Text>{count}</Text>
          </View>
        </View>*/}
        <TouchableOpacity
          onPress={() => handleQuantity(index)}
          style={{justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: '#E9E9E9',
              width: 60,
              height: 50,
              borderRadius: 15,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 10,
              marginRight: 10,
            }}>
            <Text style={[TTComM18, {paddingRight: 10}]}>{count}</Text>
            <Image source={upDownArrowIcon} />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => handleCancelModal(index)}
        style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={closeIconBlack} />
      </TouchableOpacity>
    </View>
  );
};
