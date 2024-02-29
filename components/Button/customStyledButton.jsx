import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import ButtonStyles from './customStyledButtonStyle';

export default function CustomStyledButton({ text ,click,textColor ,customStyling ,customTextStyling}) {
  return (
    <TouchableOpacity style={[ButtonStyles.mainContainer,customStyling]} activeOpacity={0.5} onPress={click}>
      <Text style={[ButtonStyles.text,textColor,customTextStyling]} >{text}</Text>
    </TouchableOpacity>
  );
}
