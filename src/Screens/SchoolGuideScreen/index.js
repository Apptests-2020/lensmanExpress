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
import {BoxShadow} from 'react-native-shadow';
import {
  CustomHeaderPrim,
  CustomButton,
  SignatureContainer,
} from '../../SharedComponents';

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
} from '../../SharedComponents/CommonIcons';
import {CommonStyles} from '../../SharedComponents/CustomStyles';

class SchoolGuideScreen extends Component {
  state = {
    formData: '',
  };

  componentDidMount() {
    console.log(
      'formData from submit form in GUIDE PAGE',
      this.props.route.params,
    );

    if (this.props.route.params && this.props.route.params.formData) {
      this.setState({formData: this.props.route.params.formData});
    }
  }

  render() {
    const {TTComDB28, TTComM16, TTComDB18, TTComDB20} = CommonStyles;
    const {formData} = this.state;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <View style={{flex: 1, zIndex: 4, backgroundColor: 'transparent'}}>
          <CustomHeaderPrim
            leftIcon={LeftArrowIcon}
            centerLabel="Poses Guide"
            leftIconAction={() => this.props.navigation.goBack()}
          />
        </View>

        <View style={{flex: 9}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop: 100}} />

            <View style={{flex: 1, paddingHorizontal: 20, paddingBottom: 30}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={[TTComM16, {marginRight: 5}]}>Powered by</Text>
                  <Image source={newSignatureIcon} />
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginVertical: 20,
                  height: 100,
                }}>
                <CustomButton
                  buttonStyles="btn-primary"
                  textStyles="txt-primary"
                  text="Take my Photos"
                  onAction={() =>
                    this.props.navigation.navigate('CameraSectionScreen', {
                      fromdata: 'SchoolGuideScreen',
                      formData: this.state.formData,
                    })
                  }
                  width="100%"
                />
                <View style={{marginVertical: 20}} />

                <CustomButton
                  buttonStyles="btn-secondary-black"
                  textStyles="txt-secondary"
                  text="Upload from Library"
                  // onAction        = {}
                  width="100%"
                />
              </View>

              <View>
                <Text
                  style={[
                    TTComDB20,
                    {
                      textAlign: 'center',
                      marginVertical: 10,
                      paddingHorizontal: 15,
                    },
                  ]}>
                  Please take all your 6 photos following the poses shown below.
                </Text>

                <CustomGroupSection
                  heading="Group Photo"
                  label1="Pose 1"
                  image1={
                    formData.gender === 'male' ? boyPose1Icon : girlPose1Icon
                  }
                  label2="Pose 2"
                  image2={
                    formData.gender === 'male' ? boyPose2Icon : girlPose2Icon
                  }
                  label3="Pose 3"
                  image3={
                    formData.gender === 'male' ? boyPose3Icon : girlPose3Icon
                  }
                />

                <CustomGroupSection
                  isShadow={true}
                  heading="Portrait"
                  label1="Pose 1"
                  image1={
                    formData.gender === 'male'
                      ? boyPortraitePose1Icon
                      : girlPortraitePose1Icon
                  }
                  label2="Pose 2"
                  image2={
                    formData.gender === 'male'
                      ? boyPortraitePose2Icon
                      : girlPortraitePose2Icon
                  }
                  label3="Pose 3"
                  image3={
                    formData.gender === 'male'
                      ? boyPortraitePose3Icon
                      : girlPortraitePose3Icon
                  }
                />
              </View>

              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  height: 100,
                  marginTop: 50,
                }}>
                <CustomButton
                  buttonStyles="btn-primary"
                  textStyles="txt-primary"
                  text="Take my photos"
                  onAction={() =>
                    this.props.navigation.navigate('CameraSectionScreen', {
                      fromdata: 'SchoolGuideScreen',
                      formData: this.state.formData,
                    })
                  }
                  width="100%"
                />
                <View style={{marginVertical: 25}} />

                <CustomButton
                  buttonStyles="btn-secondary-black"
                  textStyles="txt-secondary"
                  text="Upload from Library"
                  // onAction        = {}
                  width="100%"
                />
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 30,
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

export default SchoolGuideScreen;

const CustomGroupSection = (props) => {
  const {
    heading,
    label1,
    label2,
    label3,
    image1,
    image2,
    image3,
    isShadow,
  } = props;
  const {TTComDB20, TTComM15} = CommonStyles;
  return (
    <View style={{marginTop: 20}}>
      <Text style={[TTComDB20, {textAlign: 'center'}]}>{heading}</Text>

      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '30%',
            alignItems: 'center',
          }}>
          <Text style={[TTComM15, {paddingBottom: 10}]}>{label1}</Text>
          <View
            style={
              isShadow
                ? {
                    borderRadius: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,

                    elevation: 25,
                  }
                : {}
            }>
            <Image
              source={image1}
              style={{
                borderRadius: 5,
                shadowOffset: {width: 10, height: 20},
                shadowColor: '#000',
                shadowOpacity: 0.5,
              }}
            />
          </View>
        </View>

        <View style={{width: '30%', alignItems: 'center'}}>
          <Text style={[TTComM15, {paddingBottom: 10}]}>{label2}</Text>
          <View
            style={
              isShadow
                ? {
                    borderRadius: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,

                    elevation: 25,
                  }
                : {}
            }>
            <Image
              source={image2}
              style={{
                borderRadius: 5,
                shadowOffset: {width: 10, height: 20},
                shadowColor: '#000',
                shadowOpacity: 0.5,
              }}
            />
          </View>
        </View>

        <View style={{width: '30%', alignItems: 'center'}}>
          <Text style={[TTComM15, {paddingBottom: 10}]}>{label3}</Text>
          <View
            style={
              isShadow
                ? {
                    borderRadius: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation: 25,
                  }
                : {}
            }>
            <Image
              source={image3}
              style={{
                borderRadius: 5,
                shadowOffset: {width: 10, height: 20},
                shadowColor: '#000',
                shadowOpacity: 0.5,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
