import React from 'react';
import {FlatList} from 'react-native';
import {invitationCategories} from '../../constants/constants';
import ItemList from '../../components/renderListItem/renderListItem';

export default function Invitations() {
  return (
    <FlatList
      numColumns={2}
      data={invitationCategories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={ItemList}
    />
  );
}
