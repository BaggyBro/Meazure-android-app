import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../misc/colors';

export default function CustData({item, onPress }) {
    const {name} = item;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container} >
      <Text style={styles.text} >
        {name}
      </Text>
     </TouchableOpacity>
  );
}

const widtH = Dimensions.get('window').width - 40

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.PRIMARY,
        width: widtH,
        borderRadius:10,
        padding:12,
        marginBottom:10,
    },

    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:colors.LIGHT 
    }
})
