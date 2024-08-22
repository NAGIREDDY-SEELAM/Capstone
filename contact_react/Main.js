import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, TextInput , Text, ScrollView, Linking,ImageBackground} from 'react-native';
import Main from './App';

const handleAddTodo = () => {
  return (
    <ImageBackground
    source={require('./wall2.jpg') }
    style={{ flex: 1, width:'100%',height:'100%' }}
  >
    <View style={{  flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
      flexDirection: 'column',}}>
     <Main/>
      </View>
      </ImageBackground>
      );
  
};



    export default handleAddTodo;