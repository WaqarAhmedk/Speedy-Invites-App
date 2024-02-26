import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import homeStyles from './homestyles'
import { invitationCategories } from '../../constants/constants'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
export default function Home() {

    const RenderItem = ({ item }) => {
        return <View style={{ backgroundColor: 'green',  flexDirection: 'row', flex:1,margin:10 }}>
            <Text>{item.title}</Text>
            <Text>{item.totalCards}</Text>

        </View>
    }



    return (
        <View style={homeStyles.mainContainer}>
            <HeaderBar  />
            <View style={{ backgroundColor: 'red', flex: 2 }}>
                <Text>sjdfjd</Text>
            </View>
            <View style={{ backgroundColor: 'blue', flex: 6,  flexDirection: 'row' }}>
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
