import React from "react";
// using a flat list so import it
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        // by default a flat list renders verticaly (top - bottom )
        // we  want it to read horizonaly (left - right )
        // horizontal={true}
        // this can be shorted up with a default prop in JSX  to just its name
        horizontal
        //pass in list of data
        data={results}
        // key extractor - or performace reasons - looks at every object
        // in results and returns a stable identifier
        // pass in a function that gets called with every result
        // and assigns it a string that is consistent betwee re renders
        // the resteraunt id from the json object work of this
        keyExtractor={(result) => result.id}
        // then define renderItem funciton
        // first arg is the item ( currnet object we are iteraing over )
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      ></FlatList>
      {/* <Text>Results:{results.length}</Text> */}
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
