import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dimensions} from 'react-native';
import {CaptalizeFirstText} from '../../utils/utils';
import {options} from '../../constants/constants';
import CustomModal from '../../components/Modal/modal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextComponent from '../../components/TextComponent/TextComponent';
import {save} from '../../assets/icons/general';

function EditCard({navigation, route}) {
  // const {cardId} = route.params;
  const screenWidth = Dimensions.get('window').width;
  const [showModal, setShowModal] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleShowBottomBar = () => {
    console.log('ca;ed');
    setShowBottomBar(!showBottomBar);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        justifyContent: 'flex-start',
        flex: 1,
        flexGrow: 1,
      }}>
      <View style={{flex: 7, margin: 15}}>
        <ImageBackground
          source={require('../../assets/images/cards/card12.png')}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}>
          <TouchableOpacity
            onPress={handleShowBottomBar}
            style={{backgroundColor: 'green'}}>
            <Text
              style={{
                position: 'absolute',
                top: 200,
                left: 150,
                color: 'red',
                backgroundColor: 'blue',
                height: 200,
                zIndex: 99999999,
              }}>
              Flacna
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      {showBottomBar ? (
        <View style={{flex: 1, flexGrow: 1}}>
          <ScrollView
            horizontal
            style={{
              flexDirection: 'row',
              backgroundColor: '#ffff',
              width: screenWidth,
            }}
            showsHorizontalScrollIndicator
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
              gap: 20,
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            {options.map((option, index) => {
              return (
                <Pressable key={index} onPress={handleModal}>
                  <Text style={{color: 'black'}}>
                    {CaptalizeFirstText(option.name)}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            alignItems: 'center',
            gap: 20,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <TextComponent text={'Click the Text on card To Edit Your Card'} />
          <Image source={save} />
        </View>
      )}
      <CustomModal open={showModal} close={handleModal} />
    </KeyboardAwareScrollView>
  );
}

export default EditCard;
