import React from 'react';
import {Alert, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from '../TextComponent/TextComponent';
import {AppColors} from '../../constants/constants';

function ItemList({item, index}) {
  return (
    <View
      style={[
        style.mainContainer,
        index % 2 === 0
          ? {
              paddingRight: 5,
            }
          : {
              paddingLeft: 5,
            },
      ]}>
      <View style={{backgroundColor: item.color, borderRadius: 20}}>
        <View style={style.textMainContainer}>
          <TextComponent
            text={item.title}
            customStyling={style.titleCustomStyling}
          />
          <TextComponent
            text={item.totalCards + ' Cards'}
            customStyling={style.totalCustomStyling}
          />
        </View>
        <View style={style.imageMainContainer}>
          <Image
            source={item.image}
            style={{height: 100, width: '100%', objectFit: 'contain'}}
          />
        </View>
      </View>
    </View>
  );
}

export default ItemList;

const style = StyleSheet.create({
  mainContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    minWidth: 170,
  },
  textMainContainer: {
    alignItems: 'flex-start',
    marginLeft: 10,
    paddingTop: 10,
  },
  titleCustomStyling: {
    fontWeight: 'bold',
    fontSize: 18,
    color: AppColors.white,
  },
  totalCustomStyling: {
    fontSize: 10,
    color: AppColors.white,
  },
  imageMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
