import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  // updating display text whenever input changes
  const handleTextChange = (text) => {
    setInputText(text);
    setDisplayText(text);
  };

  // clear both input and display when the Clear button is clicked
  const handleClear = () => {
    setInputText('');
    setDisplayText('');
  };

  // clear input when focused
  const handleFocus = () => {
    setInputText('');
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>Olympia Santaguida-Antunes</Text>
      <Text style={styles.studentId}>Student ID: 101469745</Text>

      {/* text input */}
      <TextInput
        style={styles.input}
        placeholder="Enter text here..."
        value={inputText}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
      />

      {/* clear button */}
      <Button title="Clear" onPress={handleClear} />

      {/* display text */}
      <Text style={styles.displayText}>{displayText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  studentId: {
    fontSize: 18,
    color: 'black',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  displayText: {
    fontSize: 18,
    marginTop: 20,
    color: 'red',
  },
});