//npm install react-native-ratings


import React ,{ useState }from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image,ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AirbnbRating } from 'react-native-ratings';
import WebsiteLink from './WebsiteLink';


const Home = () => {

  const [rating, setRating] = useState(4);
  const handleApplyNow = () => {
    // navigation.navigate('Propertyinfo');
     console.log('hello');
  };

  
  return (
    <ImageBackground
    source={require('./Blur.png') }
    style={{  width:'100%',height:'100%' }}
  >
    
      <ScrollView style={styles.container}>
        <Text style={{fontWeight:'800', fontSize:32,color:'#022b47',alignSelf:'center',padding:20}}>GROCERY STORES</Text>
        <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>
        <ScrollView horizontal= {true} style={{flexDirection:'row',}}>
              <View style={styles.Shops}>
         <Text style={{fontWeight:'700', fontSize:26,alignSelf:'center',padding:10,color:'#086487'}}>Grocery Store</Text>
            
            <Image source={require("./grocery.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./person-logo.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47',color:'#022b47'}}>   Rohith                     </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>    Miyapur, hyderabad</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>  9600*****                 </Text>
            </View>
            <AirbnbRating
        count={5}
        reviews={[]}
        defaultRating={rating}
        size={25}
        onFinishRating={rating => setRating(rating)}
         />
       <Text style={{paddingBottom:10,fontWeight:'500',fontSize:16}}>82 Ratings</Text>
        <WebsiteLink
        url="https://www.bing.com/maps?osid=1677d40a-fcad-44a4-8246-0c0dc381bf7a&cp=17.486543~78.389533&lvl=16&pi=0&imgid=077a38f4-92dc-4bc1-9779-71a4b85e63ee&v=2&sV=2&form=S00027"
        title="Visit Now"
        linkStyle={styles.link1}
      />
              </View>
              
              <View style={styles.Shops}>
         <Text style={{fontWeight:'700', fontSize:26,alignSelf:'center',padding:10,color:'#086487'}}>Medical Store</Text>
            
            <Image source={require("./medical.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./person-logo.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>   Rama                         </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>    Madhira, Khammam</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>  7815*****                 </Text>
            </View>
            <AirbnbRating
        count={5}
        reviews={[]}
        defaultRating={rating}
        size={25}
        onFinishRating={rating => setRating(rating)}
         />
       <Text style={{paddingBottom:10,fontWeight:'500',fontSize:16}}>135 Ratings</Text>
        <WebsiteLink
        url="https://www.bing.com/maps?osid=383fc4fe-f2d6-4989-8529-5b9873d78b8a&cp=17.196442~78.380493&lvl=11.39&pi=0&v=2&sV=2&form=S00027"
        title="Visit Now"
        linkStyle={styles.link1}
      />
              </View>
              <View style={styles.Shops}>
         <Text style={{fontWeight:'700', fontSize:26,alignSelf:'center',padding:10,color:'#086487'}}>Restaurant</Text>
            
            <Image source={require("./restaurant.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./person-logo.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>   krishna                     </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>    Banjara, hyderabad</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>  6712*****                 </Text>
            </View>
            <AirbnbRating
        count={5}
        reviews={[]}
        defaultRating={rating}
        size={25}
        onFinishRating={rating => setRating(rating)}
         />
       <Text style={{paddingBottom:10,fontWeight:'500',fontSize:16}}>51 Ratings</Text>
        <WebsiteLink
        url="https://www.bing.com/maps?osid=1677d40a-fcad-44a4-8246-0c0dc381bf7a&cp=17.486543~78.389533&lvl=16&pi=0&imgid=077a38f4-92dc-4bc1-9779-71a4b85e63ee&v=2&sV=2&form=S00027"
        title="Visit Now"
        linkStyle={styles.link1}
      />
              </View>
        </ScrollView>
        <View style={{height:20,width:'100%'}}></View>
        <ScrollView horizontal= {true} style={{flexDirection:'row',}}>
              <View style={styles.Shops}>
         <Text style={{fontWeight:'700', fontSize:26,alignSelf:'center',padding:10,color:'#086487'}}>Utensils Store</Text>
            
            <Image source={require("./utensils.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./person-logo.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>   mohan                          </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>    warngl, Hyderabad      </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>    8650*****                   </Text>
            </View>
            <AirbnbRating
        count={5}
        reviews={[]}
        defaultRating={rating}
        size={25}
        onFinishRating={rating => setRating(rating)}
         />
       <Text style={{paddingBottom:10,fontWeight:'500',fontSize:16}}>812 Ratings</Text>
        <WebsiteLink
        url="https://www.bing.com/maps?osid=1677d40a-fcad-44a4-8246-0c0dc381bf7a&cp=17.486543~78.389533&lvl=16&pi=0&imgid=077a38f4-92dc-4bc1-9779-71a4b85e63ee&v=2&sV=2&form=S00027"
        title="Visit Now"
        linkStyle={styles.link1}
      />
              </View>
              <View style={styles.Shops}>
         <Text style={{fontWeight:'700', fontSize:26,alignSelf:'center',padding:10,color:'#086487'}}>Medical Store</Text>
            
            <Image source={require("./medical2.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./person-logo.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>   Saikrish                     </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>    Madupalli, Delhi     </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>  6111*****                 </Text>
            </View>
            <AirbnbRating
        count={5}
        reviews={[]}
        defaultRating={rating}
        size={25}
        onFinishRating={rating => setRating(rating)}
         />
       <Text style={{paddingBottom:10,fontWeight:'500',fontSize:16}}>82 Ratings</Text>
        <WebsiteLink
        url="https://www.bing.com/maps?osid=1677d40a-fcad-44a4-8246-0c0dc381bf7a&cp=17.486543~78.389533&lvl=16&pi=0&imgid=077a38f4-92dc-4bc1-9779-71a4b85e63ee&v=2&sV=2&form=S00027"
        title="Visit Now"
        linkStyle={styles.link1}
      />
              </View>
              <View style={styles.Shops}>
         <Text style={{fontWeight:'700', fontSize:26,alignSelf:'center',padding:10,color:'#086487'}}>Fruits Store</Text>
            
            <Image source={require("./fruits.jpg", )} style={{width:300,height:200, borderRadius:5, padding:10}}/>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./person-logo.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>   Srilaxmi                     </Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./location.jpg")} style={{width:20,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>    Miyapur, hyderabad</Text>
            </View>
            <View style={{flexDirection:'row',padding:10}}>
              <Image source={require("./phon.jpg")} style={{width:30,height:20, borderRadius:5,}}/>
              <Text style={{fontWeight:'500', fontSize:16,color:'#022b47'}}>  5600*****                 </Text>
            </View>
            <AirbnbRating
        count={5}
        reviews={[]}
        defaultRating={rating}
        size={25}
        onFinishRating={rating => setRating(rating)}
         />
       <Text style={{paddingBottom:10,fontWeight:'500',fontSize:16}}>1001 Ratings</Text>
        <WebsiteLink
        url="https://www.bing.com/maps?osid=1677d40a-fcad-44a4-8246-0c0dc381bf7a&cp=17.486543~78.389533&lvl=16&pi=0&imgid=077a38f4-92dc-4bc1-9779-71a4b85e63ee&v=2&sV=2&form=S00027"
        title="Visit Now"
        linkStyle={styles.link1}
      />
              </View>
        </ScrollView>

          
      </ScrollView>

      </ImageBackground>
    
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 10,
  },
  Shops:{
    
    width:380,
    padding:30,
    shadowRadius:5,
    borderRadius:10,
    alignItems:'center',
    backgroundColor: 'rgba(171, 199, 255, 0.3)',
    marginRight:90
    
    
  },
  VisitStore:{
    fontWeight:'500',
     alignSelf:'center',
     color:'white',
     fontSize:16
    },
    link1: {
      fontWeight:'500',
     alignSelf:'center',
     color:'white',
     fontSize:14,
     backgroundColor: '#086487',
     padding:10,
     borderRadius:25,
    
     
    },
  
});

export default Home;


