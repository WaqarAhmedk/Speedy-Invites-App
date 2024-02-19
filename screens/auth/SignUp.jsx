import React from 'react'
import { Image, Text, View } from 'react-native'
import AuthScreenStyles from './authStyles'
import TextComponent from '../../components/TextComponent/TextComponent';
import InputComponent from '../../components/Inputs/InputComponent.jsx';
const topImage = require('../../assets/images/auth/topflowers.png');
import CustomStyledButton from '../../components/Button/customStyledButton.jsx';

const fb =require('../../assets/icons/auth/fb.png')
const google =require('../../assets/icons/auth/google.png')


export default function SignUp() {
    return (
        <View style={AuthScreenStyles.mainContainer}>
            <View style={AuthScreenStyles.topView}>
                <Image source={topImage} style={{ width: 270, resizeMode: 'stretch' }} />
            </View>
            <View style={AuthScreenStyles.middleView}>
                <View style={{ alignItems: 'center' }}>
                    <TextComponent text={'Signup'} customStyling={AuthScreenStyles.loginText} />
                </View>
                <View style={{ gap: 20 }}>
                    <InputComponent placeholder={'Email Address'} isEmail={true} />
                    <InputComponent placeholder={'Password'} />
                    <InputComponent placeholder={' Confirm Password'} />
                    <CustomStyledButton text={'Sign Up'} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, gap: 5 }}>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <TextComponent text={'Already a member? '} />
                        <TextComponent text={'Log In '} />
                    </View>
                    <TextComponent text={'OR'} />
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Image source={fb}/>
                        <Image source={google}/>

                    </View>
                </View>

            </View>
            <View style={AuthScreenStyles.bottomView}>
                <TextComponent text={'By signing in, I accept Card Generator'} customStyling={
                    { color: 'black' }
                } />
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <TextComponent text={'Terms of use'} />

                    <TextComponent text={'&'} customStyling={
                        { color: 'black' }
                    } />
                    <TextComponent text={'Privacy Policy'} />

                </View>
            </View>
        </View>
    )
}
