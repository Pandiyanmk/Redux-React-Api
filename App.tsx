import HomeScreen from './src/HomeScreen';
import FavouriteScreen from './src/FavouriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


const Stack = createNativeStackNavigator();
type Props = {}

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='ScreenA'>
          <Stack.Screen name='ScreenA' component={HomeScreen}></Stack.Screen>
          <Stack.Screen name='ScreenB' component={FavouriteScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}
export default App
