import React from "react";
import { 
    View,
} from "react-native";

export const InputContainer = (props) => {
    const {alignCenter} = props;
    return (
        <View 
            style={ 
                alignCenter? 
                    {marginVertical : 10, alignItems : 'center',} 
                        : {marginVertical : 10,}}>
            {props.children}
        </View>
    )
}