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
    signatureIconBlack
} from "../../SharedComponents/CommonIcons";

import {
    CommonStyles
} from "../../SharedComponents/CustomStyles";

class PhotoTakenSectioinScreen extends Component {
    state = {
        screen : 0,
        sectionId : '',
        sectionType : ''
    }

    componentDidMount () {
        const {params} = this.props.route
        if ( params&&params.data ) {
            console.log("In Section 10", this.props.route.params.data);
            this.setState({sectionId  : params.data });
        }

        if ( params&&params.data&&  params.fromScreen ) {
            console.log("In Section 10", this.props.route.params.data);
            this.setState({sectionId  : params.data, sectionType : params.fromScreen });
        }
    }

    handleNavigate = () => {
        if ( this.state.sectionId !== ''&& this.state.sectionType === '') {
            this.props.navigation.navigate('SchoolSubmitPhotoScreen');
        } else {
            this.props.navigation.navigate('PhotoTakenSectioinScreen2');
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
            sectionId,
            sectionType
        } = this.state;

        return (
            <SafeAreaView style={{flex : 1, backgroundColor : '#fff',}}>
                
                <StatusBar backgroundColor = "#fff" barStyle = "dark-content" />

                <View style={{ zIndex : 4,}}>
                    <CustomHeaderPrim
                        leftIcon        = {LeftArrowIcon}
                        leftIconAction  = {()=>this.props.navigation.goBack()}
                        centerLabel     = "Add photo"                        
                    />
                </View>
                
                <View style={{flex : 8, }}>
                
                    <ScrollView showsVerticalScrollIndicator = {false} >
                    <View style ={{marginTop : 30}} />
                    
                        <View style={{flex : 11, paddingHorizontal : 20,}}>                            
                            <Text style={[TTComDB16,{paddingLeft : 25}]}>{sectionId !== ''&& sectionType === ''? "School Photo" : "Image 1 of 3"}</Text>

                            <View style={{justifyContent :'center', alignItems : 'center', marginVertical : 20, marginBottom : 40 }}>
                                <View 
                                    style={{
                                        borderRadius    : 25,
                                        alignItems      : 'center',
                                        width           : Dimensions.get('screen').width*0.85, 
                                        height          : Dimensions.get('screen').height*0.4, borderRadius : 25}}>
                                    
                                    <Image 
                                        source={sectionId !== '' ?
                                            {uri : sectionId }
                                            : require('../../../assests/Test/martin-pechy-veoAiHnM3AI-unsplash.png') } 
                                        style={{
                                            // width : 302,
                                            // height : 353,
                                            width : Dimensions.get('screen').width*0.8, 
                                            height : Dimensions.get('screen').width*0.8,//Dimensions.get('screen').height*0.4, 
                                            borderRadius : 25}}
                                    />
                                </View>
                            </View>                            

                            {sectionId === ''&&
                            <View style={{justifyContent : 'center', alignItems : 'center'}}>
                                <DemoDots name = "demo1" dark />
                            </View>}

                            <View style={{flexDirection : 'row', justifyContent : 'space-around',alignItems : 'center', marginVertical : 20}}>
                                
                                <CustomButton 
                                    buttonStyles    = "btn-primary"
                                    textStyles      = "txt-primary"
                                    text            = {sectionId !== ''&&sectionType === ''? "Looks good" : "Add next"}
                                    width           = "45%"
                                    onAction        = {()=>this.handleNavigate()}
                                />

                                <CustomButton 
                                    buttonStyles    = "btn-secondary-black"
                                    textStyles      = "txt-secondary"
                                    text            = {sectionId !== ''? "Take again" : "Take again"}                                    
                                    width           = "45%"
                                    onAction        = {()=>this.props.navigation.navigate('CameraSectionScreen') }
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

export default PhotoTakenSectioinScreen;