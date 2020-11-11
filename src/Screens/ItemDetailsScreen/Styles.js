import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    imageListWrapper : {
        width               : '100%',
        height              : 70,
        marginVertical      : 20,
        paddingHorizontal   : 20,
        flexDirection       : 'row'
    },
    imageStyleinList : {
        width           : 70, 
        height          : 70, 
        borderRadius    : 15, 
        marginHorizontal: 8 
    },
    imageListAdd : {
        width           : 70,
        height          : 70, 
        borderRadius    : 15, 
        zIndex          : 2, 
        backgroundColor : '#000',
        marginHorizontal: 8 
    },
    imageListAddButton : {
        position        : 'absolute', 
        zIndex          : 2, 
        backgroundColor : '#000000e6',
        width           : 70, 
        height          : 70,
        justifyContent  : 'center', 
        alignItems      : 'center',
        borderRadius    : 15 
    }
})

export default Styles;