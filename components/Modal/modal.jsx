import React from 'react';
import {
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TextComponent from '../TextComponent/TextComponent';
import {cross, tickpink} from '../../assets/icons/general';
import InputComponent from '../Inputs/InputComponent';
import EditTextComponent from '../Inputs/EditInputComponent';
import CustomStyledButton from '../Button/customStyledButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function CustomModal({open, close}) {
  return (
    <Modal visible={open} transparent={true}>
      <KeyboardAwareScrollView
        style={{flexGrow: 1}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          flexGrow: 1,
        }}>
        <View
          style={{
            backgroundColor: '#ffff',
            height: '50%',
            maxHeight: 300,
            width: '92%',
            paddingBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
              marginTop: 10,
            }}>
            <TextComponent text={'Edit your Name'} />
            <TouchableOpacity onPress={close}>
              <Image source={cross} />
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 5, gap: 10, flex: 1, maxHeight: 250}}>
            <EditTextComponent placeholder={'text here'} />
            <CustomStyledButton text={'Update Text'} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Modal>
  );
}

export default CustomModal;
