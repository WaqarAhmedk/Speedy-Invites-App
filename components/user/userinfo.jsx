import React from 'react';
import {Image, View} from 'react-native';
import TextComponent from '../TextComponent/TextComponent';
import {user} from '../../constants/constants';
import CustomStyledButton from '../Button/customStyledButton';

export default function UserInfo() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor:
          'rgba(223.0170401930809, 205.505208671093, 233.7500050663948, 1)',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        flex: 1,
        borderRadius: 9,
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 10,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Image
        source={user.avatar}
        style={{
          height: 90,
          width: 90,
          objectFit: 'fill',
          borderRadius: 200,
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          flex: 1,
        }}>
        <View>
          <TextComponent
            text={'Hello ' + user.name + ','}
            customStyling={{fontSize: 15, fontWeight: 'bold', color: '#000'}}
          />
          <TextComponent
            text={'Email : ' + user.email}
            customStyling={{fontSize: 12, fontWeight: 'bold', color: '#000'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
          }}>
          <CustomStyledButton
            text={'Add Card'}
            customStyling={{paddingHorizontal: 20, height: 40}}
            customTextStyling={{fontSize: 14}}
          />
          <CustomStyledButton
            text={'Edit Profile'}
            customStyling={{paddingHorizontal: 20, height: 40}}
            customTextStyling={{fontSize: 14}}
          />
        </View>
      </View>
    </View>
  );
}
