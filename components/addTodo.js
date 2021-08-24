import React, {useState} from 'react'
import { StyleSheet, Text, TextInput,View, Button } from 'react-native';

export default function AddTodo({ submitHandler, setText, text}){

    const changeHandler = (val) => {
       setText(val);
        
    }
    
    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='add item...'
            value= {text}
            onChangeText={(e) => changeHandler(e)}
        />
        <Button 
            title= 'Add Item'
            color= 'coral'
            onPress={() => submitHandler(text)}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
       marginBottom: 10,
       paddingHorizontal: 8,
       paddingVertical: 6,
       borderBottomWidth: 1,
       borderBottomColor: '#ddd'
    },
    
  });