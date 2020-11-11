import React from "react";
import {
    View,
    Image,
    StyleSheet
} from "react-native";

import { dotYellowIcon, dotWhiteIcon, dotGreyIcon } from "../CommonIcons";

const DemoDots = (props) => {
    const {name, dark} = props;
    return (
        name === 'demo1' ? 
            <View style={{flexDirection : 'row', alignItems : 'center',}}>
                <Image source={dotYellowIcon}  style ={DemoStyles.imgMargin} />
                <Image source={dark? dotGreyIcon : dotWhiteIcon} style ={DemoStyles.imgMargin} />
                <Image source={dark? dotGreyIcon : dotWhiteIcon} style ={DemoStyles.imgMargin} />
            </View>
            
            : name === 'demo2' ?
                <View style={{flexDirection : 'row', alignItems : 'center',}}>
                    <Image source={dark? dotGreyIcon : dotWhiteIcon} style ={DemoStyles.imgMargin} />
                    <Image source={dotYellowIcon}  style ={DemoStyles.imgMargin} />
                    <Image source={dark? dotGreyIcon : dotWhiteIcon} style ={DemoStyles.imgMargin} />
                </View>
                : name === 'demo3' &&
                    <View style={{flexDirection : 'row', alignItems : 'center',}}>
                        <Image source={dark? dotGreyIcon : dotWhiteIcon} style ={DemoStyles.imgMargin} />
                        <Image source={dark? dotGreyIcon : dotWhiteIcon} style ={DemoStyles.imgMargin} />
                        <Image source={dotYellowIcon}  style ={DemoStyles.imgMargin} />
                    </View>
    )
}

export default DemoDots;


const DemoStyles = StyleSheet.create({
    imgMargin : {
        marginHorizontal : 2
    }
})