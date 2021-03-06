import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";



const HomeScreen = ({navigation}) => {
//destructuring
  return (
  <View>
   <Text style={styles.text}> Homescreen!</Text>
   <Button 
      onPress={ () => navigation.navigate('Components') }
      title="Go to Components Demo"/>

    <Button
      title = "Go to List Screen"
      onPress = { () => navigation.navigate('List') }
      />

    <Button
      title = "Image Screen"
      onPress = { () => navigation.navigate('Image')}
    />
      
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

