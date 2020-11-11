import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {
  homeIcon,
  cartIcon,
  profileIcon,
  shopingIcon,
  closeIconBlack,
  blueTickIcon,
} from '../../SharedComponents/CommonIcons';

import {CommonStyles} from '../../SharedComponents/CustomStyles';
import {CustomButton} from '../../SharedComponents';
import Styles from './DashboardStyles';
import {Demo1, Demo2, Demo3, AuthScreen} from '../../Screens';

export const TabNavButton = (props) => {
  const {active, cartNotification} = props;
  const {notificationBubble, activeStyle} = Styles;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View>
        {active === '1' && <View style={activeStyle} />}
        <TouchableOpacity
          // onPress = {()=>alert('pling')}
          style={{padding: 8}}>
          <Image source={homeIcon} />
        </TouchableOpacity>
      </View>
      <View>
        {active === '2' && <View style={activeStyle} />}
        <TouchableOpacity
          onPress={() => props.nav.navigation.navigate('ShoppingListScreen')}
          style={{padding: 8}}>
          <Image source={shopingIcon} />
        </TouchableOpacity>
      </View>

      <View>
        {active === '3' && <View style={activeStyle} />}
        <TouchableOpacity
          onPress={() => props.nav.navigation.navigate('CartScreen')}
          style={{padding: 8}}>
          {cartNotification && cartNotification > 0 && (
            <Text style={[notificationBubble, {textAlign: 'center'}]}>
              {cartNotification}
            </Text>
          )}
          <Image source={cartIcon} />
        </TouchableOpacity>
      </View>

      <View>
        {active === '4' && <View style={activeStyle} />}
        <TouchableOpacity
          onPress={() => props.nav.navigation.navigate('ProfileScreen')}
          style={{padding: 8}}>
          <Image source={profileIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ItemList = (props) => {
  const {TTComDB18, TTComM16} = CommonStyles;
  const {label, price, discount, itemImage, onAction} = props;
  return (
    <TouchableOpacity
      onPress={() => onAction && onAction()}
      style={Styles.itemListWrapper}>
      <View style={[Styles.itemListImage, {alignItems: 'center'}]}>
        {discount !== '0' && (
          <View style={Styles.discountBadge}>
            <Text allowFontScaling={false} style={Styles.discountBadgeText}>
              {discount && discount}
            </Text>
          </View>
        )}
        <Image
          defaultSource={require('../../../assests/Common/imagePlaceholder/placeholder.jpg')}
          source={{uri: itemImage}}
          style={{resizeMode: 'contain', width: '70%', height: 150}}
        />
      </View>

      <View style={{paddingLeft: 15}}>
        <Text style={[TTComDB18, {marginTop: 20}]}>{label}</Text>
        <Text style={[TTComM16, {}]}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ForStudentSection = (props) => {
  const {handleSection, schoolImage} = props;
  const {TTComDB18} = CommonStyles;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00000038',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          height: '75%',
          backgroundColor: '#fff',
          borderRadius: 27,
        }}>
        <TouchableOpacity
          onPress={() => handleSection()}
          style={{
            position: 'relative',
            top: 30,
            left: 30,
            zIndex: 10,
            width: 50,
          }}>
          <Image source={closeIconBlack} />
        </TouchableOpacity>

        <View style={{flex: 1}}>
          <View
            style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[TTComDB18, {marginVertical: 20}]}>
              School Photo Uploaded!
            </Text>
            <View>
              <Image
                source={
                  schoolImage && schoolImage !== ''
                    ? {uri: schoolImage}
                    : require('../../../assests/Test/martin-pechy-veoAiHnM3AI-unsplash.png')
                }
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 500,
                  borderWidth: 1.5,
                  borderColor: '#E9E9E9',
                }}
              />
              <Image
                source={blueTickIcon}
                style={{position: 'absolute', top: 0, right: 15}}
              />
            </View>
          </View>

          <View style={{flex: 6, justifyContent: 'space-around'}}>
            <Text style={[TTComDB18, {textAlign: 'center'}]}>
              Add your photo to these products?
            </Text>
            <PopupItemList />
          </View>

          <View style={{flex: 2}}>
            <CustomButton
              buttonStyles="btn-secondary-black"
              textStyles="txt-secondary"
              text="View more"
              alignCenter
              width="50%"
              onAction={() => handleSection()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export const PopupItemList = () => {
  const {TTComDB18, TTComM16} = CommonStyles;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Image
          source={require('../../../assests/Test/photo_mug_large-5.jpg')}
          style={{width: 123, height: 129, borderRadius: 27}}
        />

        <View style={{paddingLeft: 15}}>
          <Text style={[TTComDB18, {marginTop: 15}]}>Coffee Mug</Text>
          <Text style={[TTComM16, {marginTop: 0}]}>16.75 AED</Text>
        </View>
      </View>
      <View style={{marginLeft: 15}} />
      <View>
        <Image
          source={require('../../../assests/Test/photo_mug_large-5.jpg')}
          style={{width: 123, height: 129, borderRadius: 27}}
        />

        <View style={{paddingLeft: 15}}>
          <Text style={[TTComDB18, {marginTop: 15}]}>Coffee Mug</Text>
          <Text style={[TTComM16, {marginTop: 0}]}>16.75 AED</Text>
        </View>
      </View>
    </View>
  );
};

export const DemoSection = (props) => {
  const {screenNumber, changeScreen, handleCloseModal} = props;
  if (screenNumber === 0) {
    return <Demo1 changeScreen={changeScreen} />;
  } else if (screenNumber === 1) {
    return <Demo2 changeScreen={changeScreen} />;
  } else if (screenNumber === 2) {
    return <Demo3 changeScreen={changeScreen} />;
  } else if (screenNumber === 3) {
    return (
      <AuthScreen
        changeScreen={changeScreen}
        handleCloseModal={handleCloseModal}
        {...props}
      />
    );
  }
};
