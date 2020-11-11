import React, {Component} from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

// Custom Screens
import {
  AuthScreen,
  Demo1,
  Demo2,
  Demo3,
  SplashScreen,
  LoginScreen,
  RegisterScreen,
  DashboardScreen,
  ShoppingListScreen,
  ItemDetailsScreen,
  PhotoSectionScreen,
  PhotoTakenSectioinScreen,
  PhotoTakenSectioinScreen2,
  PhotoTakenSectioinScreen3,
  CartScreen,
  ProfileScreen,
  DemoOverlay1,
  DemoOverlay2,
  DemoOverlay3,
  SchoolSubmitPhotoScreen,
  CameraSectionScreen,
  CustomGalleryScreen,
  CheckoutNewUserScreen,
  CheckoutDetailsForm,
  CheckoutPaymentScreen,
  CheckoutPaymentScreen1,
  CheckoutHistoryScreen,
  OrderHistory,
  SchoolIntructionScreen,
  SchoolGuideScreen,
  SchoolPhotoInitialScreen,
  SchoolAfterTakePhotScreen1,
  SchoolAfterTakePhotScreen2,
  SchoolAfterTakePhotScreen3,
  SchoolAfterTakePhotScreen4,
  SchoolAfterTakePhotScreen5,
  SchoolAfterTakePhotScreen6,
  ForgotPasswordScreen,
  GroupPoseGuide,
  GroupPortraitPoseGuide,
  SchoolPhotoSectionConfirmScreen,
  ContactUsScreen,
  AccountSettingScreen,
} from '../Screens';
import {contactUsIcon} from '../SharedComponents/CommonIcons';

const Stack = createStackNavigator();

const WrapperNavigations = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName="DashboardScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="Demo1"
          component={Demo1}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="Demo2"
          component={Demo2}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="Demo3"
          component={Demo3}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="ShoppingListScreen"
          component={ShoppingListScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="ItemDetailsScreen"
          component={ItemDetailsScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="PhotoSectionScreen"
          component={PhotoSectionScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="PhotoTakenSectioinScreen"
          component={PhotoTakenSectioinScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="PhotoTakenSectioinScreen2"
          component={PhotoTakenSectioinScreen2}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="PhotoTakenSectioinScreen3"
          component={PhotoTakenSectioinScreen3}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="DemoOverlay1"
          component={DemoOverlay1}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="DemoOverlay2"
          component={DemoOverlay2}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="DemoOverlay3"
          component={DemoOverlay3}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolSubmitPhotoScreen"
          component={SchoolSubmitPhotoScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="CameraSectionScreen"
          component={CameraSectionScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="CustomGalleryScreen"
          component={CustomGalleryScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="CheckoutNewUserScreen"
          component={CheckoutNewUserScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="CheckoutDetailsForm"
          component={CheckoutDetailsForm}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="CheckoutPaymentScreen"
          component={CheckoutPaymentScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        {/* <Stack.Screen
          name="CheckoutPaymentScreen1"
          component={CheckoutPaymentScreen1}
          options={{headerShown: false, animationEnabled: false}}
        /> */}
        <Stack.Screen
          name="CheckoutHistoryScreen"
          component={CheckoutHistoryScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="OrderHistoryScreen"
          component={OrderHistory}
          options={{headerShown: false, animationEnabled: false}}
        />

        <Stack.Screen
          name="SchoolIntructionScreen"
          component={SchoolIntructionScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolGuideScreen"
          component={SchoolGuideScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolPhotoInitialScreen"
          component={SchoolPhotoInitialScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolAfterTakePhotScreen1"
          component={SchoolAfterTakePhotScreen1}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolAfterTakePhotScreen2"
          component={SchoolAfterTakePhotScreen2}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolAfterTakePhotScreen3"
          component={SchoolAfterTakePhotScreen3}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolAfterTakePhotScreen4"
          component={SchoolAfterTakePhotScreen4}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolAfterTakePhotScreen5"
          component={SchoolAfterTakePhotScreen5}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolAfterTakePhotScreen6"
          component={SchoolAfterTakePhotScreen6}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="GroupPoseGuide"
          component={GroupPoseGuide}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="GroupPortraitPoseGuide"
          component={GroupPortraitPoseGuide}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="SchoolPhotoSectionConfirmScreen"
          component={SchoolPhotoSectionConfirmScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="Contact Us"
          component={ContactUsScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="AccountSettingScreen"
          component={AccountSettingScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WrapperNavigations;
