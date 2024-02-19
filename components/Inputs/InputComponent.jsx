import React from 'react'
import { Image, TextInput, View } from 'react-native'
import { AppColors } from '../../constants/constants.js';
const inputStyles = require('./inputStyle');
const passwordIcon = require('../../assets/icons/auth/password.png')
const emailIcon = require('../../assets/icons/auth/message.png')

export default function InputComponent({ placeholder, name, isEmail }) {
    return (
        <View style={inputStyles.inputMainContainer}>
            <Image source={isEmail ? emailIcon : passwordIcon} />
            <TextInput style={inputStyles.inputField} placeholder={placeholder} placeholderTextColor={AppColors.mainBackgroundColor} />

        </View>)
}


