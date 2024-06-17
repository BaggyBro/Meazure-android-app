import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native';
import colors from '../misc/colors';

export default function IntroSplashModal({visible, onPress}) {
    
  return <Modal style={styles.container} visible={visible} animationType="fade"  transparent >
    <TouchableWithoutFeedback onPress={onPress} >
    <Text style={styles.text} >Rishita's</Text>
    </TouchableWithoutFeedback>
  </Modal>
}

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        justifyContent:'center'
    },

    text:{
        fontSize:60,
        textAlign:'center',
        color: colors.PRIMARY,
        fontStyle: 'italic',
        fontWeight:'bold'
    }
})