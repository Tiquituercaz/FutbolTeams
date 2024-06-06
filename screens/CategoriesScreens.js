import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({navigation}) {

    function renderCategoryItem(equipoData) {
        function pressHandler() {
            navigation.navigate('EquiposOverview', {
                categoryId: equipoData.item.id
            })
        }

        return (
            <CategoryGridTile title={equipoData.item.title} color={equipoData.item.color} onPress={pressHandler}/>
        )
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}


export default CategoriesScreen