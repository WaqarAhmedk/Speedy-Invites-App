'use strict';
const { StyleSheet } = require("react-native");
const { AppColors } = require("../../constants/constants");

const AuthScreenStyles = StyleSheet.create({
    mainContainer: {
        flex:1,
    }, 
    topView:{
        flex:2,
    },
    middleView:{
        paddingHorizontal:10,
        flex:8,
        justifyContent:'center',    
    
    },
    bottomView:{
        flex:1,
        justifyContent:'center',alignItems:'center'
    },
    loginText:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:20
    }
})

module.exports = AuthScreenStyles;