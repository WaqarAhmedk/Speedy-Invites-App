import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { AppColors } from '../../constants/constants'

export default function TextComponent({text,customStyling}) {
  return (
    <Text style={[styles.textComp,customStyling]}>
        {text}
    </Text>
  )
}


const styles=StyleSheet.create({
    textComp:{
        fontFamily:'Inter',
        color:AppColors.mainBackgroundColor,
    }
})