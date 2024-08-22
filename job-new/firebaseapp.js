

// Import necessary libraries
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Jobui from './Jobui';
import firebase from './firebase';
 // Import Firebase instance


// Another Page Screen
const AnotherPageScreen = () => {
  return (
    <Jobui/>
  );
};

// Job Posting Screen
const JobPostingScreen = ({ navigation }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleApplyNow = () => {
    // Store data in Firebase
    database()
      .ref('jobs')
      .push({
        jobTitle,
        company,
        location,
        jobDescription,
      })
      .then(() => {
        console.log('Job data stored successfully!');
        Alert.alert('Job Posted Successfully');
        // Navigate to Another Page
        navigation.navigate('AnotherPage');
      })
      .catch(error => {
        console.error('Error storing job data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Job Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter job title"
        value={jobTitle}
        onChangeText={(text) => setJobTitle(text)}
      />

      <Text style={styles.label}>Company:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter company name"
        value={company}
        onChangeText={(text) => setCompany(text)}
      />

      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter job location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      <Text style={styles.label}>Job Description:</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Enter job description"
        multiline
        value={jobDescription}
        onChangeText={(text) => setJobDescription(text)}
      />

      <Button title="Apply Now" onPress={handleApplyNow} /><br></br>
      <Button
        title="View jobs"
        onPress={() => navigation.navigate('AnotherPage')}
      />
    </View>
  );
};

// Create a stack navigator
const Stack = createStackNavigator();

// App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JobPosting">
        <Stack.Screen name="JobPosting" component={JobPostingScreen} />
        <Stack.Screen name="AnotherPage" component={AnotherPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default App;
