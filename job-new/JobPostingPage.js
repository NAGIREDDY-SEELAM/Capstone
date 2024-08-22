
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
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';



// // Job Posting Screen

// const App = () => {
//   const [jobTitle, setJobTitle] = useState('');
//   const [company, setCompany] = useState('');
//   const [location, setLocation] = useState('');
//   const [jobDescription, setJobDescription] = useState('');

//   const handleApplyNow = () => {
//     // Handle the logic for applying to the job with the entered details
//     // For now, let's just log the details to the console
//     console.log('Job Title:', jobTitle);
//     console.log('Company:', company);
//     console.log('Location:', location);
//     console.log('Job Description:', jobDescription);
//     alert('Job Posted Successfully')

//     // Navigate to Another Page
    
//   };
//   return (
//     <View style={styles.container}>
//     <Text style={styles.label}>Job Title:</Text>
//     <TextInput
//       style={styles.input}
//       placeholder="Enter job title"
//       value={jobTitle}
      
//       onChangeText={(text) => setJobTitle(text)}
//     />

//     <Text style={styles.label}>Company:</Text>
//     <TextInput
//       style={styles.input}
//       placeholder="Enter company name"
//       value={company}
//       onChangeText={(text) => setCompany(text)}
//     />

//     <Text style={styles.label}>Location:</Text>
//     <TextInput
//       style={styles.input}
//       placeholder="Enter job location"
//       value={location}
//       onChangeText={(text) => setLocation(text)}
//     />

//     <Text style={styles.label}>Job Description:</Text>
//     <TextInput
//       style={[styles.input, { height: 100 }]}
//       placeholder="Enter job description"
//       multiline
//       value={jobDescription}
//       onChangeText={(text) => setJobDescription(text)}
//     />

//     <Button title="Post  Now" onPress={handleApplyNow} /><br></br>
    
//   </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor:'azure'
//   },
//   label: {

//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//     paddingBottom:7
//   },
//   input: {
   
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//     borderRadius:5,
//     shadowRadius:2
//   },
// });

// export default App;




import { StyleSheet, Text, View, TouchableOpacity, TextInput ,Button} from 'react-native';
import React, { useState, useEffect } from 'react';

import { firebase } from './config';
import { ScrollView } from 'react-native-web';

const Home = ({navigation}) => {

  const handleApplyNow = () => {
    navigation.navigate('Userinfo');
    // console.log('hello');
  };
    const todoRef = firebase.firestore().collection('JobData');
    const [JobTitle, setJobTitle] = useState('');
    const [Company, setCompany] = useState('');
    const [Location, setLocation] = useState('');
    const [JobRole, setJobRole] = useState('');
    const [JobPackage, setJobPackage] = useState('');

    const [dataList, setDataList] = useState([]);



const addField = () => {
  if (JobTitle && JobTitle.length > 0 && Company && Company.length > 0 && Location && Location.length > 0 && JobRole && JobRole.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        JobTitle: JobTitle,
        Company: Company,
          Location: Location,
          JobRole:JobRole,
          JobPackage:JobPackage,
          createdAt: timestamp
      };
      todoRef
          .add(data)
          .then(() => {
              setJobTitle('');
              setCompany('');
              setLocation('');
              setJobRole('');
              setJobPackage('');
          })
          .catch((error) => {
              alert(error);
          });
  } else {
      alert('Please fill in all fields.');
  }
};
useEffect(() => {
  const fetchData = async () => {
      try {
          const snapshot = await todoRef.get();
          const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setDataList(fetchedData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  fetchData();
}, []);



    return (
<ScrollView style={styles.container}>
    <View style={styles.mainview}>
    <Text style={{padding:20,fontWeight:'bold', fontSize:28,alignSelf:'center'}}>POST JOB NOW</Text>
    <Text style={styles.label}>Job Title:</Text>
  <TextInput
    
    onChangeText={(text) => setJobTitle(text)}
    value={JobTitle}
    style={styles.input}
/>
<Text style={styles.label}>Company Name:</Text>
<TextInput
    
    onChangeText={(text) => setCompany(text)}
    value={Company}
    style={styles.input}
/>
<Text style={styles.label}>Company Location:</Text>
<TextInput
    
    onChangeText={(text) => setLocation(text)}
    value={Location}
    style={styles.input}
/>
<Text style={styles.label}>Job Title:</Text>
<TextInput

    onChangeText={(text) => setJobRole(text)}
    value={JobRole}
    style={styles.input}
/>
<Text style={styles.label}>Package:</Text>
<TextInput

    onChangeText={(text) => setJobPackage(text)}
    value={JobPackage}
    style={styles.input}
/>

           
<TouchableOpacity onPress={addField}><Text style={{padding:10,backgroundColor:'dodgerblue', borderRadius:10,alignSelf:'center', fontWeight:'bold'}}>Post Now</Text></TouchableOpacity>

            <View style={styles.container}>
        {/* Render input fields for user data */}
        {/* Render button to submit user data */}

        {/* Display added data */}
<View style={{ marginTop: 20 }}>
            {dataList.map(item => (
        <View key={item.id} style={{ marginBottom: 10 }}>
                    
    <View style={styles.jobListing}>
          <Text style={{ fontSize: 25, fontWeight: 'bolder', padding: 5 }}>{item.JobTitle}</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.Company}</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.Location}</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.JobRole}</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.JobPackage}</Text>
          </Text>
          <Button title="Apply Now" onPress={handleApplyNow} />
        

          
        </View>
                </View>
                
            ))}
        </View>
    </View>

</View>
        
        
</ScrollView>

        
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    padding:20,
     
      backgroundColor: 'white',
      
  },
  mainview:{
    flex:1,
    
    padding:20,
     
      backgroundColor: 'azure',

  },
  label: {

    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom:7
  },
  input: {
      backgroundColor: 'lightgray',
      padding: 10,
      marginVertical: 5,
      
      borderRadius: 5,
      paddingTop:20
  },
  jobListing: {
    width:300,
    height:250,
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 10,

    
    paddingTop:20, 
    paddingBottom:20, 
     backgroundColor:'azure', 
  },
});


export default Home;

