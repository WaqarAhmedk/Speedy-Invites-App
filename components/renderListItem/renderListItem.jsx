import React from 'react';
import {Alert, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from '../TextComponent/TextComponent';
import {AppColors} from '../../constants/constants';

function ItemList({item, index}) {
  return (
    <TouchableOpacity onPress={() => {}}>
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
        <LinearGradient
          colors={item.colors ? item.colors : ['#b993d6', '#8ca6db']}
          locations={[0, 0.5, 0.6]}
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          style={{
            borderRadius: 20,
          }}>
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
            <Image source={item.images[1]} />
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

export default ItemList;

const style = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    width: '50%',
    paddingVertical: 5,
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
  imageMainContainer: {justifyContent: 'flex-end', alignItems: 'flex-end'},
});
