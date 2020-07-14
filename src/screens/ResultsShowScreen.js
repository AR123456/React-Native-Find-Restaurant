import React from "react";
import { View, Text, StyleSheet } from "react-native";
// props come directly from a parent component get navigation which has
// a special function getParam
const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log(id);
  return (
    <View>
      <Text>Resutls Show </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ResultsShowScreen;
