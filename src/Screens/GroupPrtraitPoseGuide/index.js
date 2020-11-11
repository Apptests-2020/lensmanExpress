import React from 'react';
import {View} from 'react-native';

export default class GroupPortraitPoseGuide extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: '', //{"class": "1", "division": "Q", "email": "Qq1@gmail.com", "gender": "male", "name": "Test1", "phone": "11111", "school": "GEMS NEW MILLENNIUM SCHOOL", "schoolId": 20}
      photoTaken: {
        pose1Portrait: '',
        pose2Portrait: '',
        pose3Portrait: '',
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
