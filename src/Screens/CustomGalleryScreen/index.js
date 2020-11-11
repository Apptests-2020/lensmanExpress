import React from 'react';
import {View} from 'react-native';

export default class CustomGalleryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      photsList: [],
      isCustomToaster: '',
      id: '',
    };
  }
  render() {
    return <View></View>;
  }
}
