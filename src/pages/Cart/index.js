import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Cart() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Seu carrinho está vazio
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 38,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});