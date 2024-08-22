

// Import necessary libraries
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image,ImageBackground,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

// Job Posting Screen
const App = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleApplyNow = () => {
    // Check if any input field is empty
    if (!jobTitle || !company || !location || !jobDescription) {
      alert('Please fill in all fields.');
      return;
    }

    // Handle the logic for applying to the job with the entered details
    // For now, let's just log the details to the console
    console.log('Job Title:', jobTitle);
    console.log('Company:', company);
    console.log('Location:', location);
    console.log('Job Description:', jobDescription);

    // Clear form input values
    setJobTitle('');
    setCompany('');
    setLocation('');
    setJobDescription('');
    setImageUri(null);

    // Show alert message
    alert(
      'Your application has been submitted successfully!',
      'Your application has been submitted successfully.',
      [
        {
          text: 'OK',
          onPress: () => {
            // Optionally, navigate to another page or perform any other action
          }
        }
      ],
      { cancelable: false }
    );
  };

  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled) {
      return;
    }

    setImageUri(pickerResult.uri);
  };

  return (
    <ImageBackground
    source={require('./Blur.png') }
    style={{  width:'100%',height:'100%' }}
  >
    <View style={styles.container}>
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        value={jobTitle}
        onChangeText={(text) => setJobTitle(text)}
      />

      <Text style={styles.label}>Phno No:</Text>
      <TextInput
        style={styles.input}
        placeholder=" Enter Phno No"
        value={company}
        keyboardType='numeric'
        onChangeText={(text) => setCompany(text)}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      <Text style={styles.label}>Job Description:</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Describe your previous Role"
        multiline
        value={jobDescription}
        onChangeText={(text) => setJobDescription(text)}
      />
      
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      

        <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:10, alignSelf:'stretch',marginBottom:10} }
             onPress={handleImageUpload} >
              <Text style={styles.buynow}>Upload Resume</Text>
              </TouchableOpacity>
    
      
      
      <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:10, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Apply Now</Text>
              </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    shadowRadius: 2,
    borderRadius: 5,
     
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'stretch',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom:7
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  image: {
    width: 600,
    height: 400,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  buynow:{
    fontWeight:'500',
     alignSelf:'center',
     color:'white',
     fontSize:16
    },
});

export default App;
