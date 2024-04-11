import React from "react";
import {Text,View,Button} from 'react-native';
import Test from "../components/Test"
const Home = ({navigation})=>{
    return (
        <View >
            <Test/>
            <Button title="Go to Screen1" onPress={()=>navigation.navigate('Screen1')}/>
        </View>
    );
};
export default Home;