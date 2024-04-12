import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Kreu from "../screens/Kreu";
import Kontakt from "../screens/Kontakt";
import Axhenda from "../screens/Axhenda";
const Stack = createNativeStackNavigator();



const StackNavigator = () => {
    return (

        <Stack.Navigator initialRouteName="Kreu"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: 'blue'
                },
            }}>
            <Stack.Screen name="Kreu"
                component={Kreu} />
            <Stack.Screen name="Axhenda"
                component={Axhenda} />
            <Stack.Screen name="Kontakt"
                component={Kontakt} />

        </Stack.Navigator>

    )
}
export default StackNavigator;