import { View, Text, StyleSheet } from 'react-native'

function EquiposDetails({champions, ligas, copaNacional}){
    return(

        <View style={styles.details}>
            <Text style={styles.detailItem}>{champions}</Text>
            <Text style={styles.detailItem}>{ligas}</Text>
            <Text style={styles.detailItem}>{copaNacional}</Text>
        </View>
    )

}

export default EquiposDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})