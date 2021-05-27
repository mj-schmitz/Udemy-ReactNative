import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../Components/ImageDetail"


const ImageScreen = () => {
  return <View>
  <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} />
  <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}/>
  <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>

</View>
};

const styles = StyleSheet.create({

});

export default ImageScreen