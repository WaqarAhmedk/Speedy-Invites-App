import React, {useState} from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import homeStyles from './homestyles';
import {AppColors, invitationCategories} from '../../constants/constants';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import TextComponent from '../../components/TextComponent/TextComponent';
import UserInfo from '../../components/user/userinfo';
import Invitations from '../invitations/invitations';
import Greetings from '../greetings/greeting';
import CustomStyledButton from '../../components/Button/customStyledButton';
import {useSelector} from 'react-redux';
import InputComponent from '../../components/Inputs/InputComponent';
import {filters, search} from '../../assets/icons/general';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export default function Home({navigation}) {
  const TabItems = [<Invitations />, <Greetings />];
  const {tabIndex} = useSelector(state => state.tabs);

  return (
    <View style={homeStyles.mainContainer}>
      <HeaderBar />
      <KeyboardAwareScrollView style={{flex: 3}}>
        <View style={{flex: 2, paddingTop: 5}}>
          <View style={{flex: 2, paddingLeft: 10}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <InputComponent
                customStyling={{
                  backgroundColor: '#F0EAEA',
                  flex: 14,
                  height: 43,
                }}
                image={search}
              />
              <View
                style={{
                  flex: 2,
                  backgroundColor: AppColors.mainBackgroundColor,
                  height: '100%',
                  justifyContent: 'center',
                  marginLeft: 5,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}>
                <Image source={filters} style={{marginLeft: 10}} />
              </View>
            </View>
          </View>
          <View style={{flex: 4, paddingHorizontal: 10}}>
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
        <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
          <ScrollView style={{flex: 1}} horizontal>
            {TabItems[tabIndex]}
          </ScrollView>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
