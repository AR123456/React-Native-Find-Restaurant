import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? <Text> {errorMessage}</Text> : null}
      {/* send list results to the different results list components as
      props  doing grouping here so that what is sent is grouped by cost 
      already, not doing logic for this inthe ResultList component */}
      <Text>We have found {results.length} results</Text>
      {/* pass in the array of data we want the component to show 
      using the filterResultsByPrice helper function  */}
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
