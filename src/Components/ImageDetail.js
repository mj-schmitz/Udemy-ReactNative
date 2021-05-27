import React from "react";
import { Image, Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ImageDetail = (props) => {
  return(
    <View>
      <Image source={props.imageSource} />
     <Text> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ImageDetail