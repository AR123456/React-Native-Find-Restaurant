import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  // console.log(results);
  const filterResultsByPrice = (price) => {
    // price ==="$"||"$$"||"$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };
  // alternative method of fixing vertical scrolling is using empty elements
  //https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707278#overview
  // sometimes the View element can be destructive to view, meaning scrolling off the screen ect
  // or shrink down to fit context with unexpected contents
  // instead of using View to return elements, could return not an element with an empty tag
  // its like a place holder element and no longer need to use flex to keep stuff on screen
  return (
    // <View style={{ flex: 1 }}>
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? <Text> {errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
    // </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
