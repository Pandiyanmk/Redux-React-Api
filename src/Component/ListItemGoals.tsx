
import { StyleSheet, Text, Dimensions, View, Pressable } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import {addFavourite,removeFavorite} from '../redux/favorite';


const ListItemGoals = (props) => {
  
    const favouriteIds = useSelector((state)=> state.favoriteNumber.ids);
    const isFavourtite = favouriteIds.includes(props.name)

    const dispatch = useDispatch();
    const deleteGoals = () => {
        if (isFavourtite) {
            dispatch(removeFavorite({id: props.name}))
        } else {
            dispatch(addFavourite({id: props.name}))
        }
      
    }

    var width = Dimensions.get('window').width - 20;
    return (
        <Pressable onPress={deleteGoals} >
            <View style={[styles.viewStyleSheet, { width: width }]}>
                <Text style={[styles.textStyles, { flex: 1 }]}>{props.name}</Text>
                <Text style={[styles.textStyles, { color: 'black' }]}>{isFavourtite ? 'ADDED' : 'ADD TO FAVOURITE'}</Text>
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontStyle: 'italic',
        fontSize: 20,
        color: 'white',
        padding: 10
    },
    viewStyleSheet: {
        margin: 5,
        backgroundColor: 'grey',
        borderRadius: 10,
        flexDirection: 'row'
    }
})
export default ListItemGoals;