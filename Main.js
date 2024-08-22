

import React from 'react';
import  { useRef ,useState} from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView ,ImageBackground,PanResponder,Animated,Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Job from './job and profile/Jobui';
import Jobposting from './job and profile/JobPostingPage';
import Profile from './UserProfile/DemoProfile';
import House from './property-Rental/house';
import Complaint from './Complaint-page/Complaint';
import Communityfeed from './community-feed/community-main';
import LocalStores from './LocalBusiness/Business';
import { SafeAreaView } from 'react-native-safe-area-context';
import Userinfo from './job and profile/Userinfo';
import Propertyinfo from './property-Rental/propertyinfo';
import CreateProfile from './UserProfile/CreateProfile';
import WebsiteLink from './Websitelink';
import Aboutus from './aboutus/aboutus';

import * as Animatable from 'react-native-animatable';



const Stack = createStackNavigator();
const SCROLL_DISTANCE = 370;

const Header = ({ navigation }) => {
  const scrollViewRef = useRef();
  const [scrollX, setScrollX] = useState(0);

  
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

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
    <View style={styles.container}>
 
        
    <View style={styles.header}>
  
      
    
    
        <Image source={require("./logo.png")} style={{width:100,height:100, borderRadius:10, padding:10,paddingLeft:200,}}/>

        <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.headerButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate()}>
      <WebsiteLink
        url="https://towntalk-about-us.netlify.app/"
        title="About Us"
        linkStyle={styles.headerButtonText}
      />
      </TouchableOpacity>

      <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate()}>
      <WebsiteLink
        url="https://towntalk-contact-us.vercel.app/"
        title="Contact Us"
        linkStyle={styles.headerButtonText}
      />
      </TouchableOpacity>

      <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate()}>
      
     <WebsiteLink
        url="https://chat-application-hsgp.onrender.com"
        title="Chat-Now"
        linkStyle={styles.headerButtonText}
      /> 
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      
      <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate()}>
            <WebsiteLink
        url="https://chat-application-hsgp.onrender.com"
        title="Signin/Signup"
        linkStyle={styles.headerButtonText}
      /> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Profile')}>
      <Image source={require("./img.jpg")} style={{width:40,height:40, borderRadius:25,alignSelf:'center'}}/> 
      </TouchableOpacity>
      </View>

      

     
      
    </View>
    
    
    <View style={{height:6,backgroundColor:'#02465F',marginBottom:5}}></View>
    
   
    <View style={{width:380, alignSelf:'center',borderRadius:35,marginTop:10,backgroundColor: 'rgba(171, 199, 255, 0.3)'}}>
    <ScrollView ref={scrollViewRef}
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.scrollViewContent}
         >
      
     

     <View style={styles.detailsview}>
       <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
        <Image source={require("./createprofile.jpg")} style={{width:250,height:150, borderRadius:5, padding:10,}}/>
       </Animatable.View>
   
    
      
      <Text style={styles.texthead}>Create Profile   </Text>
      <Text style={styles.text}>The  profile features provides users 
      with a seamless platform to build personalized    
      profiles, enabling them to showcase their
      skills, experiences, and achievements.
         
          
        </Text>
        <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateProfile')}>
            <Text style={styles.buttonText}>Create Profile  </Text>
          </TouchableOpacity>
        </Animatable.View>
        
      
    
    </View> 

  <View style={styles.detailsview}>
  <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
          <Image source={require("./weather3.jpg")} style={{width:250,height:150, borderRadius:5, padding:10,}}/>
  </Animatable.View>
     
      
        
        <Text style={styles.texthead}>Planetary Weather   </Text>
        <Text style={styles.text}> The weather app provides real-time weather 
         information,forecasts, and alerts to help users  
         plan their activities accordingly. 10 Days weather can be seen through our application
           
            
          </Text>
          
        <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Communityfeed')}>
            {/* <Text style={styles.buttonText}>Local Community Page</Text> */}
            <WebsiteLink
        url="https://weather-capstone.vercel.app/"
        title="Explore Weather "
        linkStyle={styles.link1}
      />
          </TouchableOpacity>
        </Animatable.View>
      
      
  </View>

   

  <View style={styles.detailsview}>
  <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
          <Image source={require("./news2.jpg")} style={{width:250,height:150, borderRadius:5, padding:10,}}/>
  </Animatable.View> 
     
      
        
        <Text style={styles.texthead}>Global News   </Text>
        <Text style={styles.text}> Stay informed with the latest local 
         and global news updates,covering  
         everything from community events at local  to  
         international affairs  across the world  accurately.
         
            
          </Text>
          
        <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Communityfeed')}>
            {/* <Text style={styles.buttonText}>Local Community Page</Text> */}
            <WebsiteLink
        url="https://pranav5060.github.io/News_website/"
        title="Check Out News "
        linkStyle={styles.link1}
      />
          </TouchableOpacity>
        </Animatable.View>
      
  </View>

   

  <View style={styles.detailsview}>
  <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
          <Image source={require("./stores2.jpg")} style={{width:250,height:150, borderRadius:5, padding:10,}}/>
  </Animatable.View>
     
     
        
        <Text style={styles.texthead}>Visit Local  Stores   </Text>
        <Text style={styles.text}> Discover nearby stores and businesses  
        in your community with our local stores   
         features, offering a convenient way to   
         explore and support local merchants and farms.
           
            
          </Text>
          
        <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LocalStores')}>
            <Text style={styles.buttonText}>Local Stores  </Text>
          </TouchableOpacity>
        </Animatable.View>
      
  </View>
  
   

<View style={styles.detailsview}>
<Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
        <Image source={require("./job2.jpg")} style={{width:250,height:150, borderRadius:5, padding:10,}}/>
</Animatable.View>
   
    
      
      <Text style={styles.texthead}>Find Job   </Text>
      <Text style={styles.text}> With intuitive features it simplifies the job   
      search and hiring process, empowering users    
      to  explore and support local merchants.
       find the perfect job or candidate
        with ease.
         
          
        </Text>
        
      <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
      
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Job')}>
         
          <Text style={styles.buttonText}>Find job  </Text>
        </TouchableOpacity> 
        
      </Animatable.View>
   
</View>

 

<View style={styles.detailsview}>
<Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
        <Image source={require("./house2.jpg")} style={{width:250,height:150, borderRadius:5, padding:10,}}/>
</Animatable.View>
   
    
      
      <Text style={styles.texthead}>Rent House   </Text>
      <Text style={styles.text}> The house rental app offers a convenient solution   
      for individuals seeking rental accommodations,    
      providing a diverse range of listings and
      flexible search options.
        
         
   
          
        </Text>
        
      <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('House')}>
         
          <Text style={styles.buttonText}> Rent House  </Text>
        </TouchableOpacity> 
        
      </Animatable.View>
    
</View>

 

<View style={styles.detailsview}>
<Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
        <Image source={require("./complaint.jpg")} style={{width:250,height:150, borderRadius:5, padding:10,}}/>
</Animatable.View>
   
    
      
      <Text style={styles.texthead}>Community & Complaint   </Text>
      <Text style={styles.text}>register complaint app empowers users to   
      voice their concerns and report issues    
      efficiently.Announcements facilitating communication   
      between individuals and relevant 
       authorities.
          
        </Text>
        
        <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Communityfeed')}>
            <Text style={styles.buttonText}>Local Community Page</Text>
          </TouchableOpacity>
        </Animatable.View>
    
</View>

<View style={styles.detailsview}>
  <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
          <Image source={require("./donation.jpg")} style={{width:250,height:150, borderRadius:5, padding:10,}}/>
  </Animatable.View> 
     
      
        
        <Text style={styles.texthead}>Donation    </Text>
        <Text style={styles.text}> Empower change and make a difference with
         our donation  application. Easily contribute to those in need, 
         support local communities, and create meaningful impact through
          secure and transparent giving.
         
            
          </Text>
          
        <Animatable.View animation="fadeInDown" delay={1700} style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Communityfeed')}>
            {/* <Text style={styles.buttonText}>Local Community Page</Text> */}
            <WebsiteLink
        url="https://pages.razorpay.com/pl_Gkpxf6oX0DGG6q/view"
        title="Donate Now "
        linkStyle={styles.link1}
      />
          </TouchableOpacity>
        </Animatable.View>
      
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
    </ImageBackground>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Aboutus" component={Aboutus} />
        
        <Stack.Screen name="Job" component={Job} />
        <Stack.Screen name="Jobposting" component={Jobposting} />
        <Stack.Screen name="House" component={House} />
        <Stack.Screen name="LocalStores" component={LocalStores} />
        <Stack.Screen name="Propertyinfo" component={Propertyinfo} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
        <Stack.Screen name="Complaint" component={Complaint} />
        <Stack.Screen name="Communityfeed" component={Communityfeed} />
        <Stack.Screen name="Userinfo" component={Userinfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
    
    padding: 10,
    
  },
  scrollViewContent: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
   
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    // backgroundColor: 'rgba(0, 0, 0, 0.9)',
   
    borderRadius:5,
    
     //backgroundColor:'rgba(171, 199, 255, 0.5)',
    //backgroundColor:'#ABC7FF'
     
    
    
  },
  headerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    // backgroundColor: 'dodgerblue',
    borderRadius: 10,
  },
  headerButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
     color: '#000000',
    // backgroundColor:'white'
  },


  
  buttonContainer: {
    margin: 10,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
     backgroundColor: '#086487',
    borderRadius: 25,
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
   // backgroundColor:'#702E52'
  },
  link1:{
    
    fontWeight:'bold',
    backgroundColor: '#086487',
    color: 'white',
  }, 
  detailsview:{
    alignItems:'center',
    justifyContent:'center',
    padding:10
    
  },

 
  texthead:{
    fontSize:24,
    fontWeight:'700',
    padding:10,
    color:'#086487'
    
  },
  text:{
    fontSize:18,
    fontWeight:'500',
    
    width:350,
    padding:10,
    color:'#022b47'
  },
 
});

export default App;

