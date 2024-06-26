import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native"
import { useNavigation} from '@react-navigation/native'
import EquiposDetails from "./EquiposDetails"

function EquipoItem({ id, title, imageUrl, champions, ligas, copaNacional }){
    console.log('title', title)
    console.log('imageUrl', imageUrl)

    const navigation = useNavigation()
   
    function selectEquipoItemHandler(){
        navigation.navigate('EquipoDetail', { equipoId: id})
    }

    return(
        <View style={styles.mailItem}>
            <Pressable 
                android_ripple={{ color: '#ccc'}}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null) } 
                onPress={selectEquipoItemHandler}
            >
                <View>
                    <View>
                        <Image 
                            source={{uri: imageUrl}}
                            style={styles.image}
                        />
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <EquiposDetails 
                        champions={champions}
                        ligas={ligas}
                        copaNacional={copaNacional}
                    />
                </View>
            </Pressable>
        </View>
    )

}

export default EquipoItem

const styles = StyleSheet.create({
    EquipoItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor:'lightgray',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})