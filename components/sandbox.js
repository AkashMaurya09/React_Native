import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.boxOne}>One</Text>
            <Text style = {styles.boxTwo}>Two</Text>
            <Text style = {styles.boxThree}>Three</Text>
            <Text style = {styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'blue',
        padding: 10
    },
    boxTwo: {
        backgroundColor: 'green',
        padding: 10
    },
    boxThree: {
        backgroundColor: 'yellow',
        padding: 10
    },
    boxFour: {
        backgroundColor: 'red',
        padding: 10
    },
});