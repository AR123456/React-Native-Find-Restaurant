import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        // pass term and onTermChange cb to SearchBar
        // passing the state and the way to change it to SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      ></SearchBar>
      <Text>Search Screen</Text>
      <Text> {term}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
// anytime we show a text input we are going to need a state variable
// to track what the current value of that text input is
// the value of this text input is needed by a parent component
// this is like the square screen holding red green or blue where we
// passed a call back down to the child components
// locate state inside the parent but still read it and mondify it
// from a child so need to  put searchTerm in the search screen
// because searchScreen needs it to make API call , the callback will allow
// the child to change that state ( search term)
