import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {CommonStyles} from '..';

const closeIcon = require('../../../assests/Common/close-white/Group758.png');
const headerImage = require('../../../assests/Common/headerImage/Artboard_110x-8.png');
const logoSmall = require('../../../assests/Common/logo-sm/icon[-18.png');
const radioButton = require('../../../assests/Common/circle-radio-empty/Ellipse269.png');
const SchoolBg = require('../../../assests/DashboardScreen/school-photos-section/50f81c83689918204c83aebc0acc0ffa.png');
const signature = require('../../../assests/Common/signature/LMOK-14.png');
const homeIcon = require('../../../assests/DashboardScreen/nav-home/browser.png');
const cartIcon = require('../../../assests/DashboardScreen/nav-cart/buy.png');
const profileIcon = require('../../../assests/DashboardScreen/nav-profile/Image-7.png');
const shopingIcon = require('../../../assests/DashboardScreen/nav-shopping/shopping-bag.png');
const filterIcon = require('../../../assests/Common/filterIcon/Image-25.png');
const rightArrowIcon = require('../../../assests/Common/rightArrow/Image-34.png');
const upDownArrowIcon = require('../../../assests/Common/upAndDownArrows/Group766.png');
const uploadIcon = require('../../../assests/Common/uploadIcon/Image84.png');
const LeftArrowIcon = require('../../../assests/Common/LeftArrow/arrow-white.png');
const signatureIconBlack = require('../../../assests/Common/signatureIconBlack/LMOK.png');
const photoAddIcon = require('../../../assests/NewPhotoAdd/Group770.png');
const dotYellowIcon = require('../../../assests/DemoScreen/demoScreenDots/Rectangle1576.png');
const dotWhiteIcon = require('../../../assests/DemoScreen/demoScreenDots/Rectangle1577.png');
const dotGreyIcon = require('../../../assests/DemoScreen/demoScreenDots/Rectangle1667.png');
const uploadIconGrey = require('../../../assests/Common/uploadIconGrey/UploadImageComponent.png');
const closeIconBlack = require('../../../assests/Common/closeIcon-lg/Group787.png');
const ordersIcon = require('../../../assests/ProfileScreen/Orders/taxi-454.png');
const pictresIcon = require('../../../assests/ProfileScreen/Pictures/Group823.png');
const settingsIcon = require('../../../assests/ProfileScreen/accountSetting/taxi-534.png');
const contactUsIcon = require('../../../assests/ProfileScreen/contactUs/taxi-454.png');
const background = require('../../../assests/ProfileScreen/background/photo_mug_large5.png');
const glassIcon = require('../../../assests/SchoolSection/demoOverlay/glass/Image87.png');
const lightIcon = require('../../../assests/SchoolSection/demoOverlay/light/Image88.png');
const Overlay3Icon = require('../../../assests/SchoolSection/demoOverlay/overlay3/Image88.png');
const radioButtonFill = require('../../../assests/Common/circle-radio-fill-yellow/Ellipse269.png');
const cameraIcon = require('../../../assests/Common/cameraClickButton/Group309.png');
const cameraToggleIcon = require('../../../assests/Common/cameraToggleButton/Image100.png');
const cameraFlashIcon = require('../../../assests/Common/cameraFlasshButton/Image102.png');
const cameraFlashOffIcon = require('../../../assests/Common/cameraFlashButtonOff/Image103.png');
const blueTickIcon = require('../../../assests/DashboardScreen/success-tic-blue/verifed.png');
const plusBlackIcon = require('../../../assests/Common/plus-black/Group747.png');
const smileBluekIcon = require('../../../assests/Common/smileBlueIcon/icon.png');
const personIcon = require('../../../assests/Common/personWithOvelshapIcon/Group856.png');
const googleWhiteIcon = require('../../../assests/Common/googleWhiteIcon/Iconionic-logo-google.png');
const fbWhiteIcon = require('../../../assests/Common/facebookWhiteIcon/Iconawesome-facebook-f.png');
const greyCircleWithBlueIcon = require('../../../assests/Common/greyCircleWithBlue/Group856.png');
const greyCircleWithYellowIcon = require('../../../assests/Common/greyCircleWithYellow/Group857.png');
const greyCircleWithGreyIcon = require('../../../assests/Common/greyCircleWithGrey/Group858.png');
const appleBlackIcon = require('../../../assests/Common/appleBlackIcon/Image109.png');
const yellowBoxIcon = require('../../../assests/CheckoutHostoryScreen/boxIcon/taxi-454.png');
const circleWithQuestMarkIcon = require('../../../assests/CheckoutHostoryScreen/circleWithQuestinMark/Group855.png');

const radioButtonEmptyIcon = require('../../../assests/SchoolSection/radioButtons/emptyRadioButton/Ellipse283.png');
const radioButtonFillYellowIcon = require('../../../assests/SchoolSection/radioButtons/yellowFilledRadioButton/Group839.png');
const newSignatureIcon = require('../../../assests/SchoolSection/signature/LMLogoStrip.png');

const boyPose1Icon = require('../../../assests/SchoolSection/boys/pose1/MaskGroup6.png');
const boyPose2Icon = require('../../../assests/SchoolSection/boys/pose2/MaskGroup8.png');
const boyPose3Icon = require('../../../assests/SchoolSection/boys/pose3/MaskGroup10.png');

const boyPortraitePose1Icon = require('../../../assests/SchoolSection/boys/portraitPose1/MaskGroup12.png');
const boyPortraitePose2Icon = require('../../../assests/SchoolSection/boys/portraitPose2/MaskGroup14.png');
const boyPortraitePose3Icon = require('../../../assests/SchoolSection/boys/portraitPose3/MaskGroup15.png');

const girlPose1Icon = require('../../../assests/SchoolSection/girl/pose1/MaskGroup22.png');
const girlPose2Icon = require('../../../assests/SchoolSection/girl/pose2/MaskGroup23.png');
const girlPose3Icon = require('../../../assests/SchoolSection/girl/pose3/MaskGroup24.png');

const girlPortraitePose1Icon = require('../../../assests/SchoolSection/girl/portraitPose1/MaskGroup25.png');
const girlPortraitePose2Icon = require('../../../assests/SchoolSection/girl/portraitPose2/MaskGroup26.png');
const girlPortraitePose3Icon = require('../../../assests/SchoolSection/girl/portraitPose3/MaskGroup27.png');
//  ----------------------------------------------------------------------------------------------------------------------------

// const boyPose1ForPhotoIcon = require('../../../assests/SchoolSection/boys/pose1/MaskGroup6.png');
const boyPose2ForCameraIcon = require('../../../assests/SchoolSection/forCameraPose/boy/pose2/IMG_4686.png');
const boyPose3ForCameraIcon = require('../../../assests/SchoolSection/forCameraPose/boy/pose3/IMG_4689.png');

const boyPortraitePoseForCamera1Icon = require('../../../assests/SchoolSection/forCameraPose/boy/portraitPose1/IMG_4641.png');
const boyPortraitePoseForCamera2Icon = require('../../../assests/SchoolSection/forCameraPose/boy/portraitPose2/IMG_4661.png');
const boyPortraitePoseForCamera3Icon = require('../../../assests/SchoolSection/forCameraPose/boy/portraitPose3/IMG_4670.png');

// const girlPose1Icon = require('../../../assests/SchoolSection/girl/pose2/MaskGroup23.png');
const girlPose2ForCameraIcon = require('../../../assests/SchoolSection/forCameraPose/girl/pose2/IMG_4577.png');
const girlPose3ForCameraIcon = require('../../../assests/SchoolSection/forCameraPose/girl/pose3/IMG_4590.png');

const girlPortraitePoseForCamera1Icon = require('../../../assests/SchoolSection/forCameraPose/girl/portraitPose1/IMG_4639.png');
const girlPortraitePoseForCamera2Icon = require('../../../assests/SchoolSection/forCameraPose/girl/portraitPose2/IMG_4598.png');
const girlPortraitePoseForCamera3Icon = require('../../../assests/SchoolSection/forCameraPose/girl/portraitPose3/IMG_4571.png');

const verifedWithBlueFillIcon = require('../../../assests/Common/verifiedWithBlueFill/verifed.png');

//  Group pose
const boyGroupPose1Icon = require('../../../assests/SchoolSection/groupPose/boy/pose1/IMG_4667.png');
const boyGroupPose2Icon = require('../../../assests/SchoolSection/groupPose/boy/pose2/IMG_4686.png');
const boyGroupPose3Icon = require('../../../assests/SchoolSection/groupPose/boy/pose3/IMG_4689.png');

const boyGroupPortraitPose1Icon = require('../../../assests/SchoolSection/groupPortraitPose/boy/pose1/IMG_4686.png');
const boyGroupPortraitPose2Icon = require('../../../assests/SchoolSection/groupPortraitPose/boy/pose2/IMG_4661.png');
const boyGroupPortraitPose3Icon = require('../../../assests/SchoolSection/groupPortraitPose/boy/pose3/IMG_4670.png');

//  Group pose Girls
const girlGroupPose1Icon = require('../../../assests/SchoolSection/groupPose/girl/pose1/IMG_4577.png');
const girlGroupPose2Icon = require('../../../assests/SchoolSection/groupPose/girl/pose2/IMG_4636.png');
const girlGroupPose3Icon = require('../../../assests/SchoolSection/groupPose/girl/pose3/IMG_4590.png');

const girlGroupPortraitPose1Icon = require('../../../assests/SchoolSection/groupPortraitPose/girl/pose1/IMG_4639.png');
const girlGroupPortraitPose2Icon = require('../../../assests/SchoolSection/groupPortraitPose/girl/pose2/IMG_4598.png');
const girlGroupPortraitPose3Icon = require('../../../assests/SchoolSection/groupPortraitPose/girl/pose3/IMG_4571.png');

const groupPoseBgDashedIcon = require('../../../assests/SchoolSection/poseTextBg/Rectangle1773.png');
const galleryIcon = require('../../../assests/SchoolSection/cameraGallery/gallery.png');

export {
  closeIcon,
  headerImage,
  logoSmall,
  radioButton,
  SchoolBg,
  signature,
  homeIcon,
  cartIcon,
  profileIcon,
  shopingIcon,
  filterIcon,
  rightArrowIcon,
  upDownArrowIcon,
  uploadIcon,
  LeftArrowIcon,
  signatureIconBlack,
  photoAddIcon,
  dotYellowIcon,
  dotWhiteIcon,
  dotGreyIcon,
  uploadIconGrey,
  closeIconBlack,
  ordersIcon,
  pictresIcon,
  settingsIcon,
  contactUsIcon,
  background,
  glassIcon,
  lightIcon,
  radioButtonFill,
  cameraIcon,
  cameraToggleIcon,
  cameraFlashIcon,
  cameraFlashOffIcon,
  blueTickIcon,
  Overlay3Icon,
  plusBlackIcon,
  smileBluekIcon,
  personIcon,
  googleWhiteIcon,
  fbWhiteIcon,
  greyCircleWithBlueIcon,
  greyCircleWithYellowIcon,
  greyCircleWithGreyIcon,
  appleBlackIcon,
  yellowBoxIcon,
  circleWithQuestMarkIcon,
  radioButtonEmptyIcon,
  radioButtonFillYellowIcon,
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
  boyPose2ForCameraIcon,
  boyPose3ForCameraIcon,
  girlPose2ForCameraIcon,
  girlPose3ForCameraIcon,
  boyPortraitePoseForCamera1Icon,
  girlPortraitePoseForCamera1Icon,
  boyPortraitePoseForCamera2Icon,
  girlPortraitePoseForCamera2Icon,
  boyPortraitePoseForCamera3Icon,
  girlPortraitePoseForCamera3Icon,
  boyGroupPose1Icon,
  boyGroupPose2Icon,
  boyGroupPose3Icon,
  boyGroupPortraitPose1Icon,
  boyGroupPortraitPose2Icon,
  boyGroupPortraitPose3Icon,
  girlGroupPose1Icon,
  girlGroupPose2Icon,
  girlGroupPose3Icon,
  girlGroupPortraitPose1Icon,
  girlGroupPortraitPose2Icon,
  girlGroupPortraitPose3Icon,
  groupPoseBgDashedIcon,
  galleryIcon,
};
