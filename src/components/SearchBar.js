import React from "react";
// for a text input box use TextInput, not Text
import { View, TextInput, StyleSheet } from "react-native";
// using the icon library that is included out of box with the
// the expo library
// https://icons.expo.fyi/
import { Feather } from "@expo/vector-icons";
const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      {/* no default styling is applied to TextInput  */}
      <TextInput
        // placeholder prop
        placeholder="Search"
        style={styles.inputStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    // margin to move way from header
    marginTop: 10,
    backgroundColor: "#F0EEEE", //
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    // to get child elements to display on the same line
    // horizontal direction controlled by the justify
    //content property which at this point is flexStart
    // need to change this in child to flex: 1
    flexDirection: "row",
  },
  inputStyle: {
    // adding boarder here so it is easier to see for styling
    // borderColor: "black",
    // borderWidth: 1,
    // text input is being smashed down in the horizontal direction
    // due to flex start so set flex 1
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    // font Size controls icon size
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
