import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Screen1 from "../screens/Screen1"
import Home from "../screens/Home"
import Axhenda from "../screens/Axhenda";
const Stack = createNativeStackNavigator();



const StackNavigator = () => {
    return (

        <Stack.Navigator initialRouteName="Axhenda"
                                           screenOptions={{
                                                         headerMode: 'screen',
                                                         headerTintColor: 'white',
                                                         headerStyle: { backgroundColor: 'tomato' },
                                                       }}>
            <Stack.Screen name="Axhenda" component={Axhenda}  />
            <Stack.Screen name="Screen1" component={Screen1}  />
            <Stack.Screen name="Home" component={Home}  />

        </Stack.Navigator>

    )
}
export default StackNavigator;