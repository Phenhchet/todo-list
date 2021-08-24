import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem ({item, deletHangler}) {
    return(
        <TouchableOpacity 
        style={styles.item}>
            <Text >{item.text} </Text>
            <MaterialIcons name="delete" size={24} color="black" onPress={() => deletHangler(item.key)}/>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    
  });