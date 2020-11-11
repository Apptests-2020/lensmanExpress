import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  notificationBubble: {
    backgroundColor: '#FF6C00',
    borderRadius: 50,
    minWidth: 20,
    minHeight: 20,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    right: -10,
    color: '#fff',
    fontSize: 12,
    zIndex: 3,
  },
  activeStyle: {
    backgroundColor: '#FFC000',
    height: 4,
  },
});

export default Styles;
