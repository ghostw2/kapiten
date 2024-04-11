import React from "react";
import {Text,View,Button,Image} from 'react-native';

const Jumbotron = ()=>{

    return (
        <View className="flex justify-between px-4 py-2 bg-blue-900">
            <View className="w-100 p-1">
                <Text className="text-lg text-white font-bold" > Organizoni ndeshjet tuaja te kalcetos
                  Nisur nga mbledhja e lojtareve deri ne historikun e ndeshjeve te luajtura gjate gjithe kohes, te gjitha ne nje aplikacion.
                  </Text>
                <Button className="bg-red-500 text-white" title="Filloni Ketu" />
            </View>
            <View className="w-full flex justify-center  bg-white">
                <Image  style={{  width: 300,
                                height: 160,}}
                               source={require('../trent-alexander-arnold-.png')}/>
            </View>
        </View>

    );
}

export default Jumbotron;