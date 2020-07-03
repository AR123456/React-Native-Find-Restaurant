import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    // wrap the req/res in a try catch to find errors
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "aurora colorado", // or try san jose
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      // to show to user , need to update content on screen - this means a new
      // state variable
      setErrorMessage("Something went wrong");
    }
  };
  // dont call searchApi when component is frist rendred.
  // This casues the serach, ping to API  to happen over and over
  // every time setter is called everyting re renders - infinite loop
  // bad code
  // dont call function directly in the component
  // searchApi("pasta");
  // to fix the use useEffect and in the array at end pass in an empty array
  //(could be run multiple times if you do pass something into the array)
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        // onTermSubmit={searchApi}
      ></SearchBar>
      {/* only show the errorMessage if there is an error */}
      {errorMessage ? <Text> {errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
