// Dependencies
// npm install react-datepicker
// npm install react-datepicker
// npm install @react-native-community/datetimepicker

import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, TextInput , Text, ScrollView, Linking ,ImageBackground,Picker} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import Picker from '@react-native-picker/picker';

import {  TouchableOpacity,  FlatList } from 'react-native';

// import 'react-datepicker/dist/react-datepicker.css'; // Import the default styles

const TodoList = ({navigation}) => {
  
  const [selectedValue, setSelectedValue] = useState('select');
  const [selectedValue2, setSelectedValue2] = useState('select');
  const [selectedValue3, setSelectedValue3] = useState('select');

  const handleApplyNow = () => {
    navigation.navigate('Propertyinfo');
    // console.log('hello');
  };
  return (
    <ImageBackground
    source={require('./Blur.png') }
    style={{  width:'100%',height:'100%' }}
  >
    <ScrollView style={styles.container}>
      
      
      <ImageBackground
        source={require("./background-house.jpg", )}
        style={{width:'100%',height:400, borderRadius:5, padding:10,}}
        resizeMode="cover">
        {/* <Text style={{alignSelf:'center',paddingTop:150,fontSize:50,fontWeight:'600',color:'white'}}>Rent Now </Text>
       */}
      </ImageBackground>  
      <Text style={{ fontWeight:'800', fontSize:32,color:'#022b47',alignSelf:'center',padding:20}}>Our Popular Residence</Text>
<View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>

  
      <View style={styles.searchBar}>
        
     
        <Picker
          style={styles.searchInput}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Location" value="Location" />
          <Picker.Item label="Banglore" value="Banglore" />
          <Picker.Item label="Hyderabad" value="Hyderabad" />
          <Picker.Item label="Delhi" value="Delhi" />
        </Picker>
        <Picker
          style={styles.searchInput}
          selectedValue={selectedValue2}
          onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
        >
          <Picker.Item label="Rental-Type" value="Full-time" />
          <Picker.Item label="Full-Time Rental" value="Full-time" />
          <Picker.Item label="part-Time Rental" value="part-time" />
          <Picker.Item label="Contract Rental" value="Contract" />
        </Picker>
        
        <Picker
          style={styles.searchInput}
          selectedValue={selectedValue3}
          onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
        >
          <Picker.Item label="Price" value="Price" />
          <Picker.Item label="$2500-Below" value="$2500-Below" />
          <Picker.Item label="$3500-$4000" value="$3500-$4000" />
          <Picker.Item label="$4500-above" value="$4500-above" />
        
        </Picker>
       
        <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:10, alignSelf:'stretch'} }
            onPress={{}} >
              <Text style={styles.buynow}>APPLY</Text>
              </TouchableOpacity>
      </View>


     

      
     <ScrollView horizontal= {true} >
       <View style={styles.container1}  >
          <View style={styles.rows}>
            <Image source={require("./house.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Miyapur, hyderabad</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    960*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h2.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Hightech, Banglore</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    650*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    2BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    2000$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h3.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  papi ,Chennai</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    630*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    1BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1000$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h4.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Bangarahills, hyderabad</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    860*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    3500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h5.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Humpi</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    960*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    2BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1000$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h6.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Bhopal</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    860*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h7.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Rajesthan</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    9123*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1000$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          
       </View>
       
       
      </ScrollView> 

     
<Text style={{ fontWeight:'800', fontSize:32,color:'#022b47',alignSelf:'center',padding:20}}>Recently Added Housing</Text>
<View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>



      <ScrollView horizontal= {true} >
       <View style={styles.container1}  >
          <View style={styles.rows}>
            <Image source={require("./h8.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Delhi</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    7320*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    2BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    2500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./house.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Miyapur, hyderabad</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    960*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h2.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Delhi</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    732*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    2BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h6.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}> Khammam</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    960*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h8.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Miyapur, hyderabad</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    960*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
         <View style={styles.rows}>
            <Image source={require("./h4.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Bangarahills, hyderabad</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    860*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    3500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h5.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Humpi</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    960*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    2BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1000$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h6.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Bhopal</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    860*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1500$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <Image source={require("./h7.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>  Rajesthan</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    9123*****               </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./bed.jpg")} style={{width:30,height:20, borderRadius:5, padding:10}}/>
              <Text style={{fontWeight:'500', fontSize:16}}>    3BHK                  </Text>
            </View>

            <Text style={{fontWeight:'700',fontSize:22, padding:10}}>$  <Text style={{fontWeight:'500', fontSize:16}}>    1000$                </Text></Text>
            <TouchableOpacity style={{backgroundColor:'#086487', padding:10, borderRadius:5, alignSelf:'stretch'} }
             onPress={handleApplyNow} >
              <Text style={styles.buynow}>Rent-Now</Text></TouchableOpacity>
          </View>
          
       </View>
       
       
      </ScrollView> 
      
      
      
   
   
    </ScrollView>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    

  },
  container1:{
  
    flexDirection:'row' ,
    alignContent:'space-around', 
    padding:10,
    marginRight: 10
    
  },
  rows:{
    
    width:350,
    padding:10,
    shadowRadius:2,
    borderRadius:10,
    alignItems:'center',
    backgroundColor: 'rgba(171, 199, 255, 0.3)',
    marginRight: 20
    
    
  },
  buynow:{
    fontWeight:'500',
     alignSelf:'center',
     color:'white',
     fontSize:16
    },
  searchBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
    },
    searchInput: {
      flex: 1,
      borderColor: '#086487',
      borderWidth: 2,
      borderRadius: 5,
      paddingLeft: 10,
      marginRight: 5,
      
      color:'#022b47'
    },
});

export default TodoList;


