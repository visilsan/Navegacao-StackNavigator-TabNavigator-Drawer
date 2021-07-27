import React from 'react';
import { View, Text } from 'react-native';


export default function Contacts({navigation}) {
    return(
        <View style={{marginTop:30}}>
            <View>
            <Text>Nome: João Silva </Text>
            <Text>Telefone: (11) 94532-2454</Text>
            <Text
            onPress={()=> navigation.navigate('Information',
            {
                nome: 'João Silva',
                telefone: '94532-2454',
                endereco:'Rua Itagua',
                numero: '13',
            }
            )}>Information...</Text>
            </View>
            <View  style={{marginTop:30}}>
            <Text>Nome: Francisco Junior </Text>
            <Text>Telefone: (11) 98687-8675</Text>
            <Text
            onPress={()=> navigation.navigate('Information', 
            {
                nome: 'Francisco Junior',
                telefone: '98687-8675',
                endereco: 'Rua das Graças',
                numero: '767'
            })}>Information...</Text>
            </View>
        </View>
        
    );
}