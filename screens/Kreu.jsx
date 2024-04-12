import React from "react";
import { Text, View, Button, ScrollView } from 'react-native';
import Jumbotron from "../components/Jumbotron";

const Kreu = ({ navigation }) => {
    
    return (
        <ScrollView>
            <Jumbotron navigation={navigation} />
        </ScrollView>
    )
}
export default Kreu;