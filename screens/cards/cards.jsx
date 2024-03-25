import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import {cards} from '../../constants/constants';
import TextComponent from '../../components/TextComponent/TextComponent';

export default function Cards({navigation, route}) {
  console.log('navigation: ', route);
  const {id, category} = route.params;
  const Cards = cards.filter(card => {
    return card.catId === id;
  });

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Edit', {cardId: item.id});
        }}
        style={{
          flex: 1,
          width: '50%',
          flexGrow: 1,
          paddingVertical: 10,
          alignItems: 'center',
          gap: 5,
        }}>
        <Image
          source={item.imgUrl}
          style={{height: 250, width: '95%', objectFit: 'fill'}}
        />
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            width: '95%',
          }}>
          <TextComponent
            text={item.name}
            customStyling={{
              fontSize: 15,
              fontWeight: 'semi bold',
              color: 'black',
            }}
          />
          <TextComponent text={item.id} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={Cards}
      keyExtractor={(item, index) => index.toString()}
      renderItem={RenderItem}
    />
  );
}
