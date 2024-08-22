
import { View, ScrollView, StyleSheet, Text, Image, TextInput, TouchableOpacity ,ImageBackground} from 'react-native';
import React, { useState, useEffect } from 'react';

import { firebase } from './config';
const App = () => {
  const todoRef = firebase.firestore().collection('ProfileData');
  const [dataList, setDataList] = useState([]);


  // basic details

  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [Email, setEmail] = useState('');

  // DegreeDetails

  const [CollegeName, setCollegeName] = useState('');
  const [DegreeName, setDegreeName] = useState('');
  const [DepartmentName, setDepartmentName] = useState('');
  const [DegreePercentage, setDegreePercentage] = useState('');

  // 12th Details

  const [CollegeName12, setCollegeName12] = useState('');
  const [DegreeName12, setDegreeName12] = useState('');
  const [DepartmentName12, setDepartmentName12] = useState('');
  const [DegreePercentage12, setDegreePercentage12] = useState('');


   // 10th Details

   const [CollegeName10, setCollegeName10] = useState('');
   const [DegreeName10, setDegreeName10] = useState('');
   const [DepartmentName10, setDepartmentName10] = useState('');
   const [DegreePercentage10, setDegreePercentage10] = useState('');
 
 
// storing data and retriving from database




const addField = () => {
  if (Name && Name.length > 0 && Phone && Phone.length > 0 && Address && Address.length > 0 && Email && Email.length > 0
     && CollegeName && CollegeName.length > 0 && DegreeName && DegreeName.length > 0 && DepartmentName && DepartmentName.length > 0 && DegreePercentage && DegreePercentage.length > 0
      && CollegeName12 && CollegeName12.length > 0 && DegreeName12 && DegreeName12.length > 0 && DepartmentName12 && DepartmentName12.length > 0 && DegreePercentage12 && DegreePercentage12.length > 0 
      && CollegeName10 && CollegeName10.length > 0 && DegreeName10 && DegreeName10.length > 0 && DepartmentName10 && DepartmentName10.length > 0 && DegreePercentage10 && DegreePercentage10.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        Name: Name,
        Phone: Phone,
        Address: Address,
        Email: Email,
        CollegeName: CollegeName,
        DegreeName: DegreeName,
        DepartmentName: DepartmentName,
        DegreePercentage: DegreePercentage,
        CollegeName12: CollegeName12,
        DegreeName12: DegreeName12,
        DepartmentName12: DepartmentName12,
        DegreePercentage12: DegreePercentage12,
        CollegeName10: CollegeName10,
        DegreeName10: DegreeName10,
        DepartmentName10: DepartmentName10,
        DegreePercentage10: DegreePercentage10,
        createdAt: timestamp
      };
      todoRef
          .add(data)
          .then(() => {
              setName('');
              setPhone('');
              setAddress('');
              setEmail('');
              setCollegeName('');
              setDegreeName('');
              setDepartmentName('');
              setDegreePercentage('');
              setCollegeName12('');
              setDegreeName12('');
              setDepartmentName12('');
              setDegreePercentage12('');
              setCollegeName10('');
              setDegreeName10('');
              setDepartmentName10('');
              setDegreePercentage10('');
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
   
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

      <ImageBackground
    source={require('./Blur.png') }
    style={{  width:'100%',height:'100%' }}
  >   
        

          {/* General Details */}
          <View style={styles.mini}>
          
          <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10, alignSelf:'center',color:'#086487' }}>Basic Details</Text>

          <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>

          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={Name}
            onChangeText={text => setName(text)}
          />
          
          {/* Phone */}
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Phone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone"
            value={Phone}
            onChangeText={text => setPhone(text)}
          />
          {/* Address */}
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Address:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Address"
            value={Address}
            onChangeText={text => setAddress(text)}
          />
          {/* Email */}
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={Email}
            onChangeText={text => setEmail(text)}
          />
          </View>
          
<View style={styles.mini}>
{/* Degree Details */}

         <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10, alignSelf:'center',color:'#086487' }}>Degree Details</Text>
         <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>

         <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>College Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter College Name"
            value={CollegeName}
            onChangeText={text => setCollegeName(text)}
          />
         <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Degree Name:</Text>
         <TextInput
            style={styles.input}
            placeholder="Enter Degree Name"
            value={DegreeName}
            onChangeText={text => setDegreeName(text)}
          />

          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Department Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Department Name"
            value={DepartmentName}
            onChangeText={text => setDepartmentName(text)}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Degree Percentage:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Degree Percentage"
            value={DegreePercentage}
            onChangeText={text => setDegreePercentage(text)}
          />
          </View>
          
<View style={styles.mini}>
          {/* 12th Details */}

         <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10, alignSelf:'center',color:'#086487' }}>12th Details</Text>
         <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>

<Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>College Name:</Text>
 <TextInput
   style={styles.input}
   placeholder="Enter 12 College Name"
   value={CollegeName12}
   onChangeText={text => setCollegeName12(text)}
 />
<Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>12th Degree Name:</Text>
<TextInput
   style={styles.input}
   placeholder="Enter Degree Name"
   value={DegreeName12}
   onChangeText={text => setDegreeName12(text)}
 />

 <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>12th Department Name:</Text>
 <TextInput
   style={styles.input}
   placeholder="Enter 12th Department Name"
   value={DepartmentName12}
   onChangeText={text => setDepartmentName12(text)}
 />
 <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>12th  Percentage:</Text>
 <TextInput
   style={styles.input}
   placeholder="Enter 12th Percentage"
   value={DegreePercentage12}
   onChangeText={text => setDegreePercentage12(text)}
 />
</View>

<View style={styles.mini}>
   {/* 10th Details */}
   
   <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10, alignSelf:'center',color:'#086487' }}>10th Details</Text>
   <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>

<Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>School Name:</Text>
 <TextInput
   style={styles.input}
   placeholder="Enter 10 College Name"
   value={CollegeName10}
   onChangeText={text => setCollegeName10(text)}
 />
<Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>10th Degree Name:</Text>
<TextInput
   style={styles.input}
   placeholder="Enter Degree Name"
   value={DegreeName10}
   onChangeText={text => setDegreeName10(text)}
 />

 <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>10th Department Name:</Text>
 <TextInput
   style={styles.input}
   placeholder="Enter 10th Department Name"
   value={DepartmentName10}
   onChangeText={text => setDepartmentName10(text)}
 />
 <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>10th  Percentage:</Text>
 <TextInput
   style={styles.input}
   placeholder="Enter 10th Percentage"
   value={DegreePercentage10}
   onChangeText={text => setDegreePercentage10(text)}
 />
 </View>
 
          
          {/* Submit Button */}
          <TouchableOpacity onPress={addField}>
            <Text style={{padding:10,backgroundColor: '#086487',
    borderRadius: 25,alignSelf:'center', fontWeight:'bold',color:'white',marginTop:10}}>Create Profile</Text>
            </TouchableOpacity>

        
        </ImageBackground>
      </View>


      {/* Display profile */}
      <ImageBackground
    source={require('./Blur.png') }
    style={{  width:'100%',height:'100%' }}
  >
      <View style={{ marginTop: 20,alignSelf:'center',
     }}>
            {dataList.map(item => (
        <View key={item.id} style={{ marginBottom: 10 }}>
      <View style={styles.containerProfile}>
  
        <View style={styles.FirstContainer}>
          <Image style={styles.profileImage} source={require('./img.jpg')} />
          <Text style={{fontSize:20, fontWeight:'bold',padding:10}}>{item.Name}</Text>
          <View style={{flexDirection:'row', justifyContent:"flex-start"}}> 
          
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Phone :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.Phone}</Text></Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:"flex-start"}}>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Address :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  {item.Address}</Text></Text>
         
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>E-Mail :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  {item.Email}</Text></Text>
       
        </View>
         

        </View>
        <View style={styles.sideBySideContainer}>
          
         
    <View style={styles.EducationContainer}>
                <Text style={{fontSize:20, fontWeight:'bold',padding:10, alignSelf:'center'}}>Education Details</Text>
                <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>
        <View style={{ justifyContent:"flex-start",padding: 5,
    
    borderRadius: 5,
    shadowRadius: 1,
    marginBottom: 10,}}> 
        <Text style={{fontSize:20, fontWeight:'bold',padding:10, alignSelf:'center'}}>Degree</Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>College :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.CollegeName}</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Degree Name :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.DegreeName} </Text></Text>
          
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Course :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.DepartmentName} </Text></Text>
          
         
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>CGPA :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  {item.DegreePercentage}</Text></Text>
        </View>
        <View style={{ justifyContent:"flex-start",padding: 5,
    
    borderRadius: 5,
    shadowRadius: 1,
    marginBottom: 10,}}> 
        <Text style={{fontSize:20, fontWeight:'bold',padding:10, alignSelf:'center'}}>XII</Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>College :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.CollegeName12}</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Degree Name :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.DegreeName12} </Text></Text>
          
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Course :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.DepartmentName12}</Text></Text>

          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Percentage :<Text style={{fontSize:16, fontWeight:'400',padding:10}}>  {item.DegreePercentage12}</Text></Text>
        </View>
        <View style={{ justifyContent:"flex-start",padding: 5,
    
    borderRadius: 5,
    shadowRadius: 1,
    marginBottom: 10,}}> 
        <Text style={{fontSize:20, fontWeight:'bold',padding:10, alignSelf:'center'}}>10th</Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>School :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.CollegeName10}</Text></Text>
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Degree Name :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.DegreeName10} </Text></Text>
          
          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Course :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.DepartmentName10} </Text></Text>

          <Text style={{fontSize:18, fontWeight:'600',padding:10}}>Percentage :<Text style={{fontSize:16, fontWeight:'400',padding:10}}> {item.DegreePercentage10}</Text></Text>
        </View>
        
    </View> 
   </View>       
        
        
      </View>
      </View>
      ))}
      </View>
      </ImageBackground>
    
   
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    
  },
  mini:{
    shadowRadius:5,
    padding:20,
    borderRadius:5,
    marginBottom:10,
    marginTop:10
    
    

  },
  containerProfile: {
    padding: 20,
    
    padding:40,
    borderRadius:10,
    shadowRadius:5,
    
  },
  // FirstContainer: {
  //   shadowRadius: 1,
  //   borderRadius: 5,
    
  //   padding: 10,
  //   marginBottom: 10,
  //   paddingLeft: 20,
  // },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blueContainer: {
    shadowRadius: 5,
    borderRadius: 5,
    
    padding: 10,
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'center'
  },
  FirstContainer: {
    shadowRadius: 1,
    borderRadius: 5,
    
    padding: 10,
    marginBottom: 10,
    paddingLeft: 20,
  },
  
  blueContainer: {
    shadowRadius: 5,
    borderRadius: 5,
    
    padding: 10,
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'center'
  },
  EducationContainer: {
    
    shadowRadius: 1,
    borderRadius: 5,
    
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
  // Styles...
});

export default App;

