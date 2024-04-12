import React, { useState } from "react";
import { Text, View, Button,TextInput, ScrollView, StyleSheet } from 'react-native';

const Kontakt = () => {
    const [email, setEmail] = useState("Emaili juaj");
    const [subject, setSubject] = useState("Subjecti  juaj");
    const [message, setMessage] = useState("Messazhi juaj");

    return (<ScrollView className="bg-red">
        <Text style={styles.Text}>
            Na Kontaktoni
        </Text>
        <View>
            <TextInput style={styles.TextInput} placeholder="email"
                defaultValue={email} onChangeText={newVal => setEmail(newVal)} />
            <TextInput multiline={true} numberOfLines={4} style={styles.TextInput}
                placeholder="Subject" defaultValue={subject} onChangeText={newVal => setSubject(newVal)} />
            <TextInput style={styles.TextInput} multiline={true} numberOfLines={2}
                placeholder="Message" defaultValue={message} onChangeText={newVal => setMessage(newVal)} />
      
        </View>
    </ScrollView>);
}
const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: '#3E3E3E',
        margin: 2,
        elevation: 4
    },
    Text: {
        alignContent: "center",
        justifyContent: "center",
        fontSize: 18,
        textAlign: 'center',
        margin: 20,
        color:"blue"
    }
})
export default Kontakt;