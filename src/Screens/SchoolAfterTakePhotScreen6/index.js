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
} from 'react-native';

import {CustomHeaderPrim, CustomButton} from '../../SharedComponents';

import {
  LeftArrowIcon,
  newSignatureIcon,
  boyPose1Icon,
  boyPose2Icon,
  boyPose3Icon,
  boyPortraitePose1Icon,
  boyPortraitePose2Icon,
  boyPortraitePose3Icon,
  girlPose1Icon,
  girlPose2Icon,
  girlPose3Icon,
  girlPortraitePose1Icon,
  girlPortraitePose2Icon,
  girlPortraitePose3Icon,
  verifedWithBlueFillIcon,
} from '../../SharedComponents/CommonIcons';
import {CommonStyles} from '../../SharedComponents/CustomStyles';

class SchoolAfterTakePhotScreen6 extends Component {
  state = {
    formData: '',
  };

  componentDidMount() {
    console.log(
      'formData from submit form in GUIDE PAGE 666',
      this.props.route.params,
    );

    if (this.props.route.params && this.props.route.params.formData) {
      this.setState({formData: this.props.route.params.formData});
    }
  }

  render() {
    const {TTComDB28, TTComM16, TTComDB18, TTComDB20, TTComDB16} = CommonStyles;
    const {formData} = this.state;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <View style={{flex: 1, zIndex: 4, backgroundColor: 'transparent'}}>
          <CustomHeaderPrim
            leftIcon={LeftArrowIcon}
            centerLabel="Add photo"
            leftIconAction={() => this.props.navigation.goBack()}
          />
        </View>

        <View style={{flex: 9}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop: 100}} />

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={[TTComDB16, {textAlign: 'center', marginBottom: 30}]}>
                Group Photo Pose 6 of 6 uploaded!
              </Text>
              <View
                style={{
                  borderRadius: 500,
                  borderWidth: 1.5,
                  borderColor: '#E9E9E9',
                  width: 100,
                  height: 100,
                  marginVertical: 10,
                }}>
                <Image
                  source={verifedWithBlueFillIcon}
                  style={{position: 'absolute', right: 0}}
                />
              </View>

              <View
                style={{
                  width: 210,
                  height: 280,
                  borderRadius: 27,
                  borderWidth: 1.5,
                  borderColor: '#C6C6C6',
                }}></View>
            </View>

            <View style={{flex: 1, paddingHorizontal: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 50,
                }}>
                <CustomButton
                  buttonStyles="btn-primary"
                  textStyles="txt-primary"
                  text="Take Next Photo"
                  onAction={() =>
                    this.props.navigation.navigate('CameraSectionScreen')
                  }
                  width="100%"
                />
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <View style={{flexDirection: 'row', marginTop: 40}}>
                  <Text>Powered by</Text>
                  <Image
                    source={newSignatureIcon}
                    style={{position: 'relative', top: -10, left: -1}}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default SchoolAfterTakePhotScreen6;
