// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Userinfo from './Userinfo'; // Import UserProfilePage

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Userinfo" component={Userinfo} /> {/* Add UserProfilePage to Stack Navigator */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
