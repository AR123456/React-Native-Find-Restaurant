import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "../components/ResultsDetail";
import { withNavigation } from "react-navigation";
// now getting navigation prop from the SearchShearch screen props object
const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* The FlatList controles the scroll bar */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          // use react native touchable opasity to fade out with tap
          return (
            // the on press callback goes in TouchableOpacity
            <TouchableOpacity
              onPress={() => navigation.navigate("ResutlsShow")}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
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
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
// export default ResultsList;
//wrap the export in withNavigation
export default withNavigation(ResultsList);
