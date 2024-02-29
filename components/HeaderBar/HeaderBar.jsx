import React from 'react'
import { Image, View } from 'react-native'
import headerStyleSheet from './headerBarStyle'
import TextComponent from '../TextComponent/TextComponent'
import { bars } from '../../assets/icons/general'
import CustomStyledButton from '../Button/customStyledButton'
import { AppColors } from '../../constants/constants'

export default function HeaderBar() {

  return (
    <View style={headerStyleSheet.main}>
      <View style={headerStyleSheet.innercontainer}>
        <Image source={bars} />
        <View style={headerStyleSheet.innercontainer}>
          <TextComponent text={'Eventor'} customStyling={headerStyleSheet.headerTitle} />
        </View>
      </View>
      <View style={headerStyleSheet.headerButtonWrapper}>
        <CustomStyledButton text={'Invitations'}
          customTextStyling={headerStyleSheet.headerButtonText}
          customStyling={headerStyleSheet.headerButton} />
        <CustomStyledButton text={'Greetings'}
        customTextStyling={[headerStyleSheet.headerButtonText,{color:AppColors.mainBackgroundColor}]}
          customStyling={[headerStyleSheet.headerButton, {backgroundColor:'#ffff'}]} />
        <CustomStyledButton text={'Premium'}
        customTextStyling={[headerStyleSheet.headerButtonText,{color:AppColors.mainBackgroundColor}]}
        customStyling={[headerStyleSheet.headerButton, {backgroundColor:'#ffff'}]}/>

      </View>

    </View>
  )
}
