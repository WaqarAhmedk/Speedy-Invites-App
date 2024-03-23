import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {invitationCategories} from '../../constants/constants';

export default function Greetings() {
  const RenderItem = ({item}) => {
    return (
      <View style={{backgroundColor: 'blue', flex: 1, margin: 10}}>
        <Text>{item.title}</Text>
        <Text>{item.totalCards}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.images[1]} />
          <Image source={item.images[0]} />
        </View>
      </View>
    );
  };
  return (
    <FlatList
      scrollEnabled={false}
      numColumns={2}
      data={invitationCategories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={RenderItem}
    />
  );
}
