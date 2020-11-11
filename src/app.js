import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import WrapperNavigations from "./Navigations";
import { SplashScreen } from "./Screens";
class App extends Component {
    state ={
        isLoading : true
    }
    // changeTime = () => {        
    //     this.setState({isLoading : false})
    // }
    render() {
        if (this.state.isLoading) {
            setTimeout(()=>{
                this.setState({isLoading : false})
            },3000)
            return (
                <SplashScreen />
            )
        }
        return(            
            <WrapperNavigations {...this.props}>                
            </WrapperNavigations>
        )
    }
}

export default App;