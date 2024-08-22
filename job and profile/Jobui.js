
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, Picker,ImageBackground,Alert , alert,TouchableOpacity} from 'react-native';
import PostJob from './JobPostingPage';
const App = ({navigation }) => {
  const handleApplyNow = () => {
    navigation.navigate('Userinfo');
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
        <TouchableOpacity style={styles.button} onPress={{}}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
      </View>

      {/* <View style={styles.searchBar}>
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
        <TouchableOpacity style={styles.button} onPress={{}}>
            <Text style={styles.buttonText}>Clear All</Text>
          </TouchableOpacity>
      </View> */}
      <Text style={{fontWeight:'800', fontSize:32,color:'#022b47',alignSelf:'center',padding:20}}>Today Posted </Text>
      <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingTop:20, paddingBottom:20,   borderRadius:15 }}>
        
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center',
     }}>Teacher</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Narayana</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>4LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Science Teacher</Text>
          </Text>
          

          
          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center', }}>Compounder</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47',color:'#022b47' }}>Asha Hospital</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Khammam</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>3.5LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Nursing</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Camera</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Amrutha Photography</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>10LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Junior Photographer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Graphic Designer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Sai Technology</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Delhi</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>8LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Content Designer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Delivery Agent</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Amrutha Delivery</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Mumbai</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>4LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Delivery Agent</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Teacher</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Little Hearts</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>12LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Mathematics Teacher</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Python Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>TCS</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Banglore</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>14LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Senior Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>java Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Infosys</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>12.5LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Junior-Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>UX Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Infosys</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>12.3LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>React-Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>UX Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Infosys</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>12LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>React-Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        
        </View>
        {/* Add more job listings here */}
      </ScrollView>
      <Text style={{fontWeight:'800', fontSize:32,color:'#022b47',alignSelf:'center',padding:20}}>Last Week  </Text>
      <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingTop:20, paddingBottom:20,   borderRadius:15 }}>
        
      <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Delivery Agent</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Amrutha Delivery</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Mumbai</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>4LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Delivery Agent</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Teacher</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Little Hearts</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>14LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Mathematics Teacher</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Python Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>TCS</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Banglore</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>10.5LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Senior Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>java Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Infosys</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>14LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Junior-Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>UX Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Infosys</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>6LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>React-Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Compounder</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Asha Hospital</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Khammam</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>5LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Nursing</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Camera</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Amrutha Photography</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>15LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Senior Photographer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Graphic Designer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Sai Technology</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Delhi</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>6LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Content Designer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Delivery Agent</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Amrutha Delivery</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Mumbai</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>4LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Delivery Agent</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Teacher</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Little Hearts</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>9LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Physics Teacher</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>Python Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>TCS</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Banglore</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>10LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Senior Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>java Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Infosys</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>11.5LPA</Text>
          </Text>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Junior-Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>UX Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Infosys</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>8LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>React-Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.jobListing}>
          <Text style={{ fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487',
    alignSelf:'center' }}>UX Developer</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            company : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Infosys</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Location : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>Hyderabad</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Package : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>6LPA</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>
            Job : <Text style={{ fontSize: 15, fontWeight: 'normal',color:'#022b47' }}>React-Developer</Text>
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleApplyNow}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
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

// Styles
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
    height:260,
    margin: 10,
    padding: 10,
    
    borderWidth: 4,
    borderRadius: 10,
    backgroundColor: 'rgba(171, 199, 255, 0.3)'
  },
  button: {
    
     backgroundColor: '#086487',
    borderRadius: 25,
    alignSelf:'center',
    padding:10,
    
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    alignSelf:'center'
   // backgroundColor:'#702E52'
  },
});

export default App;
