import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Akash', key: '1'},
    { name: 'Aditya', key: '2'},
    { name: 'Dev', key: '3'},
    { name: 'Srajan', key: '4'},
    { name: 'Shreyas', key: '5'},
    { name: 'Buddy', key: '6'},
  ]);

  return (
    <View style={styles.container}>
    <ScrollView>
      { people.map((item) => (
        <View key={item.key}>
          <Text style = {styles.item}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
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
