import React from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import homeStyles from './homestyles'
import { invitationCategories } from '../../constants/constants'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import TextComponent from '../../components/TextComponent/TextComponent'
export default function Home() {

    const RenderItem = ({ item }) => {
        return <View style={{ backgroundColor: 'blue', flex: 1, margin: 10 }}>
            <Text>{item.title}</Text>
            <Text>{item.totalCards}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image source={item.images[1]} />
                <Image source={item.images[0]} />
            </View>



        </View>
    }



    return (
        <View style={homeStyles.mainContainer}>
            <HeaderBar />
            <View style={{ flex: 2 ,paddingTop:5 ,paddingHorizontal:10}}>
                <View style={{backgroundColor:'#D9D9D9' ,height:50}}>
                    <TextComponent text={'123'} />
                </View>
                <View>
                    <TextComponent text={'123'} />

                </View>
            </View>
            <View style={{ flex: 6, flexDirection: 'row',paddingHorizontal:7 }}>
                <FlatList
                    numColumns={2}
                    data={invitationCategories}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={RenderItem}
                />
            </View>

        </View>
    )
}
