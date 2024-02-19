'use strict';

const { StyleSheet } = require("react-native");
const { AppColors } = require("../../constants/constants");

const SplashScreenStyles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: AppColors.mainBackgroundColor,
    }, 
    innerTop: {
        flex:1,
    },
    innerMiddle: {
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    innerBottom: {
        flex:1,
        justifyContent:'flex-end',alignItems:'flex-end'
    },
    appNameText:{
        fontSize:30,
        fontWeight:'bold',
        color:AppColors.white
    },
    imageTop:{
        resizeMode:'contain'
    }
})

module.exports = SplashScreenStyles;