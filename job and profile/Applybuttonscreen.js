// ApplyButtonScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const ApplyButtonScreen = ({ navigation }) => {
  const handleApplyNow = () => {
    navigation.navigate('EnterDetailsScreen');
  };

  return (
    <View>
      <Button title="Apply Now" onPress={{handleApplyNow}} />
    </View>
  );
};

export default ApplyButtonScreen;
