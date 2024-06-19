import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee bean', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
    { text: 'play the piano', key: '4' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS', "Todo must be more than 3 letters", [
        { text: 'understood', onPress: () => console.log('alert closed') }
      ])
    }

  }

  return (
    <>
    {/* <Sandbox /> */}
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()        
      }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>

          </View>
        </View>        
      </TouchableWithoutFeedback>
      {/* <StatusBar style="auto" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,    
    flex: 1
  },
  list: {
    marginTop: 10,    
    flex: 1
  }
});
