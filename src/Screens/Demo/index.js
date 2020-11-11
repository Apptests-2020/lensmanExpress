import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  getPixelSizeForLayoutSize,
  PixelRatio,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Demo from './components/Demo';

const demo1Icon = require('../../../assests/DemoScreen/demo1/taxi-3.png');
const demo2Icon = require('../../../assests/DemoScreen/demo2/taxi-604.png');
const demo3Icon = require('../../../assests/DemoScreen/demo3/taxi-delivery-2.png');

export class Demo1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Demo
        name="demo1"
        label="Staying at home?"
        label2="Take your school photo in seconds!"
        icon={demo1Icon}
        // navigateTo={() => this.props.navigation.navigate('Demo2')}
        {...this.props}
      />
    );
  }
}

export class Demo2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Demo
        name="demo2"
        label="Click, Submit and Lensman does the rest!"
        icon={demo2Icon}
        // navigateTo={() => this.props.navigation.navigate('Demo3')}
        {...this.props}
      />
    );
  }
}

export class Demo3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Demo
        name="demo3"
        label="And even Shop, Rent and Print on the app."
        icon={demo3Icon}
        // noSign
        // navigateTo={() => this.props.navigation.navigate('AuthScreen')}
        {...this.props}
      />
    );
  }
}
