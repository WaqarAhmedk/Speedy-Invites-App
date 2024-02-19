'use strict';
const { StyleSheet } = require("react-native");
const { AppColors } = require("../../constants/constants");

const ButtonStyles = StyleSheet.create({
   mainContainer: {
      height:45,
      backgroundColor: AppColors.mainBackgroundColor,
      borderRadius:50,
      justifyContent: 'center',
      alignItems: 'center',
   },
   text:{
      fontSize:18,
      color:AppColors.white,
      fontFamily:'Inter',
   }


})

module.exports = ButtonStyles;