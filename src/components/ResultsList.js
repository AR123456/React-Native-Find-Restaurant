// a reusable component that will show list of resutls from
// the apit
import React from "react";
import { View, Text, StyleSheet } from "react-native";
// destructureing the props object props.title
const ResultsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
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
