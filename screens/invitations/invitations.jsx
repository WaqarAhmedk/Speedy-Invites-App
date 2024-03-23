import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {invitationCategories} from '../../constants/constants';
import ItemList from '../../components/renderListItem/renderListItem';

export default function Invitations({navigation}) {
  return (
    <FlatList
      scrollEnabled={false}
      numColumns={2}
      data={invitationCategories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              width: '49%',
            }}
            onPress={() =>
              navigation.navigate('Cards', {id: item.id, category: item.title})
            }>
            <ItemList item={item} index={index} />
          </TouchableOpacity>
        );
      }}
    />
  );
}
