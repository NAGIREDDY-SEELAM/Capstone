import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, Picker,ImageBackground,Alert , alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostJob from './JobPostingPage';
import Userinfo from './Userinfo';

const Stack = createStackNavigator();
const App=({})=>{
    
    const handleApplyNow = () => {
        navigation.navigate('Userinfo'); // Navigate to Userinfo page
      };
  

    const [selectedValue, setSelectedValue] = useState('select');
    const [selectedValue2, setSelectedValue2] = useState('select');
    const [selectedValue3, setSelectedValue3] = useState('select');
  

    return (
        <ImageBackground
        source={require('./Blur.png') }
        style={{  width:'100%',height:'100%' }}
      > 
        <ScrollView style={styles.container}>
        <Text style={{fontWeight:'800', fontSize:32,color:'#022b47',alignSelf:'center',padding:20}}>JobSearch</Text>
            {/* Add navigation links for Jobs, Companies, About, etc. */}
            <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>
    
          <ImageBackground
            source={require("./job.jpg", )}
            style={{width:'100%',height:600, borderRadius:5, padding:10,}}
            resizeMode="cover">
            {/* <Text style={{alignSelf:'center',paddingTop:150,fontSize:50,fontWeight:'600',color:'white'}}>Rent Now </Text>
           */}
          </ImageBackground>
          
           
          <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>
    
          <View style={styles.searchBar}>
            <TextInput style={styles.searchInput} placeholder="Job title or keyword" />
            <TextInput style={styles.searchInput} placeholder="Company name" />
            <TextInput style={styles.searchInput} placeholder="Location" />
            <Button title="Search" onPress={handleApplyNow} />
          </View>
    
          <View style={styles.searchBar}>
            <Picker
              style={styles.searchInput}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Recently-posted" value="Recently-posted" />
              <Picker.Item label="last-week" value="last-week" />
              <Picker.Item label="Last-Month" value="Last-Month" />
            </Picker>
            <Picker
              style={styles.searchInput}
              selectedValue={selectedValue2}
              onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
            >
              <Picker.Item label="Full-time" value="Full-time" />
              <Picker.Item label="part-time" value="part-time" />
              <Picker.Item label="Contract" value="Contract" />
            </Picker>
            <Picker
              style={styles.searchInput}
              selectedValue={selectedValue3}
              onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
            >
              <Picker.Item label="Senior" value="Senior" />
              <Picker.Item label="Fresher" value="Fresher" />
              <Picker.Item label="Mid-range" value="Mid-range" />
            </Picker>
            <Button title="Clear All" onPress={handleApplyNow} style={{ padding: 10 }} />
          </View>
          <Text style={{fontWeight:'800', fontSize:32,color:'#022b47',alignSelf:'center',padding:20}}>Today Posted </Text>
          <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingTop:20, paddingBottom:20,   borderRadius:15 }}>
            
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Teacher</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Narayana</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>4LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Science Teacher</Text>
              </Text>
              
    
              <Button title="Apply Now" onPress={handleApplyNow}/>
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Compounder</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Asha Hospital</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Khammam</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>3.5LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Nursing</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Camera</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Amrutha Photography</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>10LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Junior Photographer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Graphic Designer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Sai Technology</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Delhi</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>8LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Content Designer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Delivery Agent</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Amrutha Delivery</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Mumbai</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>4LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Delivery Agent</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Teacher</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Little Hearts</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>12LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Mathematics Teacher</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Python Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>TCS</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Banglore</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>14LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Senior Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>java Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Infosys</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>12.5LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Junior-Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>UX Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Infosys</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>12.3LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>React-Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>UX Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Infosys</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>12LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>React-Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            
            </View>
            {/* Add more job listings here */}
          </ScrollView>
          <Text style={{fontWeight:'800', fontSize:32,color:'#022b47',alignSelf:'center',padding:20}}>Last Week  </Text>
          <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingTop:20, paddingBottom:20,   borderRadius:15 }}>
            
          <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Delivery Agent</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Amrutha Delivery</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Mumbai</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>4LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Delivery Agent</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Teacher</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Little Hearts</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>14LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Mathematics Teacher</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Python Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>TCS</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Banglore</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>10.5LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Senior Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>java Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Infosys</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>14LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Junior-Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>UX Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Infosys</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>6LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>React-Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Compounder</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Asha Hospital</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Khammam</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>5LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Nursing</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Camera</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Amrutha Photography</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>15LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Senior Photographer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Graphic Designer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Sai Technology</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Delhi</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>6LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Content Designer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Delivery Agent</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Amrutha Delivery</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Mumbai</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>4LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Delivery Agent</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Teacher</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Little Hearts</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>9LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Physics Teacher</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>Python Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>TCS</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Banglore</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>10LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Senior Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>java Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Infosys</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>11.5LPA</Text>
              </Text>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Junior-Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>UX Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Infosys</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>8LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>React-Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            <View style={styles.jobListing}>
              <Text style={{ fontSize:24,
        fontWeight:'700',
        padding:10,
        color:'#086487' }}>UX Developer</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                company : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Infosys</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Location : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Hyderabad</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Package : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>6LPA</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
                Job : <Text style={{ fontSize: 15, fontWeight: 'normal' }}>React-Developer</Text>
              </Text>
    
              <Button title="Apply Now" onPress={handleApplyNow} />
            </View>
            {/* Add more job listings here */}
    
    
    
          </ScrollView>
          <View>
          <PostJob/>
          </View>
          
          
        </ScrollView>
        </ImageBackground>
      );
    };

    const App2 = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={App} />
                    <Stack.Screen name="Userinfo" component={Userinfo} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          
        },
        header: {
          height: 60,
          // backgroundColor: '#f8f8f8',
          alignItems: 'center',
          justifyContent: 'center',
        },
        logo: {
          fontSize: 24,
          fontWeight: 'bold',
          
        },
        searchBar: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
          
        },
        searchInput: {
          flex: 1,
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 5,
          paddingLeft: 10,
          marginRight: 5,
          backgroundColor: '#086487',
          color:'white'
        },
        jobListing: {
          width:300,
          height:250,
          margin: 10,
          padding: 10,
          
          borderWidth: 4,
          borderRadius: 10,
          backgroundColor: 'rgba(171, 199, 255, 0.3)'
        },
      });
      
      export default App2;
      