import { Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

const FavouriteScreen = () => {
    const favouriteIds = useSelector((state)=> state.favoriteNumber.ids);
    function renderCategories() {
        return favouriteIds.map((item, index) => <Text style={{ color: 'black', fontSize: 20 }} key={index}>{item}</Text>);
    }
    return (
        <View>
            {renderCategories()}
        </View>
    )
}
export default FavouriteScreen;