import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

const WebsiteLink = ({ url, title, linkStyle }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.link, linkStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    
    fontSize: 16,
  },
});

export default WebsiteLink;
