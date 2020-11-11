import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,    
    ScrollView,
    StatusBar,
    Image,    
    Dimensions
} from "react-native";

import { 
    CustomHeaderPrim, 
    CustomButton,
    SignatureContainer,
    DemoDots
} from "../../SharedComponents";

import { 
    LeftArrowIcon,
    photoAddIcon    
} from "../../SharedComponents/CommonIcons";

import {
    CommonStyles
} from "../../SharedComponents/CustomStyles";

class PhotoTakenSectioinScreen2 extends Component {
    state = {
        screen : 0,
        takenImage : '',
        sectionType : ''
    }

    componentDidMount () {
        const { params } = this.props.route;
        console.log("COMPONENT Diid mount in PhotoTakenSectioinScreen2", this.props.route)
        if ( params&& params.data&& params.fromScreen === "productSection2" ) {
            this.setState({sectionType : params.fromScreen,  takenImage : params.data })
        }
    }

    render() {        

        const {
            TTComDB28,
            TTComM16,
            TTComDB16
        } = CommonStyles;

        const {
            screen,
            takenImage,
            sectionType
        } = this.state;

        return (
            <SafeAreaView style={{flex : 1, backgroundColor : '#fff',}}>
                
                <StatusBar backgroundColor = "#fff" barStyle = "dark-content" />

                <View style={{ zIndex : 4, backgroundColor : 'transparent'}}>
                    <CustomHeaderPrim
                        leftIcon        = {LeftArrowIcon}
                        centerLabel     = "Add photo"
                    />
                </View>
                
                <View style={{flex : 8,   }}>
                
                    <ScrollView showsVerticalScrollIndicator = {false} >
                        <View style={{marginTop : 30}} />

                        <View style={{flex : 1, paddingHorizontal : 20 }}>                            
                            <Text style={[TTComDB16,{paddingLeft : 25}]}>Image 2 of 3</Text>

                            <View style={{justifyContent :'center', alignItems : 'center', marginVertical : 20, marginBottom : 40 }}>
                                <TouchableOpacity 
                                    onPress = {()=>this.props.navigation.navigate('CameraSectionScreen',{
                                        fromdata : 'productSection2'
                                    })}
                                    style={{
                                        borderRadius : 25,
                                        alignItems : 'center',
                                        width : Dimensions.get('screen').width*0.85, 
                                        height : Dimensions.get('screen').height*0.4, 
                                        borderRadius : 25}}>
                                    
                                    {
                                        sectionType !== ''&&takenImage !== ''?
                                        <View 
                                            style={{
                                                borderRadius    : 25,
                                                width           : Dimensions.get('screen').width*0.85,
                                                height          : Dimensions.get('screen').height*0.4,
                                                borderRadius    : 25,
                                                backgroundColor : '#F2F2F2',
                                                justifyContent  : 'center', 
                                                alignItems      : 'center',
                                                }}>
                                                    <Image source = {{uri : takenImage}} style={{width : '100%', height : '100%',borderRadius    : 25, }}/>
                                        </View>
                                        :
                                        <View 
                                            style={{
                                                borderRadius    : 25,
                                                width           : Dimensions.get('screen').width*0.85,
                                                height          : Dimensions.get('screen').height*0.4,
                                                borderRadius    : 25,
                                                backgroundColor : '#F2F2F2',
                                                justifyContent  : 'center', 
                                                alignItems      : 'center',
                                                }}>
                                                    <Image source = {photoAddIcon} />
                                        </View>
                                    }

                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent : 'center', alignItems : 'center'}}>
                                <DemoDots name = "demo2" dark />
                            </View>

                            <View style={{flexDirection : 'row', justifyContent : 'space-around',alignItems : 'center', marginVertical : 20}}>
                                
                                <CustomButton 
                                    buttonStyles    = "btn-primary"
                                    textStyles      = "txt-primary"
                                    text            = "Add next"
                                    width           = "45%"
                                    onAction        = {()=>this.props.navigation.navigate('PhotoTakenSectioinScreen3', {data : takenImage})}
                                />

                                <CustomButton 
                                    buttonStyles    = "btn-secondary-black"
                                    textStyles      = "txt-secondary"
                                    text            = "Take again"                                    
                                    width           = "45%"
                                />

                            </View>
                            

                        </View>
                        <View style={{ width : '100%', justifyContent : 'center', paddingBottom : 10}}>
                            <SignatureContainer />
                        </View>

                    </ScrollView>

                </View>                      
                     
                      
            </SafeAreaView>            
        )
    }
}

export default PhotoTakenSectioinScreen2;