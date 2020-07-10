import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "../components/ResultsDetail";
const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        // move this to its own component helper type component
        // ResutlsDetails
        //that can be shown in resutls list
        // renderItem={({ item }) => {
        //   return <Text>{item.name}</Text>;
        // }}
        renderItem={({ item }) => {
          // need to pass in the current result that
          // is being iterated over
          // so create a prop
          //item here is the current result that we are iterating
          // over
          return (
            <ResultsDetail
              // this result is a prop that we made up
              // it is the bussiness object from the json
              result={item}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ResultsList;
