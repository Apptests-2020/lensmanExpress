import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  BackHandler,
} from 'react-native';

import {
  CustomHeaderPrim,
  CustomButton,
  SignatureContainer,
} from '../../SharedComponents';

import {
  LeftArrowIcon,
  newSignatureIcon,
} from '../../SharedComponents/CommonIcons';
import {CommonStyles} from '../../SharedComponents/CustomStyles';
import AsyncStorage from '@react-native-community/async-storage';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

class SchoolIntructionScreen extends Component {
  state = {
    formData: '',
  };

  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('DashboardScreen');
      return true;
    });
    console.log('formData from submit form', this.props.route.params.formData);
    if (this.props.route.params && this.props.route.params.formData) {
      this.setState({formData: this.props.route.params.formData});
    }
  }

  componentWillUnmount() {
    this.BackHandler.remove();
  }
  render() {
    const {TTComDB28, TTComM16, TTComDB18} = CommonStyles;

    return (
      <>
        <CustomStatusBar />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}

          <View style={{flex: 9}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 10}}>
              <View style={{marginTop: 170}} />

              <View style={{flex: 1, paddingHorizontal: 20, paddingBottom: 30}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[TTComM16, {marginRight: 5}]}>Powered by</Text>
                    <Image source={newSignatureIcon} style={{}} />
                  </View>
                </View>

                {/* <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginVertical: 20,
                  height: 100,
                }}>
                <CustomButton
                  buttonStyles="btn-primary"
                  textStyles="txt-primary"
                  text="Take a photo(s)"
                  onAction={() =>
                    this.props.navigation.navigate('CameraSectionScreen')
                  }
                  width="100%"
                />
                <View style={{marginVertical: 25}} />

                <CustomButton
                  buttonStyles="btn-secondary-black"
                  textStyles="txt-secondary"
                  text="Upload image(s)"
                  // onAction        = {}
                  width="100%"
                />
              </View> */}

                <View style={{marginVertical: 10}}>
                  <Text style={TTComDB28}>
                    Instructions for taking your School Photos
                  </Text>
                </View>

                <Desc
                  number={1}
                  text="We recommend using a white wall or a white cloth as the photo background for all photos."
                />
                <Desc
                  number={2}
                  text="Maintain the same lighting pattern in all pictures — we recommend that the shoot be done outdoor in a soft evening daylight without the use of the flash."
                />
                <Desc
                  number={3}
                  text="Please maintain a minimum 7ft gap between the background and student."
                />
                <Desc
                  number={4}
                  text="All photos should be taken on an eye level height, and please make sure full image is captured without any cropping."
                />
                <Desc
                  number={5}
                  text="We require 3 full size picture poses for the group photo, and 3 portrait poses."
                />
                <Text style={[TTComM16, {paddingHorizontal: 25}]}>
                  Enjoy your at-home school photoshoot!
                </Text>
              </View>
              <View style={{paddingHorizontal: 20}}>
                <CustomButton
                  buttonStyles="btn-secondary-black"
                  textStyles="txt-secondary"
                  text="Next"
                  onAction={() => {
                    this.setState({isLoading: false}, async () => {
                      const data = {
                        data: this.state.formData,
                        screen: 'GroupPoseGuide',
                      };
                      await AsyncStorage.setItem(
                        'AlreadyTakePhoto',
                        JSON.stringify(data),
                      );
                    });
                    this.props.navigation.navigate('GroupPoseGuide', {
                      formData: this.state.formData,
                      // formData: {
                      //   name: 'form.name',
                      //   email: 'form.email',
                      //   refferId: 'this.state.loginData.id',
                      //   grade: 'form.class',
                      //   section: 'form.division',
                      //   phone: 'form.phone',
                      //   gender: 'male',
                      //   schoolId: 1,
                      // },
                    });
                  }}
                  width="100%"
                />
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: 'transparent',
            }}>
            <CustomHeaderPrim
              leftIcon={LeftArrowIcon}
              centerLabel="Instructions"
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

export default SchoolIntructionScreen;

const Desc = ({number, text}) => {
  const {TTComM16} = CommonStyles;
  return (
    <View style={{flexDirection: 'row', marginVertical: 10}}>
      <Text style={TTComM16}> {number}) </Text>
      <Text
        style={[
          TTComM16,
          {
            paddingHorizontal: 5,
            paddingRight: 20,
            fontFamily: 'TTCommons-Medium',
          },
        ]}>
        {' '}
        {text}
      </Text>
    </View>
  );
};
