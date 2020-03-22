import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Akash', id: '1'},
    { name: 'Aditya', id: '2'},
    { name: 'Dev', id: '3'},
    { name: 'Srajan', id: '4'},
    { name: 'Shreyas', id: '5'},
    { name: 'Buddy', id: '6'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
  }

  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor = { (item) => item.id }
        data = {people}
        renderItem = { ({ item }) => (
          <TouchableOpacity onPress = { () => pressHandler(item.id)}>
            <Text style = {styles.item}> {item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },  

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor:'lightblue',
    fontSize: 24,
  }
});
