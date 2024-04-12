import React from "react";
import {Text,View,Button,SafeAreaView, Pressable,StyleSheet, SectionList} from 'react-native';
import Jumbotron from '../components/Jumbotron';
import RegisterForm from '../components/RegisterForm';

const Axhenda = ({navigation})=>{
    

    return (
        <SafeAreaView  className="bg-red">
            <SectionList sections={listData}
                renderItem={({item}) => (
                    <View style={styles.listView}>
                        <Text style={styles.listingDate}>
                        {item.date}
                        </Text>
                        <Text style={styles.listingText}>
                        {item.text}
                        </Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
    )}
            />

            <Pressable onPress={() => { navigation.navigate("Kontakt") }} style={styles.button} >
                <Text>Na Kontakto</Text>
            </Pressable>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: 'yellow',
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 4,
        margin: 10
    },
    listingText: {
        color: 'blue',
        backgroundColor:'red',
    },
    listingDate: {
        
    },
    listView: {
        justifyContent: "left",
        diplay: "flex",
        
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'lightgrey',
        padding: 10,
    },
});
const listData = [{
    title: "this is the title",
    data: [
        {
            id: 1,
            date: "18 Nentor 2023",
            text: "Fillimi i mbare, gjysma e punes."
        },
        {
            id: 2,
            date: "🇦🇱 28 Nentor",
            text: "Krijimi i ndeshjeve: Listimi i lojtareve pjesemarres."
        },
        {
            id: 3,
            date: "Vjen se shpejti",
            text: " Formacioni i ndeshjes."
        },
        {
            id: 4,
            date: "Vjen se shpejti",
            text: "Regjistrimi i rezultateve te ndeshjes."
        },
        {
            id: 5,
            date: "Vjen se shpejti",
            text: "Muhabet per ndeshjen."
        },
        {
            id: 6,
            date: "Vjen se shpejti",
            text: "Sfida kapitenesh."
        },
        {
            id: 7,
            date: "Vjen se shpejti",
            text: "Ta bojm cik me zyrtare."
        },
        {
            id: 8,
            date: "Vjen se shpejti",
            text: " Japim vleresime shokeve per performancen."
        },
        {
            id: 9,
            date: "Vjen se shpejti",
            text: "Festojme mbylljen e versionit te pare 🥳"
        },

    ]
}];
export default Axhenda;