import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {CommonStyles} from '../CustomStyles';

class CustomToaster extends React.Component {
  constructor() {
    super();
    this.state = {
      isCustomToaster: false,
    };
  }
  componentDidMount() {
    this.setState({isCustomToaster: this.props.isCustomToaster});
  }

  render() {
    const {isCustomToaster} = this.state;
    const {message, position} = this.props;
    const {TTComDB18} = CommonStyles;
    setTimeout(() => {
      this.setState({isCustomToaster: false});
      this.props.onend(false);
    }, 2000);
    if (isCustomToaster) {
      return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={isCustomToaster}>
          <SafeAreaView style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                backgroundColor:
                  position == 'center' ? '#000000d9' : 'transparent',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: position == 'center' ? 'center' : position,
                  alignItems: 'center',
                  padding: position == 'center' ? 0 : 30,
                }}>
                <View
                  style={{
                    backgroundColor: position == 'center' ? '#fff' : '#4A4948',
                    borderRadius: position == 'center' ? 15 : 7,
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={[
                      TTComDB18,
                      {
                        padding: 10,
                        fontSize: position == 'center' ? 15 : 12,
                        color: position == 'center' ? 'black' : '#fff',
                      },
                    ]}>
                    {message}
                  </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      );
    } else {
      return <View></View>;
    }
  }
}

export default CustomToaster;
