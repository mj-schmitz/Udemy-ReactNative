//createing a react component
import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
  //jsx, kind of like html
  //props: things like Style to customize components
  const name = "Mikey" 

  return (
  <View>
    <Text style = {styles.textStyle}> Getting Started with React Native</Text>
    <Text style = {styles.textStyle2}> My name is {name} </Text>
    </View>
    );
};

const styles = StyleSheet.create({
  //new TextStyle style sheet object
  textStyle: {
      fontSize: 45
  }, 
  textStyle2:{
    fontSize: 20
  }
});

export default ComponentsScreen
 