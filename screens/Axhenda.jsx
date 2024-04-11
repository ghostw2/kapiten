import React from "react";
import {Text,View,Button,ScrollView} from 'react-native';
import Jumbotron from '../components/Jumbotron';
import RegisterForm from '../components/RegisterForm';

const Axhenda = ({navigtion})=>{


    return (
        <ScrollView className="bg-red">
            <Jumbotron/>
            <RegisterForm/>
        </ScrollView>
    );
}
export default Axhenda;