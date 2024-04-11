import React,{useState} from 'react';
import { View, TextInput, Button,Text } from 'react-native';
import { Formik } from 'formik';
import { Fumi } from 'react-native-textinput-effects';
import { Picker } from "@react-native-picker/picker"

const RegisterForm = ()=>{
  const [region,setRegion]= useState("AL");
  const [email,setEmail]=useState('');
  return (
  <View className="flex p-1 m-2 bg-light">
    <Text>Form</Text>
    <View>
        <TextInput className="bg-white rounded hover:rounded-lg" placeholder="email" defaultValue={email} onChangeText={newVal=>setEmail(newVal)}/>
        <Picker selectedValue={region} onValueChange={currentRegion=>setRegion(currentRegion)}>
            <Picker.Item label='US' value="US" />
            <Picker.Item label='AL' value="AL" />
            <Picker.Item label='EN' value="EN" />
        </Picker>
    </View>
    <Button className="btn rounded " onPress={()=>alert([region,email])} title="submit"/>
  </View>);

}
export default RegisterForm;