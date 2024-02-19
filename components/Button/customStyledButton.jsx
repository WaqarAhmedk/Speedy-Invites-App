import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import ButtonStyles from './customStyledButton';

export default function CustomStyledButton({text}) {
  return (
    <TouchableOpacity style={ButtonStyles.mainContainer} activeOpacity={0.5} onPress={()=>{Alert.alert('Button Pressed')}}>
        <Text style={ButtonStyles.text} >{text}</Text>
    </TouchableOpacity>
  );
}
