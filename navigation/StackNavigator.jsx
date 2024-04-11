import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Screen1} from '../screens/Screen1'
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Screen1" component={Screen1} />

        </Stack.Navigator>

    )
}
export default StackNavigator;