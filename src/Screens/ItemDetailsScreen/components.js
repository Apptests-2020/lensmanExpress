import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
 } from "react-native";
import { 
    CommonStyles
 } from "../../SharedComponents/CustomStyles";
import { color } from "react-native-reanimated";

export const QuantityList = (props) => {
    const {count, isSelect, handleProductCount} = props;
    const {
        TTComDB18
    } = CommonStyles;
    return (
        <TouchableOpacity
            onPress = {()=>handleProductCount(count)}
            style={{minHeight : 50, flexDirection : 'row', alignItems : 'center',}}>
                {
                    isSelect?
                        <View style={{width : 5, height : '70%',backgroundColor : '#FFC000', marginRight : 15}}/> 
                    : <View style={{width : 5, marginRight : 15}}/> }
                <Text style={[TTComDB18,{color : '#000', opacity : !isSelect ? 0.2 : 1}]}>{count}</Text>
        </TouchableOpacity>
    )
}