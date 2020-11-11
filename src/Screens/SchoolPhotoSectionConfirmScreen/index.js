import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  BackHandler,
} from 'react-native';
import {
  LeftArrowIcon,
  verifedWithBlueFillIcon,
} from '../../SharedComponents/CommonIcons';
import {
  CustomTracker,
  CustomHeaderPrim,
  CustomButton,
} from '../../SharedComponents';
import {CommonStyles} from '../../SharedComponents/CustomStyles';
import AsyncStorage from '@react-native-community/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';
class SchoolPhotoSectionConfirmScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lastImage: '',
    };
  }
  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('DashboardScreen');
      return true;
    });
    console.log(
      'this.props.route.params in Did Mount',
      this.props.route.params,
    );
    const {params} = this.props.route;
    if (params.image) {
      this.setState({lastImage: params.image});
    }
    this.resetAlreadyTakenStoreage();
  }

  resetAlreadyTakenStoreage = async () => {
    await AsyncStorage.removeItem('AlreadyTakePhoto');
  };

  componentWillUnmount() {
    this.BackHandler.remove();
  }
  render() {
    const {TTComDB28, TTComM14, TTComDB18, TTComDB16} = CommonStyles;
    const {lastImage} = this.state;
    return (
      <>
        <CustomStatusBar />
        <SafeAreaView
          style={{
            height: Dimensions.get('screen').height,
          }}>
          <View style={{flex: 1, backfaceVisibility: 'hidden'}}>
            <ScrollView
              style={{
                flex: 1,
                paddingHorizontal: 20,
                marginTop: 120,
              }}>
              <View style={{marginVertical: 15}}>
                <CustomTracker stage={3} label="schoolSection" />
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <View
                  style={{
                    backgroundColor: '#FFC000',
                    // width: 310,
                    height: 90,
                    borderRadius: 12,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: 100,
                      paddingLeft: 10,
                      position: 'relative',
                      top: -35,
                    }}>
                    <Image
                      source={
                        lastImage !== ''
                          ? {uri: lastImage}
                          : require('../../../assests/Common/imagePlaceholder/placeholder.jpg')
                      }
                      style={{width: 90, height: 90, borderRadius: 45}}
                    />
                    <Image
                      source={verifedWithBlueFillIcon}
                      style={{position: 'absolute', right: 0}}
                    />
                  </View>
                  <View
                    style={{
                      alignSelf: 'center',
                      justifyContent: 'center',
                      marginLeft: 10,
                    }}>
                    <Text style={[TTComDB28, {color: '#fff'}]}>
                      Your photos have{' '}
                    </Text>
                    <Text style={[TTComDB28, {color: '#fff'}]}>
                      been uploaded!
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 310,
                    height: 90,
                    paddingHorizontal: 10,
                  }}>
                  <Text style={[TTComM14, {lineHeight: 20}]}>Order Ref.</Text>
                  <Text style={[TTComDB18, {lineHeight: 27}]}>#230AE3700</Text>
                  <Text style={[TTComDB16, {lineHeight: 17}]}>
                    Please check your email for confirmation.
                  </Text>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: 20,
                }}>
                <View
                  style={{
                    borderWidth: 1.5,
                    borderColor: '#E9E9E9',
                    borderRadius: 12,
                    width: 310,
                  }}>
                  <Text
                    style={[TTComDB16, {textAlign: 'center', marginTop: 25}]}>
                    Add your photo to these products?
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginVertical: 20,
                    }}>
                    <ItemList
                      img={require('../../../assests/Test/photo_mug_large-5.jpg')}
                      label="Coffee Mug"
                      price="16.75"
                    />
                    <View style={{marginHorizontal: 15}} />
                    <ItemList
                      img={require('../../../assests/Test/photo_mug_large-5.jpg')}
                      label="Picture Frame"
                      price="235.75"
                    />
                    <Image />
                  </View>
                  <CustomButton
                    buttonStyles="btn-secondary-black"
                    textStyles="txt-secondary"
                    text="View more"
                    onAction={() =>
                      this.props.navigation.navigate('DashboardScreen')
                    }
                    width="80%"
                    alignCenter
                  />
                </View>
              </View>
              <View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 40,
                  }}>
                  <CustomButton
                    buttonStyles="btn-primary"
                    textStyles="txt-primary"
                    text="Done"
                    onAction={() =>
                      this.props.navigation.navigate('DashboardScreen')
                    }
                    width={310}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              position: 'absolute',
              flex: 1,
              backfaceVisibility: 'hidden',
            }}>
            <CustomHeaderPrim
              leftIcon={LeftArrowIcon}
              centerLabel="Confirmation"
              leftIconAction={() =>
                this.props.navigation.navigate('DashboardScreen')
              }
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default SchoolPhotoSectionConfirmScreen;

const ItemList = (props) => {
  const {TTComDB18, TTComM14} = CommonStyles;
  const {img, label, price} = props;
  return (
    <View>
      <Image source={img} style={{borderRadius: 27, width: 101, height: 106}} />
      <View style={{marginLeft: 10}}>
        <Text style={[TTComDB18, {marginTop: 10}]}>{label && label}</Text>
        <Text style={TTComM14}>
          {' '}
          {price && price}
          {'AED'}
        </Text>
      </View>
    </View>
  );
};
