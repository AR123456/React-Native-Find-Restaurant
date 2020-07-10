import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

// here passing in the result prop that we made up in
//the ResultsList component
// result here is the bussiness object
const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
      {/* <FlatList
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      ></FlatList> */}
    </View>
  );
};
const styles = StyleSheet.create({});
export default ResultsDetail;
