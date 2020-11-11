import React, {Component} from 'react';
import {RNCamera} from 'react-native-camera';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

import {
  cameraFlashIcon,
  cameraFlashOffIcon,
  cameraIcon,
  cameraToggleIcon,
  galleryIcon,
} from '../../SharedComponents/CommonIcons';

import AsyncStorage from '@react-native-community/async-storage';

import {DemoOverlay1, DemoOverlay2, DemoOverlay3} from '../../Screens';

const Overlay = require('../../../assests/Test/Group310.png');

class CameraSectionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
      cameraType: 'back',
      flashMode: 'off',
      isDemoShow: true,
      overlayNum: 0,
      sectionType: '',
      isOverlay: true,
      imageItem: '',
    };
  }

  componentDidMount() {
    const {params} = this.props.route;
    if (params && params.fromdata && params.fromdata === 'productSection') {
      // console.log('Camera section DID Mount productSection');
      this.setState({
        sectionType: params.fromdata,
        isDemoShow: false,
        isOverlay: false,
      });
    } else if (
      params &&
      params.fromdata &&
      params.fromdata === 'productSection2'
    ) {
      // console.log('Camera section DID Mount productSection2');
      this.setState({
        sectionType: params.fromdata,
        isDemoShow: false,
        isOverlay: false,
      });
    }

    console.log('Camera section DID Mount NORMAL', this.props.route.params);

    if (params.fromScreen && params.fromScreen === 'GroupPoseGuide') {
      this.setState({
        sectionType: params.fromScreen,
        isDemoShow: params.showDemoTip,
        isOverlay: false,
        imageItem: params.item,
      });
    }

    if (params.fromScreen && params.fromScreen === 'GroupPortraitPoseGuide') {
      this.setState({
        sectionType: params.fromScreen,
        isDemoShow: params.showDemoTip,
        isOverlay: false,
        imageItem: params.item,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const {params} = this.props.route;
    if (prevProps.route.params !== this.props.route.params) {
      console.log('Camera section DID Update Changed', this.props.route.params);
      if (
        this.props.route.params &&
        this.props.route.params.fromdata &&
        this.props.route.params.fromdata === 'productSection2'
      ) {
        // console.log('Camera section DID Mount productSection2');
        this.setState({
          sectionType: this.props.route.params.fromdata,
          isDemoShow: false,
          isOverlay: false,
        });
      }

      if (params.fromScreen && params.fromScreen === 'GroupPoseGuide') {
        this.setState({
          sectionType: params.fromScreen,
          isDemoShow: params.showDemoTip,
          isOverlay: false,
          imageItem: params.item,
        });
      }

      if (params.fromScreen && params.fromScreen === 'GroupPortraitPoseGuide') {
        this.setState({
          sectionType: params.fromScreen,
          isDemoShow: params.showDemoTip,
          isOverlay: false,
          imageItem: params.item,
        });
      }
    }
  }

  handleOverlay = (status) => {
    this.setState({overlayNum: this.state.overlayNum + 1}, () => {
      // console.log("12222",this.state.overlayNum)
      if (this.state.overlayNum === 3) {
        this.setState({isDemoShow: false});
      }
    });
    if (status) this.setState({isDemoShow: false});
  };

  takePicture = async () => {
    let sectionType = this.state.sectionType;
    let {formData} = this.props.route.params;
    const {imageItem} = this.state;

    console.log('sectionType =>', sectionType);

    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
        base64: true,
      };

      this.setState({takingPic: true});
      await this.camera
        .takePictureAsync(options)
        .then((data) => {
          // console.log('Success', JSON.stringify(data));
          this.saveData({uri: data.uri, base64: data.base64});
          this.setState({takingPic: false}, () => {
            console.log('Dataaa', data.uri, sectionType);
            // if (sectionType === '') {
            //   this.props.navigation.navigate('PhotoTakenSectioinScreen', {
            //     data: data.uri,
            //   });
            // } else if (sectionType === 'productSection') {
            //   this.props.navigation.navigate('PhotoTakenSectioinScreen', {
            //     fromScreen: 'productSection',
            //     data: data.uri,
            //   });
            // } else if (sectionType === 'productSection2') {
            //   this.props.navigation.navigate('PhotoTakenSectioinScreen3', {
            //     fromScreen: 'productSection2',
            //     data: data.uri,
            //   });
            // } else
            if (sectionType === 'GroupPoseGuide') {
              this.props.navigation.navigate('GroupPoseGuide', {
                fromScreen: 'GroupPoseGuide',
                data: data.uri,
                formData: formData,
                base64Data: data.base64,
                imageItem: imageItem,
              });
            } else if (sectionType === 'GroupPortraitPoseGuide') {
              this.props.navigation.navigate('GroupPortraitPoseGuide', {
                fromScreen: 'GroupPortraitPoseGuide',
                data: data.uri,
                formData: formData,
                base64Data: data.base64,
                imageItem: imageItem,
              });
            }
          });
        })
        .catch((err) => {
          console.log(
            'Error',
            'Failed to take picture: ' + (err.message || err),
          );
        });
    }
  };

  launchImageLibrary = () => {
    let sectionType = this.state.sectionType;
    let {formData} = this.props.route.params;
    const {imageItem} = this.state;
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response.data);

      // check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
      //   .then((result) => {
      //     console.log('Data Permisiions', result);
      //   })
      //   .catch((err) => {
      //     console.log('Errr', err);
      //   });

      if (sectionType === 'GroupPoseGuide') {
        this.props.navigation.navigate('GroupPoseGuide', {
          fromScreen: 'GroupPoseGuide',
          data: response.uri,
          formData: formData,
          base64Data: response.data,
          imageItem: imageItem,
        });
      } else if (sectionType === 'GroupPortraitPoseGuide') {
        this.props.navigation.navigate('GroupPortraitPoseGuide', {
          fromScreen: 'GroupPortraitPoseGuide',
          data: response.uri,
          formData: formData,
          base64Data: response.data,
          imageItem: imageItem,
        });
      }

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        // this.setState({
        //   filePath: response,
        //   fileData: response.data,
        //   fileUri: response.uri,
        // });
      }
    });
  };

  saveData = async (data) => {
    let sectionType = this.state.sectionType;
    try {
      // console.log("Dat before set",JSON.stringify(data));
      let tmp = JSON.stringify(data);
      if (sectionType === '') {
        await AsyncStorage.setItem('schoolPhoto', tmp);
      } else if (sectionType === 'productSection') {
        await AsyncStorage.setItem('productSection1', tmp);
      } else if (sectionType === 'productSection2') {
        await AsyncStorage.setItem('productSection2', tmp);
      }
      console.log('School Photo Saved Successfully');
    } catch (err) {
      console.log('School Photo Saved', err);
    }
  };

  cameraSwitch = () => {
    if (this.state.cameraType === 'back') {
      this.setState({cameraType: 'front'});
    } else {
      this.setState({cameraType: 'back'});
    }
  };

  toggleFlashMode = () => {
    if (this.state.flashMode === 'on') {
      this.setState({flashMode: 'off'});
    } else {
      this.setState({flashMode: 'on'});
    }
  };

  render() {
    const {
      cameraType,
      flashMode,
      isDemoShow,
      overlayNum,
      sectionType,
      isOverlay,
    } = this.state;
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <View style={{flex: 10}}>
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            captureAudio={false}
            style={{flex: 1, zIndex: 2}}
            type={
              cameraType === 'back'
                ? RNCamera.Constants.Type.back
                : RNCamera.Constants.Type.front
            }
            flashMode={
              flashMode === 'on'
                ? RNCamera.Constants.FlashMode.on
                : RNCamera.Constants.FlashMode.off
            }
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
            {/* <View
              style={{
                alignItems: 'center',
                padding: 2,
                position: 'relative',
                zIndex: 3,
                top: 10,
                backgroundColor: 'red',
              }}></View> */}

            {
              // isOverlay&&
              // <View style={{flex : 4, justifyContent : 'center', alignItems : 'center'}}>
              //     <Image source={Overlay} style={{position : 'absolute', width : 250, height : 250, backgroundColor : 'transparent', zIndex : 0}}/>
              // </View>
            }
          </RNCamera>
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            onPress={this.launchImageLibrary}>
            <Image source={galleryIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            // activeOpacity	=	{0.5}
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            onPress={this.takePicture}>
            <Image source={cameraIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.toggleFlashMode()} style={{}}>
            <Image
              source={flashMode === 'on' ? cameraFlashIcon : cameraFlashOffIcon}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity
            activeOpacity={0.5}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              position: 'absolute',
              right: 10,
              top: 20,
            }}
            onPress={() => this.cameraSwitch()}>
            <Image source={cameraToggleIcon} />
          </TouchableOpacity> */}
        </View>

        {isDemoShow && (
          <Modal animationType="slide" transparent={true} visible={isDemoShow}>
            <View style={{flex: 1}}>
              {overlayNum < 3 && (
                <CustomOverlayDemo
                  {...this.props}
                  overlayNum={overlayNum}
                  handleOverlay={this.handleOverlay}
                  handleCloseOverlay={() => this.setState({isDemoShow: false})}
                />
              )}
            </View>
          </Modal>
        )}
      </View>
    );
  }
}

export default CameraSectionScreen;

const CustomOverlayDemo = (props) => {
  const {overlayNum, handleOverlay, handleCloseOverlay} = props;

  if (overlayNum === 0) {
    return <DemoOverlay1 handleOverlay={handleOverlay} {...props} />;
  } else if (overlayNum === 1) {
    return <DemoOverlay2 handleOverlay={handleOverlay} {...props} />;
  } else if (overlayNum === 2) {
    return <DemoOverlay3 handleOverlay={handleCloseOverlay} {...props} />;
  } else {
    return;
  }

  // overlayNum === 0?
  //     : <Text style={{color :'red'}}>Pling</Text>
  // : overlayNum === 1?
  //     <DemoOverlay2 handleOverlay = {this.handleOverlay} {...this.props} />
  //     : overlayNum === 2&&
  //         <DemoOverlay3 handleOverlay=  {this.setState({isDemoShow : false})} {...this.props} />
  // :<DemoOverlay3 handleOverlay = {this.handleOverlay} {...this.props} handleCloseOverlay = {this.setState({isDemoShow : false})} />
};
