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
  // const {id, category} = route.params;
  // const Cards = cards.filter(card => {
  //   return card.catId === id;
  // });

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          width: '50%',
          flexGrow: 1,
          marginVertical: 10,
          alignItems: 'center',
          gap: 5,
        }}>
        <Image
          source={item.imgUrl}
          style={{height: 250, width: '95%', objectFit: 'fill'}}
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'red',
            width: '95%',
          }}>
          <TextComponent text={item.name} />
          <TextComponent text={item.id} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={cards}
      keyExtractor={(item, index) => index.toString()}
      renderItem={RenderItem}
    />
  );
}
