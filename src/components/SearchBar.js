import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

// destructuer term and onTermChange from the props object
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        // short hand way to call onChangeText
        onChangeText={onTermChange}
        // onChangeText={(newTerm) => onTermChange(newTerm)}
        ///////////////////////////////////
        // built in event for submitting search input
        // pass in the function to be called
        // so need another call back function from parent to take care of this
        // onEndEditing={() => console.log("submitted")}
        // onEndEditing={() => onTermSubmit()}
        // short hand way to write
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE", //
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
