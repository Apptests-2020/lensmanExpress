import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
  Keyboard,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {headerImage, closeIcon, rightArrowIcon} from '../CommonIcons';

import {CommonStyles} from '../CustomStyles';
import CustomStatusBar from '../../SharedComponents/CustomStatusBar/CustomStatusBar';
import axios from 'axios';
import {BaseUrl} from '../../utils/constants';
class CustomHeaderPrimary extends React.Component {
  state = {
    serachData: [],
    isSearchView: false,
    serachText: '',
  };

  componentDidMount() {
    const keyboardShowEvent = () => {
      this.props.onSearchEvent && this.props.onSearchEvent(true);
    };
    const keyboardHideEvent = () => {
      this.props.onSearchEvent && this.props.onSearchEvent(false);
    };
    Keyboard.addListener('keyboardDidShow', () => {
      keyboardShowEvent();
    });
    Keyboard.addListener('keyboardDidHide', () => {
      keyboardHideEvent();
    });
    return () => {
      Keyboard.removeListener('keyboardDidShow', () => keyboardShowEvent());
      Keyboard.removeListener('keyboardDidHide', () => keyboardHideEvent());
    };
  }

  visibleSearch = (text) => {
    let data = this.props.data;
    if (data) {
      let titlesAndIds = data
        .filter((text1) => {
          if (text1.title.includes(text)) {
            return text1;
          }
        })
        .map((item) => {
          return {title: item.title, id: item.id};
        });

      console.log('text', titlesAndIds);
      this.setState({
        serachText: text,
        serachData: titlesAndIds,
        isSearchView: text && text.length ? true : false,
      });
      console.log('Search Titles and Ids', titlesAndIds);
    }
  };

  handleFilterData = (data) => {
    this.setState({isSearchView: false, serachText: ''}, () => {
      this.props.filterData && this.props.filterData(data);
    });
  };

  fetchSearchData = async (text) => {
    this.setState(
      {serachText: text, isSearchView: text == '' ? false : true},
      () => {
        this.props.onSearchEvent &&
          this.props.onSearchEvent(text == '' ? true : false);
      },
    );
    await axios
      .get(BaseUrl + `/search/suggest.json?q=${text}&resources[type]=product`)
      .then((res) => {
        this.setState({
          serachData: res.data.resources.results.products,
        });
        console.warn(
          'search data',
          res.data.resources.results.products.map((item) => {
            return item.title;
          }),
        );
      });
  };
  render() {
    const {
      leftIcon,
      leftIconAction,
      searchBox,
      placeholder,
      searchBoxClearButton,
      centerLabel,
    } = this.props;

    const {serachData, isSearchView, serachText} = this.state;

    const {TTComDB28, TTComDB18} = CommonStyles;

    return (
      <View
        style={{
          height: serachText === '' ? 120 : Dimensions.get('screen').height,
          backgroundColor: 'white',
        }}>
        <ImageBackground
          source={headerImage}
          style={{
            height: 160,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            // zIndex: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {leftIcon && !centerLabel && (
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                  // marginBottom: 5,
                }}
                onPress={() => leftIconAction && leftIconAction()}>
                <Image source={leftIcon} />
              </TouchableOpacity>
            )}
            {searchBox && (
              <TextInput
                value={serachText}
                onChangeText={(text) => this.fetchSearchData(text)}
                placeholder={placeholder}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  borderColor: '#FFFFFF',
                  borderWidth: 1,
                  width: leftIcon ? '85%' : '100%',
                  paddingHorizontal: 20,
                  fontSize: 18,
                  paddingVertical: 3,
                  color: '#000',

                  fontFamily: 'TTCommons-Medium',
                  height: 40,
                }}
                placeholderTextColor={'#656565'}
              />
            )}
            {searchBoxClearButton && (
              <Image
                source={closeIcon}
                style={{tintColor: '#000', position: 'absolute', right: 10}}
              />
            )}

            {centerLabel && leftIcon && (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    padding: 10,
                  }}
                  onPress={() => leftIconAction && leftIconAction()}>
                  <Image source={leftIcon} />
                </TouchableOpacity>
                <Text style={[TTComDB28, {color: '#fff'}]}>{centerLabel}</Text>
              </View>
            )}
          </View>
        </ImageBackground>
        {isSearchView ? (
          <View
            style={{
              // zIndex: 10,
              backgroundColor: '#fff',
              width: '100%',
              // height: '60%',
              paddingHorizontal: 40,
              position: 'absolute',
              top: 161,
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                height: Dimensions.get('screen').height * 0.7,
                backgroundColor: '#fff',
                marginBottom: 40,
              }}>
              {serachData.map((data, index) => {
                return (
                  <View style={{marginVertical: 20}} key={index}>
                    <TouchableOpacity
                      onPress={() => this.handleFilterData(data)}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={TTComDB18}>{data.title}</Text>
                      <Image source={rightArrowIcon} />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        ) : null}
      </View>
    );
  }
}

export default CustomHeaderPrimary;
