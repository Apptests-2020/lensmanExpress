import React, { Component } from "react";
import { glassIcon,  lightIcon, Overlay3Icon, personIcon  } from "../../SharedComponents/CommonIcons";
import DemoOverlay from "./components";

export class DemoOverlay1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <DemoOverlay
                text        = "Use a white cloth or a white wall"
                text2       = "as the background for all pictures"
                dotName     = 'demo1'
                image       = {personIcon}
                buttonName  = "Next"
                onAction    = {()=>{
                    // this.props.handleOverlay()
                    // this.props.navigation.navigate('DemoOverlay2')
                }} 
                handleOverlay = {this.props.handleOverlay}
                />
                )
            }
}

export class DemoOverlay2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <DemoOverlay 
                text        = "Make sure there’s good lighting"
                dotName     = 'demo2'
                image       = {lightIcon}
                buttonName  = "Next"
                onAction    = {()=>{
                    // this.props.handleOverlay()
                    // this.props.navigation.navigate('DemoOverlay3')
                }}
                handleOverlay = {this.props.handleOverlay}
            />
        )
    }
}
                
export class DemoOverlay3  extends Component {   
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <DemoOverlay
                text        = "And put on your best smile!"
                dotName     = 'demo3'
                image       = {Overlay3Icon}
                buttonName  = "Let’s go"
                onAction    = {()=>{
                    this.props.handleOverlay()
                    this.props.navigation.navigate('CameraSectionScreen',{
                    data : 'from Students'
                })
            }}
            handleOverlay = {this.props.handleOverlay}
            />
        )
    }
}
