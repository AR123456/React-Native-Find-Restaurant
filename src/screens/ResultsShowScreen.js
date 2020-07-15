import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";
// props come directly from a parent component get navigation which has
// a special function getParam
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  console.log(result);
  // helper function
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
    // only want to do this one time
  }, []);
  console.log(id);
  return (
    <View>
      <Text>Resutls Show </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ResultsShowScreen;
// whenever talking about rendering components it is state that we are talking about
