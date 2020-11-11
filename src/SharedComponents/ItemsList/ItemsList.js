import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {CommonStyles} from '../../SharedComponents/CustomStyles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Styles from '../../Screens/DashboardScreen/DashboardStyles';
export const ItemList = (props) => {
  const {image, itemName, price, onAction, discount} = props;
  const {TTComDB18, TTComM16} = CommonStyles;

  return (
    <View
      style={{
        width: '45%',
        marginBottom: 40,
      }}>
      <TouchableOpacity
        onPress={() => onAction && onAction()}
        style={{
          backgroundColor: '#F2F2F2',
          borderRadius: 27,
          borderColor: '#707070',
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImagePlaceHolder image={image} />
      </TouchableOpacity>
      <View style={{paddingLeft: 15, marginTop: 15}}>
        <Text style={TTComDB18}>{itemName}</Text>
        {price && <Text style={TTComM16}>{price}</Text>}
      </View>
      {discount !== '0' && (
        <View style={Styles.discountBadge}>
          <Text style={Styles.discountBadgeText}>{discount + '%'}</Text>
        </View>
      )}
    </View>
  );
};

export default ItemList;
const ImagePlaceHolder = ({image}) => {
  const [loading, setLoading] = useState(true);
  return (
    // <ImageBackground
    //   source={
    //     loading
    //       ? require('../../../assests/Common/imagePlaceholder/placeholder.jpg')
    //       : null
    //   }
    //   style={{
    //     width: '90%',
    //     height: 150,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    // {image && (
    <Image
      defaultSource={require('../../../assests/Common/imagePlaceholder/placeholder.jpg')}
      source={image}
      onLoad={() => setLoading(false)}
      style={{
        resizeMode: 'contain',
        width: '70%',
        height: 150,
        backgroundColor: '#f1eff0',
      }}
    />
    // )}
    // </ImageBackground>
  );
};
