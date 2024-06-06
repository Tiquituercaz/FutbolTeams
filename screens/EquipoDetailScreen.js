import { Image, Text, View, StyleSheet, ScrollView } from "react-native"

import { EQUIPOS } from '../data/dummy_data'
import EquipoDetails from "../components/EquiposDetails"

function EquipoDetailScree({route, navigation}) {
    const equipoId = route.params.equipoId

    const selectedEquipo = EQUIPOS.find((equipo) => equipo.id === equipoId)

    return(
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedEquipo.imageUrl }} />
            <Text style={styles.title}>{selectedEquipo.title}</Text>
            <EquipoDetails 
                champions={selectedEquipo.champions}
                ligas={selectedEquipo.ligas}
                copaNacional={selectedEquipo.copaNacional}
            />
            <View>
                <Text style={styles.subtitle}>Ingredients</Text>
                {selectedEquipo.ingredients.map(ingredients => <Text style={styles.textContent} key={ingredients}>{ingredients}</Text>)}
                <Text style={styles.subtitle}>Steps</Text>
                {selectedEquipo.steps.map(step => <Text style={styles.textContent} key={step}>{step}</Text>)}
            </View>
        </ScrollView>
    )

}

export default EquipoDetailScree

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textContent: {
        fontSize: 14,
        margin: 4,
        marginVertical: 3,
        marginHorizontal: 24    
    }


})