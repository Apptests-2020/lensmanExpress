import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {
  CustomTracker,
  CustomHeaderPrim,
  CustomButton,
  Loader,
} from '../../SharedComponents';
import {CommonStyles} from '../../SharedComponents/CustomStyles';
import {
  LeftArrowIcon,
  newSignatureIcon,
  boyGroupPose1Icon,
  boyGroupPose2Icon,
  boyGroupPose3Icon,
  girlGroupPose1Icon,
  girlGroupPose2Icon,
  girlGroupPose3Icon,
  groupPoseBgDashedIcon,
} from '../../SharedComponents/CommonIcons';
import {BaseUrlSchool} from '../../utils/constants';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';

export default class GroupPoseGuide extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: '',
      photoTaken: {
        pose1: '',
        pose2: '',
        pose3: '',
      },
      removeItem: {
        status: false,
        item: '',
      },
      isLoading: false,
    };
  }
  render() {
    return <View></View>;
  }
}
