import React from "react";
import { View, Text, StyleSheet } from "react-native";
// using the icon library that is included out of box with the
// the expo library
// https://icons.expo.fyi/
import { Feather } from "@expo/vector-icons";
const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} color="black" />
      <Text>Search Bar</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE", //
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});
export default SearchBar;
