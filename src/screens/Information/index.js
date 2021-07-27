import React from 'react';
import { View, Text } from 'react-native';


export default function Information({route}) {
    return(
        <View style={{marginTop:80}}>
            <Text>Nome: {route.params?.nome} </Text> 
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereço: {route.params?.endereco} </Text>
            <Text>numero:{route.params?.numero}</Text>
        </View>
    );
}