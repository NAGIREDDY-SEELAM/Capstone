// // // EnterDetailsScreen.js
// // import React from 'react';
// // import { View, TextInput, Button } from 'react-native';

// // const EnterDetailsScreen = () => {
// //   // State for user details
// //   const [name, setName] = React.useState('');
// //   const [email, setEmail] = React.useState('');
// //   const [phone, setPhone] = React.useState('');

// //   const handleApply = () => {
// //     // Handle submission of user details
// //     console.log('Name:', name);
// //     console.log('Email:', email);
// //     console.log('Phone:', phone);
// //   };

// //   return (
// //     <View>
// //       <TextInput
// //         placeholder="Name"
// //         value={name}
// //         onChangeText={setName}
// //       />
// //       <TextInput
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //       />
// //       <TextInput
// //         placeholder="Phone"
// //         value={phone}
// //         onChangeText={setPhone}
// //         keyboardType="phone-pad"
// //       />
// //       <Button title="Apply" onPress={handleApply} />
// //     </View>
// //   );
// // };

// // export default EnterDetailsScreen;




// // // Import necessary libraries
// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { NavigationContainer } from '@react-navigation/native';
// // // import Jobui from './Jobui';

// // // Another Page Screen
// // // const AnotherPageScreen = () => {
// // //   return (
// // //     <Jobui/>
// // //   );
// // // };

// // // Job Posting Screen
// // const JobPostingScreen = ({ navigation }) => {
// //   const [jobTitle, setJobTitle] = useState('');
// //   const [company, setCompany] = useState('');
// //   const [location, setLocation] = useState('');
// //   const [jobDescription, setJobDescription] = useState('');

// //   const handleApplyNow = () => {
// //     // Handle the logic for applying to the job with the entered details
// //     // For now, let's just log the details to the console
// //     console.log('Job Title:', jobTitle);
// //     console.log('Company:', company);
// //     console.log('Location:', location);
// //     console.log('Job Description:', jobDescription);
// //     alert('Job Posted Successfully')

// //     // Navigate to Another Page
    
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.label}>Job Title:</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter job title"
// //         value={jobTitle}
        
// //         onChangeText={(text) => setJobTitle(text)}
// //       />

// //       <Text style={styles.label}>Company:</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter company name"
// //         value={company}
// //         onChangeText={(text) => setCompany(text)}
// //       />

// //       <Text style={styles.label}>Location:</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter job location"
// //         value={location}
// //         onChangeText={(text) => setLocation(text)}
// //       />

// //       <Text style={styles.label}>Job Description:</Text>
// //       <TextInput
// //         style={[styles.input, { height: 100 }]}
// //         placeholder="Enter job description"
// //         multiline
// //         value={jobDescription}
// //         onChangeText={(text) => setJobDescription(text)}
// //       />

// //       <Button title="Apply Now" onPress={handleApplyNow} /><br></br>
// //       {/* <Button
// //         title="View jobs"
// //         onPress={() => navigation.navigate('AnotherPage')}
// //       /> */}
// //     </View>
// //   );
// // };

// // // Create a stack navigator
// // const Stack = createStackNavigator();

// // // App component
// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="JobPosting">
// //         <Stack.Screen name="JobPosting" component={JobPostingScreen} />
// //         {/* <Stack.Screen name="AnotherPage" component={AnotherPageScreen} /> */}
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // // Styles
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor:'azure'
// //   },
// //   label: {

// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginTop: 10,
// //     paddingBottom:7
// //   },
// //   input: {
   
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     paddingLeft: 10,
// //     borderRadius:5,
// //     shadowRadius:2
// //   },
// // });

// // export default App;




// // Import necessary libraries
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';



// // Job Posting Screen

// const App = () => {
//   const [jobTitle, setJobTitle] = useState('');
//   const [company, setCompany] = useState('');
//   const [location, setLocation] = useState('');
//   const [jobDescription, setJobDescription] = useState('');
//   const [imageUri, setImageUri] = useState(null);

//   const handleApplyNow = () => {
//     // Handle the logic for applying to the job with the entered details
//     // For now, let's just log the details to the console
//     console.log('Job Title:', jobTitle);
//     console.log('Company:', company);
//     console.log('Location:', location);
//     console.log('Job Description:', jobDescription);
  
//     // Clear form input values
//     setJobTitle('');
//     setCompany('');
//     setLocation('');
//     setJobDescription('');
//     setImageUri(null);
  
//     // Show alert message
//     alert(
//       'Your application has been submitted successfully!',
//       'Your application has been submitted successfully.',
//       [
//         {
//           text: 'OK',
//           onPress: () => {
//             // Optionally, navigate to another page or perform any other action
//           }
//         }
//       ],
//       { cancelable: false }
//     );
//   };
  
//   const handleImageUpload = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!permissionResult.granted) {
//       alert('Permission to access camera roll is required!');
//       return;
//     }

//     const pickerResult = await ImagePicker.launchImageLibraryAsync();
//     if (pickerResult.cancelled) {
//       return;
//     }

//     setImageUri(pickerResult.uri);

//   };
//   return (
//     <View style={styles.container}>
//     <Text style={styles.label}>Full Name:</Text>
//     <TextInput
//       style={styles.input}
//       placeholder="Enter Your Name"
//       value={jobTitle}
      
//       onChangeText={(text) => setJobTitle(text)}
//     />

//     <Text style={styles.label}>Phno No:</Text>
//     <TextInput
//       style={styles.input}
//       placeholder=" Enter Phno No"
//       value={company}
//       keyboardType='numeric'
//       onChangeText={(text) => setCompany(text)
//       }
//     />

//     <Text style={styles.label}>Address:</Text>
//     <TextInput
//       style={styles.input}
//       placeholder="Address"
//       value={location}
//       onChangeText={(text) => setLocation(text)}
//     />

//     <Text style={styles.label}>Job Description:</Text>
//     <TextInput
//       style={[styles.input, { height: 100 }]}
//       placeholder="Describe your previous Role"
//       multiline
//       value={jobDescription}
      
//       onChangeText={(text) => setJobDescription(text)}
//     />
//      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
//       <Button title="Upload Resume" onPress={handleImageUpload} style={{borderRadius:10}} />
    
// <br></br>
//     <Button style={{padding:20, paddingTop:20}} title="Apply Now" onPress={handleApplyNow} /><br></br>
    
//   </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     shadowRadius: 2,
//     borderRadius: 5,
//     backgroundColor: 'azure', 
//     marginBottom: 10,
//     paddingLeft: 20,
//     alignItems:'stretch',
    
//     padding: 20,
//   },
//   label: {

//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//     paddingBottom:7
//   },
//   input: {
   
    
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 10,
//     fontSize: 16,
//   },
//   image: {
//     width: 600,
//     height: 400,
//     resizeMode: 'cover',
//     marginBottom: 20,
//   },
// });

// export default App;



// Import necessary libraries
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
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
      
      <Button title="Upload Resume" onPress={handleImageUpload} style={{borderRadius:10}} />
      
      <br></br>
      
      <Button style={{padding:20, paddingTop:20}} title="Apply Now" onPress={handleApplyNow} /><br></br>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    shadowRadius: 2,
    borderRadius: 5,
    backgroundColor: 'azure', 
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
});

export default App;
