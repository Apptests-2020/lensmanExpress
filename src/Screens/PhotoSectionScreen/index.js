import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,    
    ScrollView,
    StatusBar,
    Image    
} from "react-native";

import { 
    CustomHeaderPrim, 
    CustomButton,
    SignatureContainer
} from "../../SharedComponents";

import { LeftArrowIcon, smileBluekIcon } from "../../SharedComponents/CommonIcons";
import { CommonStyles } from "../../SharedComponents/CustomStyles";

class PhotoSectionScreen extends Component {
    state = {       
    }

    render() {        

        const {
            TTComDB28,
            TTComM16,
            TTComDB18
        } = CommonStyles;

        return (
            <SafeAreaView style={{flex : 1, backgroundColor : '#fff',}}>
                
                <StatusBar backgroundColor = "#fff" barStyle = "dark-content" />

                <View style={{flex : 1, zIndex : 4, backgroundColor : 'transparent'}}>
                    <CustomHeaderPrim
                        leftIcon        = {LeftArrowIcon}
                        centerLabel     = "Add photo"
                    />
                </View>
                
                <View style={{flex : 9,   }}>
                
                    <ScrollView showsVerticalScrollIndicator = {false} >
                        <View style={{marginTop : 100}}/>
                        <View style={{flex : 1, paddingHorizontal : 20,}}>
                            
                            <SignatureContainer />

                            <View style={{justifyContent : 'space-around',alignItems : 'center', marginVertical : 20, height : 100}}>
                                
                                <CustomButton 
                                    buttonStyles    = "btn-primary"
                                    textStyles      = "txt-primary"
                                    text            = "Take a photo(s)"
                                    onAction        = {()=>this.props.navigation.navigate('CameraSectionScreen',{fromdata : 'productSection'})}
                                    width           = "100%"
                                    />
                                <View style={{marginVertical : 25}}/>

                                <CustomButton 
                                    buttonStyles    = "btn-secondary-black"
                                    textStyles      = "txt-secondary"
                                    text            = "Upload image(s)"                                    
                                    // onAction        = {}
                                    width           = "100%"
                                />

                            </View>

                            <View style={{marginVertical : 10}}>
                                <Text style={TTComDB28}>Instructions for taking a photo for product.</Text>
                            </View>

                            <View style={{}}>
                                <View style ={{flexDirection : 'row', marginVertical : 10}}>
                                    <Text style={TTComM16}> 1) </Text>                                
                                    <Text style={[TTComM16,{paddingHorizontal : 5, paddingRight : 20,fontFamily : 'TTCommons-Medium'}]}> We recommend using a white wall or a white cloth as the photo background.</Text>                                
                                </View>
                                <View style ={{flexDirection : 'row', marginVertical : 10}}>
                                    <Text style={TTComM16}> 2) </Text>
                                    <Text style={[TTComM16,{paddingHorizontal : 5, paddingRight : 20, fontFamily : 'TTCommons-Medium'}]}> Maintain the same lighting pattern in all pictures — for optimal results, we recommend that the picture be taken in a soft evening daylight without the use of the flash.</Text>                                
                                </View>                                
                            </View>

                            <View style={{paddingLeft : 25,  marginVertical : 10}}>
                                <Text style={[TTComDB18,{color : '#313AE4'}]}>And put on your best smile!</Text>
                            </View>
                            <View style={{justifyContent : 'center', alignItems : 'center', marginVertical : 30, paddingBottom : 30 }}>
                                <Image source={smileBluekIcon} />
                            </View>
                        </View>


                    </ScrollView>

                </View>                            
                      
            </SafeAreaView>            
        )
    }
}

export default PhotoSectionScreen;