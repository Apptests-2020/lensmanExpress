import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const logoTxtIcon = require('../../../assests/Common/logo-txt/Group735.png');
const logoIcon = require('../../../assests/Common/logo-lg/icon[-12.png');
const signatureIcon = require('../../../assests/Common/signature/LMOK-14.png');
const logoXlIcon = require('../../../assests/Common/logo-xl/icon[2464].png');
const logo = require('../../../assests/Logo/lensman.png');
const SplashScreen = () => {
  return (
    <LinearGradient
      colors={['#353ee5', '#6d74fc']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar hidden={true} />

      <Image
        source={logo}
        style={{width: '62%', height: '62%'}}
        resizeMode="contain"
      />
    </LinearGradient>
  );
  // return (
  //     <View style={{flex : 1, backgroundColor : '#323AE4', }}>
  //         <StatusBar backgroundColor="#fff" barStyle= 'dark-content' />
  //         <View style={{flex : 11, justifyContent : 'center', alignItems : 'center'}}>
  //             <Image source = {logoTxtIcon} />
  //             <View style={{paddingVertical : 5}}/>
  //             <Image source = {logoXlIcon} />
  //         </View>
  //         <View style={{flex : 1,}}>
  //             <View style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'flex-end',}}>
  //                 <Text style={{color : '#fff', fontSize : 16}}>Powered by</Text>
  //                 <Image source={signatureIcon}/>
  //             </View>
  //         </View>
  //     </View>
  // )
};

export default SplashScreen;
