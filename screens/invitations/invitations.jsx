import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {invitationCategories} from '../../constants/constants';
import LinearGradient from 'react-native-linear-gradient';

export default function Invitations() {
  const RenderItem = ({item, index}) => {
    return (
      <View
        style={[
          {
            flexGrow: 1,
            width: '50%',
            position: 'relative',
            paddingVertical: 5,
            borderRadius: 20,
          },
          index % 2 === 0
            ? {
                paddingRight: 5,
              }
            : {
                paddingLeft: 5,
              },
        ]}>
        <LinearGradient
          colors={['red', 'blue']}
          style={{
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{item.title}</Text>
          <Text>{item.totalCards}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={item.images[1]} />
            <Image source={item.images[0]} />
          </View>
        </LinearGradient>
      </View>
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={invitationCategories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={RenderItem}
    />
  );
}
