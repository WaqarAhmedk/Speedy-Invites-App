import React from 'react'
import { Text, View } from 'react-native'
import headerStyleSheet from './headerBarStyle'
import TextComponent from '../TextComponent/TextComponent'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function HeaderBar() {
  return (
   <View style={headerStyleSheet.main}>
    <Icon    name='bars'/>
    <View style={headerStyleSheet. innercontainer}>
        <TextComponent  text={'Eventor'} customStyling={headerStyleSheet.headerTitle}/>

    </View>
    <View></View>
   </View>
  )
}
{/* <FontAwesomeIcon icon="fa-solid fa-bars-staggered" /> */}