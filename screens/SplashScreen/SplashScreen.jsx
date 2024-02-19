import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import TextComponent from '../../components/TextComponent/TextComponent';
const SplashScreenStyles = require('./splashScreenStyle.js');
const topImage = require('../../assets/images/topflowers.png')
const bottomImage = require('../../assets/images/bottomFlowers.png')



export default function SplashScreen() {
    return (
        <View style={SplashScreenStyles.mainContainer}>
            <View style={SplashScreenStyles.innerTop}>
                <Image source={topImage} style={SplashScreenStyles.imageTop} />
            </View>
            <View style={SplashScreenStyles.innerMiddle}>
                <View>

                    <TextComponent text={'Eventor'} customStyling={SplashScreenStyles.appNameText} />
                </View>
            </View>
            <View style={SplashScreenStyles.innerBottom}>
                <Image source={bottomImage} />
            </View>
        </View>
    )
}


