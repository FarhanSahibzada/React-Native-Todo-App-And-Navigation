import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';

export default function Task({ route }) {
    const {todo} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo Details</Text>
            <Text style={styles.todoText}>{todo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    todoText: {
        marginTop: 20,
        fontSize: 18,
        color: 'gray',
    },
}); 
