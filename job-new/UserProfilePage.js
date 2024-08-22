
import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.FirstContainer}>
          <Image style={styles.profileImage} source={require('./img.jpg')} />
          <Text style={{fontSize:20, fontWeight:'bold',padding:10}}>Priya</Text>
          <View style={{flexDirection:'row', justifyContent:"flex-start"}}> 
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Role :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> Developer</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Phone :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> 960******</Text></Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:"flex-start"}}>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Address :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  Hyderabad, Telangana, 507203</Text></Text>
         
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>E-Mail :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  nani**@gmail.com</Text></Text>
        </View>
         

        </View>
        <View style={styles.sideBySideContainer}>
          <ScrollView style={{ flex: 0.2, padding:5,  }}>
            <View style={styles.blueContainer}>
            <Text style={{ fontWeight:'bold', fontSize:18, paddingBottom:10}}>Skills</Text>
              <Text style={styles.button}>Python</Text>
              <Text style={styles.button}>Java</Text>
              <Text style={styles.button}>Android</Text>
              <Text style={styles.button}>Flutter</Text>
              <Text style={styles.button}>React Native</Text>
              <Text style={styles.button}>javaScript</Text>
              <Text style={styles.button}>C++</Text>
              <Text style={styles.button}>C#</Text>
              <Text style={styles.button}>API</Text>
              <Text style={styles.button}>OOPS</Text>
            </View>
          </ScrollView>
          
          
          
          <ScrollView style={{ flex: 0.8 ,padding:5, }}>
    <View style={styles.EducationContainer}>
                <Text style={{fontSize:20, fontWeight:'bold',padding:10, alignSelf:'center'}}>Education Details</Text>
        <View style={{ justifyContent:"flex-start",padding: 5,
    backgroundColor: 'honeydew',
    borderRadius: 5,
    shadowRadius: 5,
    marginBottom: 10,}}> 
        <Text style={{fontSize:20, fontWeight:'bold',padding:10, alignSelf:'center'}}>Degree</Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>College :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> Vellore Institute Of Technology- Bhopal</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>B-Tech :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> Computer Science And Engineering </Text></Text>
          
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Address :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  kotrikalan, Bhopal</Text></Text>
         
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>E-Mail :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  Vitbhopal.ac.in</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>CGPA :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  8.0</Text></Text>
        </View>
        <View style={{ justifyContent:"flex-start",padding: 5,
    backgroundColor: 'honeydew',
    borderRadius: 5,
    shadowRadius: 5,
    marginBottom: 10,}}> 
        <Text style={{fontSize:20, fontWeight:'bold',padding:10, alignSelf:'center'}}>XII</Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>College :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> Narayana</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Course :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> CSE</Text></Text>
          
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Address :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  Hyderabad</Text></Text>
         
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>E-Mail :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  Narayana@gmail.com</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Percentage :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  93.4</Text></Text>
        </View>
        <View style={{ justifyContent:"flex-start",padding: 5,
    backgroundColor: 'honeydew',
    borderRadius: 5,
    shadowRadius: 5,
    marginBottom: 10,}}> 
        <Text style={{fontSize:20, fontWeight:'bold',padding:10, alignSelf:'center'}}>10th</Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>School :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> Little Hearts</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Board :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> Telangana State board </Text></Text>
          
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Address :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  Hyderabad</Text></Text>
         
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>E-Mail :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  Littelehearts.ac.in</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Percentage :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  93</Text></Text>
        </View>
        
    </View> 
          </ScrollView>
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  FirstContainer: {
    shadowRadius: 5,
    borderRadius: 5,
    backgroundColor: 'azure',
    padding: 10,
    marginBottom: 10,
    paddingLeft: 20,
  },
  sideBySideContainer: {
    flexDirection: 'row',
  },
  blueContainer: {
    shadowRadius: 5,
    borderRadius: 5,
    backgroundColor: 'azure',
    padding: 10,
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'center'
  },
  EducationContainer: {
    
    shadowRadius: 5,
    borderRadius: 5,
    backgroundColor: 'azure',
    padding: 10,
    marginBottom: 10,
    paddingLeft: 20,
    
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    width:100,
    padding: 5,
    // backgroundColor: 'honeydew',
    // borderRadius: 5,
    // shadowRadius: 2,
    marginBottom: 10,
    fontSize:16, fontWeight:'400',padding:10
  },
});

export default App;
