import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
  //more primitive elements, FLAT LIST
  const friends = [
    {name: "Connor", age: 21},
    {name: "Tal", age: 22},
    {name: "Kian", age:23 },
    {name: "me",   age:420 }
  ];

  return (
  <FlatList
  keyExtractor={ (friend) => friend.name} 
  data = {friends} 
  //es2015 destructuring 
  renderItem = { ({item}) => {
       return <Text style={styles.textStyle}> {item.name}: Age {item.age} </Text>;
    }}
    /> 
  );
};

const styles = StyleSheet.create({
  textStyle:{
    marginVertical: 50
  }
});

export default ListScreen;