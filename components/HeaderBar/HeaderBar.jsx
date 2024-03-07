import React from 'react';
import {Image, View} from 'react-native';
import headerStyleSheet from './headerBarStyle';
import TextComponent from '../TextComponent/TextComponent';
import {bars} from '../../assets/icons/general';
import CustomStyledButton from '../Button/customStyledButton';
import {AppColors} from '../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {changeTab} from '../../redux/slices/tabSlice';
import App from '../../App';

const tabsBtns = ['Invitations', 'Greetings', 'Premium'];

export default function HeaderBar() {
  const dispatch = useDispatch();
  const {tabIndex, name} = useSelector(state => state.tabs);
  const handleChangeTab = index => {
    dispatch(changeTab(index));
  };

  return (
    <View style={headerStyleSheet.main}>
      <View style={headerStyleSheet.innercontainer}>
        <Image source={bars} />
        <View style={headerStyleSheet.innercontainer}>
          <TextComponent
            text={'Eventor'}
            customStyling={headerStyleSheet.headerTitle}
          />
        </View>
      </View>
      <View style={headerStyleSheet.headerButtonWrapper}>
        {tabsBtns.map((btn, index) => {
          return (
            <CustomStyledButton
              key={index}
              text={btn}
              customTextStyling={[
                headerStyleSheet.headerButtonText,
                index === tabIndex
                  ? {color: AppColors.white}
                  : {color: AppColors.mainBackgroundColor},
              ]}
              customStyling={[
                headerStyleSheet.headerButton,
                index === tabIndex
                  ? {backgroundColor: AppColors.mainBackgroundColor}
                  : {backgroundColor: AppColors.white},
              ]}
              click={() => {
                handleChangeTab(index);
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
