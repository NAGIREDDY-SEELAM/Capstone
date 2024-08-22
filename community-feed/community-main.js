
// // Dependencies
// // npm install react-datepicker
// // npm install react-datepicker
// // npm install @react-native-community/datetimepicker

import React, { useState,useRef  } from 'react';
import { View, Button, Image, StyleSheet, TextInput , Text, ScrollView, ImageBackground} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import WebsiteLink from './WebsiteLink';

import {  TouchableOpacity,  FlatList } from 'react-native';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; // Import the default styles
import Complaint from './Complaint';

const SCROLL_DISTANCE = 320;

const TodoList = () => {

  const scrollViewRef = useRef();
  const [scrollX, setScrollX] = useState(0);

  const [textInput, setTextInput] = useState('');
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);

  const [imageUri, setImageUri] = useState(null);
  const [text, setText] = useState('');

  const [inputText, setInputText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = () => {
    setSubmitted(true);
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
    
    

  const handleAddTodo = () => {
    if (textInput.length > 0) {
      setTodos([...todos, { id: todos.length + 1, text: textInput, date: date }]);
      setTextInput('');
    }
  };

 // scroll back and forth

 const scrollBackward = () => {
  const newScrollX = Math.max(scrollX - SCROLL_DISTANCE, 0);
  scrollViewRef.current?.scrollTo({ x: newScrollX, y: 0, animated: true });
  setScrollX(newScrollX);
};

const scrollForward = () => {
  const newScrollX = scrollX + SCROLL_DISTANCE;
  scrollViewRef.current?.scrollTo({ x: newScrollX, y: 0, animated: true });
  setScrollX(newScrollX);
};


  return (
    <ImageBackground
    source={require('./Blur.png') }
    style={{  width:'100%',height:'100%' }}
  >
<ScrollView
 style={styles.container}>
    <View style={styles.container1}>
      
       <Text style={{fontSize:30, paddingBottom:20, borderRadius:5, fontWeight:600,alignSelf:'center',color:'#086487'}}>Announcements</Text>
       <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>
    
      
       
          
    
        <View style={{width:340, alignSelf:'center',borderRadius:35,marginTop:10,backgroundColor: 'rgba(171, 199, 255, 0.3)'}}>
    <ScrollView ref={scrollViewRef}
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.scrollViewContent}
         >
      
      <View style={styles.poster}>
        <Image source={require('./poster1.jpg')} style={styles.posterimage} />
        <Image source={require('./poster2.jpg')} style={styles.posterimage} />
        <Image source={require('./poster3.jpg')} style={styles.posterimage} />
        <Image source={require('./poster4.jpg')} style={styles.posterimage} />
        <Image source={require('./poster5.jpg')} style={styles.posterimage} />
        </View>  


    </ScrollView>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
  <View style={{ alignItems: 'flex-start', marginVertical: 10 }}>
    <TouchableOpacity onPress={scrollBackward}>
      <Image source={require('./backarrow.png')} style={{ width: 30, height: 30 }} />
    </TouchableOpacity>
  </View>
  <View style={{ alignItems: 'flex-end', marginVertical: 10 }}>
    <TouchableOpacity onPress={scrollForward}>
      <Image source={require('./Forwardarrow.png')} style={{ width: 30, height: 30 }} />
    </TouchableOpacity>
  </View>
</View>


    </View>



       




    </View>

   

    <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>
    <Text style={{fontWeight:'800', fontSize:32,color:'#022b47',alignSelf:'center',padding:20}}>Post your Complaint</Text>
    <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>
  <View>
    <Complaint/>
  </View>

  <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>

    <View style={styles.container3}>
      {/* <Text style={{alignSelf:'center',fontSize:35}}>Community Resources</Text> */}
      <Text style={{alignSelf:'center',fontSize:30, padding:10, fontWeight:'600',color:'#086487'}}>Local services</Text>
      <View style={{ flexDirection:'row',}} >
      <View style={{flexDirection:'row',padding:10}}>
               
     
      <WebsiteLink
        url="https://www.mppolice.gov.in/en"
        title="Police station"
        linkStyle={styles.link1}
      />
      </View>

      <View style={{flexDirection:'row',padding:10}}>
      
     
      <WebsiteLink
        url="https://www.youtube.com/"
        title="District office"
        linkStyle={styles.link2}
      />
      </View>
      <View style={{flexDirection:'row',padding:10}}>
      
      
     
      <WebsiteLink
        url="https://www.linkedin.com/"
        title="Complaint page"
        linkStyle={styles.link3}
      />
      </View>
    </View>
    </View>
    
    </ScrollView>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    

  },
  scrollViewContent: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
   
    
  },
  poster: {
    flexDirection: 'row',
    
    borderRadius:15,
    padding:10
  },
  posterimage: {
    width: 300,
    height: 400,
    marginHorizontal: 10,
    borderRadius:10,
    paddingRight:10
  },
  container1:{
    
    borderRadius: 5,
     
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'stretch',
    
    padding: 20,
    
  },
  container2: {
    
    borderRadius: 5,
    
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'stretch',
    
    padding: 20,
    alignItems:'center',
    
    flex:1
  },
  container3:{
    
    borderRadius: 5,
     
    marginBottom: 10,
    alignItems:'stretch',
   
    
    
    padding: 20,
    alignItems:'center',
    
  },
  container4:{
    
    borderRadius: 5,
     
    marginBottom: 10,
    paddingLeft: 20,
    alignItems:'stretch',
    
    padding: 20,
    
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#086487',
    padding: 5,
  
    alignItems: 'center',
    borderRadius: 25,
    
  },
  addButtonText: {
    color: 'white',
    fontWeight: 600,
    width:100,
    borderRadius:10,
    alignSelf:'center',
    paddingLeft:15,
    
    
  },
  todoItem: {
    flexDirection: 'row',
    
    
    backgroundColor: 'bisque',
    marginVertical: 5,
    padding:10,
    borderRadius:5,
    
  },

  image: {
    width: 600,
    height: 400,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius:10,
    alignSelf:'center'
  },
  announcementimg:{
    width: 50,
    height: 50,
    
    
   

  },
  displayText: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
    
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  link1: {
    backgroundColor: '#086487',
    color: 'white',
    fontWeight:'bold',
    fontSize: 16,
    marginBottom: 10,
    paddingLeft:5,
    borderRadius:25,
    padding:10
  },
  link2: {
    backgroundColor: '#086487',
    color: 'white',
    fontWeight:'bold',
    fontSize: 16,
    marginBottom: 10,
    paddingLeft:5,
    borderRadius:25,
    padding:10
  },
  link3: {
    backgroundColor: '#086487',
    color: 'white',
    fontWeight:'bold',
    fontSize: 16,
    marginBottom: 10,
    paddingLeft:5,
    borderRadius:25,
    padding:10
  },
 

});

export default TodoList;



