import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import homeStyles from './homestyles';
import {invitationCategories} from '../../constants/constants';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import TextComponent from '../../components/TextComponent/TextComponent';
import UserInfo from '../../components/user/userinfo';
import Invitations from '../invitations/invitations';
import Greetings from '../greetings/greeting';
import CustomStyledButton from '../../components/Button/customStyledButton';
import {useSelector} from 'react-redux';
export default function Home() {
  const TabItems = [<Invitations />, <Greetings />];
  const {tabIndex} = useSelector(state => state.tabs);

  return (
    <View style={homeStyles.mainContainer}>
      <HeaderBar />
      <View style={{flex: 2, paddingTop: 5, paddingHorizontal: 10}}>
        <View style={{backgroundColor: '#D9D9D9', flex: 2}}>
          <TextComponent text={''} />
        </View>
        <View style={{flex: 4}}>
          <UserInfo />
        </View>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <TextComponent
          text={'Categories'}
          customStyling={{fontSize: 18, fontWeight: 'bold'}}
        />
        <TextComponent
          text={'Select Category to Design your Cards'}
          customStyling={{fontSize: 13, color: '#C0ADAD'}}
        />
      </View>
      <View style={{flex: 6, flexDirection: 'row', paddingHorizontal: 7}}>
        {TabItems[tabIndex]}
      </View>
    </View>
  );
}
