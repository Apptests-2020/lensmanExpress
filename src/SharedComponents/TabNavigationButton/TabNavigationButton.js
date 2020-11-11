import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
  homeIcon,
  shopingIcon,
  cartIcon,
  profileIcon,
} from '../../SharedComponents';

import Styles from './TabNavigationButtonStyles';
import {CommonStyles} from '../../SharedComponents/CustomStyles';

class TabNavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
    };
  }

  componentDidMount() {
    let data = this.props.cartList;
    if (data && data.length > 0) {
      this.setState({
        cartCount: data.length,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cartList !== this.props.cartList) {
      this.setState({cartCount: this.props.cartList.length});
    }
  }
  render() {
    const {active, cartNotification, nav} = this.props;
    const {notificationBubble, activeStyle} = Styles;
    const {TTComDB12} = CommonStyles;
    const {cartCount} = this.state;

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
            onPress={() => nav.navigation.navigate('DashboardScreen')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 8,
              // backgroundColor: 'red',
            }}>
            <Image source={homeIcon} style={{marginTop: 5}} />
            <Text style={[TTComDB12, {color: '#fff'}]}>Home</Text>
          </TouchableOpacity>
        </View>

        <View>
          {active === '2' && <View style={activeStyle} />}
          <TouchableOpacity
            onPress={() => nav.navigation.navigate('ShoppingListScreen')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 8,
              // backgroundColor: 'red',
            }}>
            <Image source={shopingIcon} style={{marginTop: 5}} />
            <Text style={[TTComDB12, {color: '#fff'}]}>Shop</Text>
          </TouchableOpacity>
        </View>

        <View>
          {active === '3' && <View style={activeStyle} />}
          <TouchableOpacity
            onPress={() => nav.navigation.navigate('CartScreen')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 8,
              // backgroundColor: 'red',
            }}>
            {cartCount > 0 && (
              <View
                style={[
                  notificationBubble,
                  {justifyContent: 'center', alignItems: 'center'},
                ]}>
                <Text style={{color: 'white'}}>{cartCount}</Text>
              </View>
            )}

            <Image source={cartIcon} style={{marginTop: 5}} />
            <Text style={[TTComDB12, {color: '#fff'}]}>Cart</Text>
          </TouchableOpacity>
        </View>

        <View>
          {active === '4' && <View style={activeStyle} />}
          <TouchableOpacity
            onPress={() => nav.navigation.navigate('ProfileScreen')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',
              paddingHorizontal: 8,
            }}>
            <Image source={profileIcon} style={{marginTop: 5}} />
            <Text style={[TTComDB12, {color: '#fff'}]}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.Layout.cartList,
  };
};

export default connect(mapStateToProps)(TabNavButton);
