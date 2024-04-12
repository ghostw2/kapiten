import React from "react";
import {Text,View,Pressable,Image, StyleSheet} from 'react-native';

const Jumbotron = ({navigation})=>{
    
    return (
        <View className="flex justify-between px-4 py-2 bg-blue-900">
            <View className="w-100 p-1">
                <Text className="text-lg text-white font-bold" > Organizoni ndeshjet tuaja te kalcetos
                  Nisur nga mbledhja e lojtareve deri ne historikun e ndeshjeve te luajtura gjate gjithe kohes, te gjitha ne nje aplikacion.
                  </Text>
            </View>
            <View className="w-full flex justify-center items-center">
                <Image className="h-auto w-full rounded-sm"
                    source={require('../trent-alexander-arnold-.png')} />
                <Pressable style={styles.button} onPress={()=>{navigation.navigate("Axhenda")}}><Text>
                        Filloni Ketu
                    </Text>
                </Pressable>
            </View>
        </View>

    );
}
const onPress = () => {
    
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
        margin:10
    }
});

export default Jumbotron;