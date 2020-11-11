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
  Modal,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {
  CustomHeaderPrim,
  CustomButton,
  Loader,
  TabNavButton,
} from '../../SharedComponents';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

import {
  logoSmall,
  SchoolBg,
  signature,
} from '../../SharedComponents/CommonIcons';

import {
  ItemList,
  PopupItemList,
  ForStudentSection,
  DemoSection,
} from './components';

import Styles from './DashboardStyles';
import {CommonStyles} from '../../SharedComponents/CustomStyles';
import {BaseUrl, base64Auth} from '../../utils/constants';

import {Demo1, Demo2, Demo3} from '../../Screens';

import Swiper from 'react-native-swiper';
import AuthScreen from '../AuthScreen';

import {setCartItem} from '../../store/actions';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    sectionId: '',
    isSection: false,
    isDemoShow: true,
    demoScreenNum: 0,
    SchoolImage: '',
    productList: [],
    index: 0,
    isLoading: false,
    screen: '',
    asyncData: '',
    isSearchData: false,
  };

  componentDidMount() {
    this.getDataFromStore('loginDetails', 'componentdidMount');
    this.TakePictureCurrentScreen();
    // this.getSearchData();
    if (
      this.props.route.params &&
      this.props.route.params.fromScreen &&
      this.props.route.params.fromScreen !== ''
    ) {
      // console.log('pling in DID mount Value', this.props.route.params);
      this.setState(
        {
          sectionId: this.props.route.params.fromScreen,
          isSection: true,
          isDemoShow: false,
          SchoolImage: this.props.route.params.data,
        },
        () => console.log('1122', this.state.isSection),
      );
    }

    if (this.props.route.params && this.props.route.params.fromLogin) {
      this.setState({isDemoShow: false});
    }

    this.getProductList();
  }

  componentDidUpdate(prevProps) {
    const {params} = this.props.route;

    if (params && params.fromScreen && params.fromScreen !== '') {
      console.log('In dashboard Screen Before ', this.props.route.params);
      console.log(
        'In dashboard Screen Before 111 ',
        this.props.route.params,
        prevProps.route.params,
      );
      if (this.props.route.params.fromScreen) {
        if (this.props.route.params !== prevProps.route.params) {
          this.setState(
            {
              sectionId: params.fromScreen,
              isSection: true,
              SchoolImage: this.props.route.params.SchoolImage,
            },
            () => console.log('1122', this.state.isSection),
          );
        }
      }
    }
    if (prevProps.isFocused !== this.props.isFocused) {
      this.TakePictureCurrentScreen();
      // this.getData('loginDetails');
      this.getDataFromStore('loginDetails', 'update');
      if (!this.state.isDemoShow) this.getProductList();
    }
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
    } catch (err) {
      alert('some error occurs');
      console.log('Err in set Login Dat to Local', err);
    }
  };
  componentWillUnmount() {
    console.log('Will unmounted on Dashboard');
  }

  filterData = (data) => {
    if (data) {
      this.getProductList(data.id);
    }
  };

  getProductList = (id) => {
    this.setState({isLoading: true}, async () => {
      if (id) {
        this.props.navigation.navigate('ItemDetailsScreen', {
          productId: id,
        });
      } else {
        axios
          .get(
            BaseUrl +
              '/admin/api/2020-07/products.json?collection_id=224252428453',
            {
              headers: {
                Authorization: base64Auth,
              },
            },
          )
          .then((res) => {
            console.warn('res2');

            if (res.data.products && res.data.products.length) {
              this.setState(
                {productList: res.data.products, isLoading: false},
                () => {
                  // console.log("Res get Product list in Dashboard ",this.state.productList);
                },
              );
            }
          })
          .catch((err) => {
            this.setState({isLoading: false});
            console.log('Err in get Product list in Dashboard', err);
          });
      }
    });
  };

  handleDemoScreen = (status) => {
    this.setState({demoScreenNum: this.state.demoScreenNum + 1}, () => {
      // console.log('this.state.demoScreenNum', this.state.demoScreenNum);
      if (this.state.demoScreenNum === 4) {
        this.setState({isDemoShow: false});
      }
    });

    if (status) this.setState({isDemoShow: false});
  };

  getDataFromStore = async (value, fromdata) => {
    try {
      let loggedData = await AsyncStorage.getItem(value);
      console.warn('Is Logged', loggedData);

      if (loggedData !== null) {
        this.setState({isDemoShow: false, asyncData: JSON.parse(loggedData)});
      } else {
        this.setState(
          {
            isDemoShow: fromdata === 'componentdidMount' ? true : false,
          },
          () => {
            this.saveDataLocal();
          },
        );
      }
    } catch (err) {
      console.log('Is Logged', err);
    }
  };
  getData = async (value) => {
    try {
      let loggedData = await AsyncStorage.getItem(value);
      console.warn('Is Logged', loggedData);

      if (loggedData !== null) {
        this.setState({asyncData: JSON.parse(loggedData)});
      } else {
        this.setState({asyncData: ''});
      }
    } catch (err) {
      console.log('Is Logged', err);
    }
  };
  storeData = async (data, value) => {
    try {
      await AsyncStorage.setItem(data, value);
      // console.log('Seted vValues', loggedData);
    } catch (err) {
      console.log('Seted Values ', err);
    }
  };

  handleSection = () => {
    this.setState({isSection: !this.state.isSection});
  };

  TakePictureCurrentScreen = async () => {
    const data = await AsyncStorage.getItem('AlreadyTakePhoto');
    if (data !== null) {
      const parsedData = JSON.parse(data);
      this.setState({screen: parsedData});
    } else {
      const data = {
        data: '',
        screen: 'SchoolSubmitPhotoScreen',
      };
      this.setState({screen: data});
    }
  };

  getSearchData = async () => {
    await axios
      .get(BaseUrl + `/admin/api/2020-07/products.json`, {
        headers: {
          Authorization: base64Auth,
        },
      })
      .then((res) => {
        console.warn(
          'search data',
          res.data.products.map((item) => item.id),
        );
        this.setState({productList: res.data.products});
      });
  };
  render() {
    const {tabNavContainer} = Styles;
    const {
      isSection,
      isDemoShow,
      SchoolImage,
      productList,
      isLoading,
      asyncData,
      isSearchData,
    } = this.state;
    const count = 0;

    const {TTComDB28, TTComDB16} = CommonStyles;

    const {cartList} = this.props;

    return (
      <>
        <CustomStatusBar />

        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}>
          {/* <KeyboardAvoidingView
          // style={{flex: 1}}
          // behavior={Platform.OS === 'android' ? 'padding' : 'height'}
          > */}

          {isLoading ? (
            <Loader />
          ) : (
            <View style={{flex: 11, paddingHorizontal: 20}}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, marginTop: 170}}>
                  <ImageBackground
                    source={SchoolBg}
                    style={{width: '100%', height: 450}}
                    // imageStyle={{borderRadius: 25, borderWidth: 1.5}}
                  >
                    <LinearGradient
                      colors={['#ffffff00', '#00000091']}
                      locations={[0.1, 0.9]}
                      style={{flex: 1, zIndex: 10, borderRadius: 25}}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'flex-end',
                          padding: 10,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            marginBottom: 5,
                          }}>
                          <Text style={[TTComDB16, {color: '#fff'}]}>
                            Powered by
                          </Text>
                          <Image source={signature} />
                        </View>
                        <View>
                          <Text
                            style={[CommonStyles.TTComDB28, {color: '#fff'}]}>
                            Take your at-home
                          </Text>
                          <Text
                            style={[CommonStyles.TTComDB28, {color: '#fff'}]}>
                            School Photo!
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 5,
                          }}>
                          <CustomButton
                            buttonStyles="btn-primary"
                            // textStyles="txt-primary"
                            text="Take Picture"
                            width="49%"
                          />
                          <CustomButton
                            buttonStyles="btn-secondary"
                            // textStyles="txt-primary"
                            text="Upload"
                            width="50%"
                          />
                        </View>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
                <View style={{marginVertical: 5}}>
                  <Image
                    source={require('../../../assests/Common/newDashboardDesign/LensmanLogo.png')}
                  />
                </View>
                <View style={{marginTop: 30, paddingBottom: 100}}>
                  <Text style={[CommonStyles.TTComDB28, {color: 'black'}]}>
                    Featured Products
                  </Text>
                  <View
                    style={{
                      flexWrap: 'wrap',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingVertical: 10,
                    }}>
                    {productList && productList.length
                      ? productList.map((item, index) => {
                          // console.warn(item.variants[0].compare_at_price);

                          return (
                            <ItemList
                              discount={
                                item.variants &&
                                item.variants[0] &&
                                item.variants[0].price &&
                                item.variants[0].compare_at_price
                                  ? '-' +
                                    Math.floor(
                                      100 -
                                        (item.variants[0].price /
                                          item.variants[0].compare_at_price) *
                                          100,
                                    ) +
                                    '%'
                                  : '0'
                              }
                              key={index}
                              label={item.title}
                              price={
                                item.variants &&
                                item.variants[0] &&
                                item.variants[0].price
                                  ? item.variants[0].price + ' AED'
                                  : '12 AED'
                              }
                              itemImage={
                                item.image &&
                                item.image.src !== '' &&
                                item.image.src !== null &&
                                item.image.src
                              }
                              onAction={() =>
                                this.props.navigation.navigate(
                                  'ItemDetailsScreen',
                                  {productId: productList[index].id},
                                )
                              }
                            />
                          );
                        })
                      : null}
                  </View>
                </View>
              </ScrollView>
            </View>
          )}

          {!isSearchData && (
            <SafeAreaView>
              <View style={tabNavContainer}>
                <TabNavButton
                  nav={this.props}
                  active="1"
                  cartNotification={cartList}
                />
              </View>
            </SafeAreaView>
          )}

          {(isSection || isDemoShow) && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={isSection || isDemoShow}>
              {isSection && (
                <ForStudentSection
                  schoolImage={SchoolImage}
                  handleSection={this.handleSection}
                />
              )}
              {isDemoShow && (
                <Swiper
                  style={{}}
                  showsButtons={false}
                  showsPagination={false}
                  loop={false}
                  index={this.state.index}
                  onIndexChanged={(i) =>
                    this.setState({index: i}, () => {
                      if (this.state.index < 0) {
                        this.setState({index: 0}, () =>
                          this.swiper.scrollBy(this.state.index + 1, true),
                        );
                      }
                      console.log('index', this.state.index);
                    })
                  }
                  ref={(ref) => {
                    this.swiper = ref;
                  }}>
                  <Demo1
                    {...this.props}
                    changeScreen={() =>
                      this.swiper.scrollBy(this.state.index + 1, true)
                    }
                    closeModal={() => this.setState({isDemoShow: false})}
                  />

                  <Demo2
                    {...this.props}
                    changeScreen={() =>
                      this.swiper.scrollBy(this.state.index, true)
                    }
                    closeModal={() => this.setState({isDemoShow: false})}
                  />

                  <Demo3
                    {...this.props}
                    changeScreen={() =>
                      this.swiper.scrollBy(this.state.index, true)
                    }
                    closeModal={(cb) => this.setState({isDemoShow: false})}
                  />
                  <AuthScreen
                    {...this.props}
                    changeScreen={() =>
                      this.swiper.scrollBy(this.state.index + 1, true)
                    }
                    handleCloseModal={(cb) =>
                      this.setState({isDemoShow: false})
                    }
                  />
                </Swiper>
              )}
            </Modal>
          )}
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
              handleSearchBox={() => console.log('search box')}
              data={productList}
              filterData={this.filterData}
              onSearchEvent={(isShow) => {
                this.setState({isSearchData: isShow});
              }}
            />
          </View>
          {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('PROP in REDUX', state.Layout.cartList);
  return {
    cartList: state.Layout.cartList,
  };
};
const mapDispatchToProps = {
  setCartItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(function (props) {
  const isFocused = useIsFocused();

  return <DashboardScreen {...props} isFocused={isFocused} />;
});
