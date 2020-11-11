import {StyleSheet, Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const Styles = StyleSheet.create({
  notificationBubble: {
    backgroundColor: '#FF6C00',
    borderRadius: 50,
    padding: 3,
    position: 'absolute',
    top: 2,
    right: 5,
    color: '#fff',
    fontSize: 12,
    zIndex: 3,
    width: 20,
  },
  activeStyle: {
    backgroundColor: '#FFC000',
    height: 4,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    width: '70%',
    alignSelf: 'center',
  },
  tabNavContainer: {
    backgroundColor: '#323AE4',
    minHeight: 40,
    position: 'absolute',
    bottom: 25,
    width: '90%',
    borderRadius: 27,
    alignSelf: 'center',
  },
  itemListWrapper: {
    width: '45%',
    marginTop: 30,
  },
  itemListImage: {
    // backgroundColor : 'green',
    borderRadius: 27,
    borderColor: '#707070',
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    // paddingHorizontal : 15
    // shadowColor     : "#000",
    // shadowOffset    : {
    //     width: 0.5,
    //     height: 3,
    // },
    // shadowOpacity   : 1,
    // shadowRadius    : 3,
    // elevation       : 1,
  },
  discountBadge: {
    width: 47,
    height: 25,
    backgroundColor: '#FA3838',
    borderRadius: 13,
    position: 'absolute',
    right: 10,
    top: 15,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountBadgeText: {
    color: '#fff',
    fontSize: RFPercentage(16) / 7,
    fontFamily:
      Platform.OS === 'android' ? 'TTCommonsDemiBold' : 'TTCommons-DemiBold',
  },
});

export default Styles;
