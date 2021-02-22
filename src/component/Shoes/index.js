import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes(props) {

 function filterDesc(desc){
    if(desc.length < 24){
        return desc;
    }

    return `${desc.substring(0, 20)}...`;
 }

 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.shoesImg}
      />
      <Text style={styles.shoesText}>
          {filterDesc(props.children)}
      </Text>
      <View opacity={0.5}>
        <Text style={styles.shoesPrice}> {props.cost} </Text>
      </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg:{
        width: 175,
        height: 175
    },
    shoesText:{
        fontSize: 16,
    },
    shoesPrice:{
      fontSize: 16,
      color: 'red'
  }

});