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
  boyPose3ForCameraIcon,
  girlPose3ForCameraIcon,
} from '../../SharedComponents/CommonIcons';
import {CommonStyles} from '../../SharedComponents/CustomStyles';

class SchoolAfterTakePhotScreen2 extends Component {
  state = {
    formData: '',
    takenImage: '',
  };

  componentDidMount() {
    console.log(
      'formData from submit form in SchoolAfterTakePhotScreen2',
      this.props.route.params,
    );

    if (this.props.route.params && this.props.route.params.formData) {
      this.setState({formData: this.props.route.params.formData});
    }

    if (this.props.route.params && this.props.route.params.data) {
      this.setState({takenImage: this.props.route.params.data});
    }
  }

  render() {
    const {TTComDB28, TTComM16, TTComDB18, TTComDB20, TTComDB16} = CommonStyles;
    const {formData, takenImage} = this.state;

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
                Group Photo Pose 2 of 3 uploaded!
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
                  style={{position: 'absolute', right: 0, zIndex: 2}}
                />
                {takenImage && takenImage !== '' ? (
                  <Image
                    source={{uri: takenImage}}
                    style={{width: '100%', height: '100%', borderRadius: 500}}
                  />
                ) : null}
              </View>

              <View>
                <Text style={[TTComDB20, {marginVertical: 25}]}>
                  Next: Group Photo Pose 3
                </Text>
              </View>

              <View
                style={{
                  width: 210,
                  height: 280,
                  borderRadius: 27,
                  borderWidth: 1.5,
                  borderColor: '#C6C6C6',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    formData.gender === 'male'
                      ? boyPose3ForCameraIcon
                      : girlPose3ForCameraIcon
                  }
                  style={{resizeMode: 'contain'}}
                />
              </View>
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
                    this.props.navigation.navigate('CameraSectionScreen', {
                      fromdata: 'SchoolAfterTakePhotScreen2',
                      formData: formData,
                    })
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={[TTComM16, {marginRight: 5}]}>Powered by</Text>
                  <Image source={newSignatureIcon} style={{}} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default SchoolAfterTakePhotScreen2;
