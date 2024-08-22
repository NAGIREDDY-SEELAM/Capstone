
import { StyleSheet, Text, View, TouchableOpacity, TextInput ,Button,ImageBackground} from 'react-native';
import React, { useState, useEffect } from 'react';

import { firebase } from './config';
import { ScrollView } from 'react-native-web';

const Home = () => {
    const todoRef = firebase.firestore().collection('HousingData');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Location, setLocation] = useState('');
    const [PhonNo, setPhonNo] = useState('');

    const [dataList, setDataList] = useState([]);



const addField = () => {
  if (FirstName && FirstName.length > 0 && LastName && LastName.length > 0 && Location && Location.length > 0 && PhonNo && PhonNo.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        FirstName: FirstName,
        LastName: LastName,
          Location: Location,
          PhonNo:PhonNo,
          createdAt: timestamp
          
      };
      todoRef
          .add(data)
          .then(() => {
              setFirstName('');
              setLastName('');
              setLocation('');
              setPhonNo('');
              alert('Rented successfully.');
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
      <ImageBackground
      source={require('./Blur.png') }
      style={{  width:'100%',height:'100%' }}
    >  
<ScrollView style={styles.container}>
    <View style={styles.mainview}>
    <Text style={{padding:20,fontWeight:'bold', fontSize:28,alignSelf:'center'}}>Fill Details To Rent House</Text>
    <Text style={styles.label}>First Name:</Text>
  <TextInput
    
    onChangeText={(text) => setFirstName(text)}
    value={FirstName}
    style={styles.input}
/>
<Text style={styles.label}>Last Name :</Text>
<TextInput
    
    onChangeText={(text) => setLastName(text)}
    value={LastName}
    style={styles.input}
/>
<Text style={styles.label}> Perminant Address:</Text>
<TextInput
    
    onChangeText={(text) => setLocation(text)}
    value={Location}
    style={styles.input}
/>
<Text style={styles.label}>Phon No:</Text>
<TextInput
    
    onChangeText={(text) => setPhonNo(text)}
    value={PhonNo}
    style={styles.input}
/>

           
<TouchableOpacity onPress={addField}>
  <Text style={{padding:10,backgroundColor:'dodgerblue', borderRadius:10,alignSelf:'center', fontWeight:'bold'}}>Confirm Buy</Text></TouchableOpacity>

            <View style={styles.container}>
        {/* Render input fields for user data */}
        {/* Render button to submit user data */}

        {/* Display added data */}
<View style={{ marginTop: 20 }}>
            {dataList.map(item => (
        <View key={item.id} style={{ marginBottom: 10 }}>
                    
    <View style={styles.jobListing}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            First Name : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.FirstName}</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Last Name : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.LastName}</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.Location}</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            PhonNo : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.PhonNo}</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
             Address: <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.Location}</Text>
          </Text>
          

          
        

          
        </View>
                </View>
                
            ))}
        </View>
    </View>

</View>
        
        
</ScrollView>
</ImageBackground>
        
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    padding:20,
     
      
      
  },
  mainview:{
    flex:1,
    
    padding:20,
     
      

  },
  label: {

    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom:7
  },
  input: {
      
      padding: 10,
      marginVertical: 5,
      
      borderRadius: 5,
      paddingTop:20,
      shadowRadius:3
  },
  jobListing: {
    width:300,
    height:230,
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 10,

    
    paddingTop:20, 
    paddingBottom:20, 
      
  },
});


export default Home;

