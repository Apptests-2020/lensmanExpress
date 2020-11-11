import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  greyCircleWithBlueIcon,
  greyCircleWithGreyIcon,
  greyCircleWithYellowIcon,
} from '../../SharedComponents/CommonIcons';

import {CommonStyles} from '../../SharedComponents/CustomStyles';

const CustomTracker = (props) => {
  const {TTComM16} = CommonStyles;
  const {stage, label} = props;

  return (
    <View style={{marginVertical: 20}}>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{width: '20%', alignItems: 'center', height: 50}}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={
                stage === 1 ? greyCircleWithYellowIcon : greyCircleWithBlueIcon
              }
              style={{zIndex: 2}}
            />
            <View
              style={{
                backgroundColor: '#F2F2F2',
                height: 2,
                width: '50%',
                position: 'absolute',
                right: 0,
                zIndex: 1,
              }}
            />
          </View>
          <View style={{}}>
            <Text
              style={[
                TTComM16,
                label === 'schoolSection' && {textAlign: 'center'},
              ]}>
              {label === 'schoolSection' ? 'Group Poses' : 'Shipping'}
            </Text>
          </View>
        </View>

        <View style={{width: '60%', alignItems: 'center'}}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View
              style={{
                backgroundColor: '#F2F2F2',
                height: 2,
                width: '100%',
                position: 'absolute',
                zIndex: 1,
              }}
            />
            <Image
              source={
                stage === 1
                  ? greyCircleWithGreyIcon
                  : stage === 2
                  ? greyCircleWithYellowIcon
                  : greyCircleWithBlueIcon
              }
              style={{zIndex: 2}}
            />
          </View>
          <Text style={TTComM16}>
            {label === 'schoolSection' ? 'Portrait Poses' : 'Payment'}
          </Text>
        </View>

        <View style={{width: '20%', alignItems: 'center'}}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View
              style={{
                backgroundColor: '#F2F2F2',
                height: 2,
                width: '50%',
                position: 'absolute',
                left: 0,
                zIndex: 1,
              }}
            />
            <Image
              source={
                stage === 3 ? greyCircleWithYellowIcon : greyCircleWithGreyIcon
              }
              style={{zIndex: 2}}
            />
          </View>
          <>
            {label === 'schoolSection' ? (
              <>
                <Text style={TTComM16}>Upload</Text>
                <Text style={TTComM16}>Complete</Text>
              </>
            ) : (
              <Text style={TTComM16}>Order</Text>
            )}
          </>
        </View>
      </View>
    </View>
  );
};

export default CustomTracker;
