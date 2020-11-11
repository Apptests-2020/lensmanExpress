import React from "react";
import { ActivityIndicator } from "react-native";
import { View } from "native-base";

const Loader = () => {
    return (
        <View style={{position : 'absolute', top : '48%', left : '45%',}}>
            <ActivityIndicator  size={'large'} color = "#323AE4" />
        </View>
    )
}

export default Loader;