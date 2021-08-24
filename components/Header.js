import React from 'react'
import { StyleSheet, Text, View, } from 'react-native';

function Header() {
    return (
        <View style={styles.Header}>
            <Text style={styles.text}>To Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#01977A',
    },
    text:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
        
    },
  });

export default Header
