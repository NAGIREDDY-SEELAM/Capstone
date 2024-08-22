//import asynchronous function for storage
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [complaint, setComplaint] = useState('');
  const [complaintHistory, setComplaintHistory] = useState([]);

  const ConfirmBuy = async () => {
    if (!name.trim() || !phoneNumber.trim() || !complaint.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      const newComplaint = { name, phoneNumber, complaint };
      const updatedComplaintHistory = [...complaintHistory, newComplaint];
      await AsyncStorage.setItem('complaintHistory', JSON.stringify(updatedComplaintHistory));
      setComplaintHistory(updatedComplaintHistory);
      setName('');
      setPhoneNumber('');
      setComplaint('');
    } catch (error) {
      console.error('Error saving complaint:', error);
    }
  };
  const confirm=()=>{
    alert('your Order Placed')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
     <View style={styles.insidecontainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your perminanent Address:</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={complaint}
          onChangeText={setComplaint}
          placeholder="Enter Your perminanent Address"
          multiline
        />
      </View>
      <Button title="Confirm Buy" onPress={ConfirmBuy} />
      
      </View> 
      <View style={styles.complaintHistoryContainer}>
        <Text style={styles.historyTitle}>Your Details:</Text>
        {complaintHistory.map((item, index) => (
          <View key={index} style={styles.complaintItem}>
            <Text style={{fontWeight:'500',fontSize:18,padding:10}}>Name: <Text style={{fontWeight:'normal',fontSize:16}}>{item.name}</Text></Text>
            <Text style={{fontWeight:'500',fontSize:18,padding:10}}>Phone Number:<Text style={{fontWeight:'normal', fontSize:16}}> {item.phoneNumber}</Text></Text>
            <Text style={{fontWeight:'500',fontSize:18,padding:10}}>address: <Text style={{fontWeight:'normal', fontSize:16}}>{item.complaint}</Text></Text>
            
      
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowRadius: 5,
    borderRadius: 5,
    backgroundColor: 'azure', 
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'stretch',
    
    padding: 20,
  },
  insidecontainer:{
    shadowRadius: 5,
    borderRadius: 5,
    backgroundColor: 'azure', 
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'stretch',
    
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight:'600'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  complaintHistoryContainer: {
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  complaintItem: {
    shadowRadius: 5,
    borderRadius: 5,
    backgroundColor: 'azure', 
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'stretch',
    
    padding: 20,
  },
  text1:{
    fontWeight:'bold',
    fontSize:22
  },
  text1:{
    fontWeight:'normal',
    fontSize:16
  }
});

export default ComplaintForm;
