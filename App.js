

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

 import Main from './Main';



const App = () => {
  return (
    <Main/>
     //<House/>

    
  );
};

export default App;