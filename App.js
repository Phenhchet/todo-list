import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,Keyboard, Alert, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';


export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodo] = useState([
    { text: 'Homework', key: '1'},
    { text: 'JavaScript', key: '2'},
    { text: 'React Js', key: '3'},
    { text: 'React Native', key: '4'},
    { text: 'Website', key: '5'},
  ]);

  const deletHangler = (key) =>{
    // setTodo((prevTodo) =>{
    //   return prevTodo.filter(todo => todo.key != key);
    // })
  const newArray =  todos.filter(todo => todo.key != key )
      // console.log(newArray);
      setTodo(newArray);
  }

  const submitHandler = (text) =>{
    if(text.length >=1){
        setTodo([ 
        { text: text, key: Math.random().toString()},
        ...todos
      ]);
    
    }else{
      Alert.alert('OOPS', 'Must Be Input', [
        {text:  'Go Back', onPress:() => console.log('Alert Closed')}
      ]);
    }
    setText('');
    Keyboard.dismiss();
    
    
  }
  console.log(text);
   
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
        <View style={styles.contain}>
            {/* todo form */}
            <AddTodo submitHandler={submitHandler} setText={setText} text={text}/>
            <View style={styles.list}>
                <FlatList 
                  data={todos}
                  renderItem={({item}) => (
                    // <Text>{item.text}</Text>
                    <TodoItem item={item} deletHangler={deletHangler}/>
                  )}
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contain:{
      padding: 30,
      flex:1
  },
  list:{
      marginTop: 20,
      flex:1
  }
});
