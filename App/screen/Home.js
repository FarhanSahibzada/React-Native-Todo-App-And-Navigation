import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, FlatList, Dimensions } from 'react-native';

export default function Home({ navigation }) {
    const [text, settext] = useState("");
    const [list, setlist] = useState([]);
    const handlelist = () => {
        setlist([...list, text])
        settext("")
    }
    let handleDelete = (index) => {
        let newlist = list.filter((_, i) => i !== index);
        setlist(newlist)
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontWeight: "bold", borderBottomColor: ' yellow', borderBottomWidth: 2, paddingBottom: 5, }}>
                Todo App</Text>
            <View style={{ display: 'flex', marginTop: 15, flexDirection: "row", justifyContent: 'space-evenly', borderBottomColor: ' yellow', borderBottomWidth: 2, paddingBottom: 10, }}>
                <TextInput
                    value={text}
                    onChangeText={(e) => settext(e)
                    }
                    style={{ width: "60%", height: 40, padding: 10, borderRadius: 40, backgroundColor: "whitesmoke", }}
                    placeholder='Write Anything'
                />
                <TouchableOpacity style={styles.button} onPress={handlelist}>
                    <Text style={styles.buttonText}>Add Todo</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={list}
                renderItem={({item, index }) => (
                    <View style={styles.todoitem}>
                        <TouchableOpacity  
                        style={{display: "flex", justifyContent:'space-between', flexDirection: 'row'}}                  
                        onPress={() => navigation.navigate('Task', { todo: item })} >
                            <Text style={styles.value}>{item} </Text>
                            <TouchableOpacity onPress={() => handleDelete(index)}>
                                <Text style={styles.del}>Delete</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        flex: 1,
    },
    button: {
        backgroundColor: 'yellowgreen',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40, // This adds rounded corners to the button
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white', // Text color
        fontWeight: 'bold', // Make the text bold
        borderRadius: 40,
    },
    todoitem: {
        width: "100%", // Ya apne design ke mutabiq set karein
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "gray",
        borderRadius: 40,
    },
    value: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 20,
    },
    del: {
        color: "red",
        backgroundColor: "whitesmoke",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 40,
        fontWeight: "bold",
        fontSize: 14,
    }
});
