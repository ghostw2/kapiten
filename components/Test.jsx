import React from 'react';
import { View, Text,Button } from 'react-native';

const Test = () => {
    return (
        <View >
            <Text style={{ fontSize: 20, backgroundColor: 'red' }}>Hello , this is menris app</Text>
            <Button className="btn btn-primary" onPress={() => {
                alert("hello there")
            }} title="Press me please" />
        </View>
    );
}

export default Test;