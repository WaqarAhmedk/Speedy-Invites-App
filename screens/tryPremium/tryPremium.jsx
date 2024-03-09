import React from 'react';
import {Image, Text, Touchable, TouchableOpacity, View} from 'react-native';
import premiumScreenStyles from './tryPremiumStyles';
import TextComponent from '../../components/TextComponent/TextComponent';
import {AppColors, premiumFeatures} from '../../constants/constants';
import CustomStyledButton from '../../components/Button/customStyledButton';
const bottomImage = require('../../assets/images/auth/bottomFlowers.png');
const tick = require('../../assets/icons/general/tick.png');
const tickPinkbg = require('../../assets/icons/general/tickpinkbg.png');

export default function TryPremium({navigation}) {
  const handleBuy = () => {
    navigation.navigate('Splash');
  };
  return (
    <View style={premiumScreenStyles.mainContainer}>
      <View style={premiumScreenStyles.innerTop}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <TextComponent
            text={'Skip'}
            customStyling={{color: AppColors.white}}
          />
        </TouchableOpacity>
      </View>
      <View style={premiumScreenStyles.innerMiddle}>
        <TextComponent
          text={'Try Premium'}
          customStyling={premiumScreenStyles.tryPremiumText}
        />
        <View style={{marginVertical: 20}}>
          {premiumFeatures.map((feature, index) => {
            return (
              <View
                style={premiumScreenStyles.featureListContainer}
                key={index}>
                <Image source={tick} />
                <TextComponent
                  text={feature}
                  customStyling={premiumScreenStyles.featureListText}
                />
              </View>
            );
          })}
        </View>
        <View style={premiumScreenStyles.premiumPricingmain}>
          <Image source={tickPinkbg} />
          <View style={{gap: 5}}>
            <TextComponent
              text={'Year/1200PKR'}
              customStyling={premiumScreenStyles.pricingText}
            />
            <TextComponent
              text={'12 months at - 100PKR/month'}
              customStyling={[
                premiumScreenStyles.pricingText,
                {color: 'black'},
              ]}
            />
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View
                style={{
                  borderRadius: 10,
                  width: 100,
                  height: 30,
                  backgroundColor: AppColors.mainBackgroundColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextComponent
                  text={'Year/1200PKR'}
                  customStyling={{color: 'white', fontSize: 12}}
                />
              </View>
              <TextComponent
                text={'Save 33%'}
                customStyling={[premiumScreenStyles.pricingText]}
              />
            </View>
          </View>
        </View>
        <CustomStyledButton
          click={handleBuy}
          text={'Buy Now'}
          textColor={{color: AppColors.mainBackgroundColor}}
          customStyling={{
            backgroundColor: '#ffff',
            marginTop: 30,
            color: 'red',
          }}
        />
      </View>
      <View style={premiumScreenStyles.innerBottom}>
        <Image source={bottomImage} />
      </View>
    </View>
  );
}
