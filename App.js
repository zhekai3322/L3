import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View, Picker, TouchableOpacity, ToastAndroid} from 'react-native';
import { Picker as NewPicker } from '@react-native-picker/picker';

export default function App() {
    const [userType, setUserType] = useState('');
    const [userName, setUserName] = useState('');

    // Exercise 1D + 1F
    const handleLogin = () => {
        ToastAndroid.show(`Welcome ${userType} ${userName}`, ToastAndroid.SHORT);
    };
    // Exercise 1G
    const handleUserTypeChange = (itemValue) => {
        setUserType(itemValue);
    };
    // Exercise 1G
    const handleUserNameChange = (text) => {
        setUserName(text);
    };

    return (
        <View style={styles.container}>
            {/*exercise 1B*/}
            <Text>User Type:</Text>
            <NewPicker
                selectedValue={userType}
                style={styles.picker}
                onValueChange={handleUserTypeChange}
            >
                <NewPicker.Item label="Admin" value="Admin" />
                <NewPicker.Item label="Guest" value="Guest" />
            </NewPicker>
            {/*Exercise 1G*/}
            <Text>User Name:</Text>
            <TextInput style={styles.input} value={userName} onChangeText={handleUserNameChange} />
            {/*exercise 1A*/}
            <Text>Password:</Text>
            <TextInput style={styles.input} />
            {/*Exercise 1C*/}
            {/*<Button title="LOG IN" />*/}
            {/*Exercise 1E*/}
            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    picker: {
        width: '100%',
        marginBottom: 10,
    },
    buttonText: {
        color: '#4CAF50',
        fontSize: 16,
    },
});
