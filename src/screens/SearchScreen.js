import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  // always use state when updating content
  // this is going to be an array from yelp
  const [results, setResults] = useState([]);

  // run the search when the onTermSubmit funcion gets invoked
  // will use this helper function for that ( inside component )
  // this is an asyncronis opperation, need to wait for search results
  //  .then  or  make this function async
  const searchApi = async () => {
    // get type http request
    // access the /search route
    //  /search will be concatonated onto the baseURL inside
    // yelp.js file
    const response = await yelp.get("/search", {
      // pass in params property as second argument of the axios call
      params: {
        // key value pair will automaticaly be appended onto request url
        // so limit:50 would look like "/search?limit=50"
        limit: 50,
        term: term,
        location: "aurora colorado", // or try san jose
      },
    });
    // when the request comes back it will be assinged to the response variable
    // response request coming back have a .data property on them   response.data
    // data is the whole json object  so response.data.businesses is what we are looking for
    // use setter to get the results into state
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        term={term}
        // onTermChange={(newTerm) => setTerm(newTerm)}
        // short hand version
        onTermChange={setTerm}
        // onTermSubmit={() => console.log("search from searchbar")}
        // in here call the searchAPI helper function
        // onTermSubmit={() => searchApi()}
        //// short hand version
        onTermSubmit={searchApi}
      ></SearchBar>
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
