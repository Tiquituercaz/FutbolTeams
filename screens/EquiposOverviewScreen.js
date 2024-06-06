import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from 'react'

import { EQUIPOS, CATEGORIES } from "../data/dummy_data";
import EquipoItem from "../components/EquipoItem";

function EquiposOverviewScreen({ route, navigation }){
    const catId = route.params.categoryId
    console.log('catId', catId)

    const displayedEquipos = EQUIPOS.filter((equipoItem) => {
        return equipoItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    function renderEquipoItem(equipoData) {
    
        return(

            <MealItem
                id={equipoData.item.id} 
                title={equipoData.item.title}
                imageUrl={equipoData.item.imageUrl}
                copaNacional={equipoData.item.copaNacional}
                ligas={equipoData.item.ligas}
                champions={equipoData.item.champions}
            />
        )

    }

    return(
        <View style={styles.container}>
            <Text>Equipos Overview - { catId }</Text>
            <FlatList 
                data={displayedEquipos}
                keyExtractor={(item) => item.id}
                renderItem={renderEquipoItem}
            />
        </View>
    )
}

export default EquiposOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})