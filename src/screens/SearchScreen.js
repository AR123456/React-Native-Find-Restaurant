import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {/* only show the errorMessage if there is an error */}
      {errorMessage ? <Text> {errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      {/* will need to communicate configuration data from 
      searchScreen into the copies of ResultsList using prop system 
      IE passing props
      ResultsList needs to recive the prop and then show it in the list */}
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricier" />
      <ResultsList title="Big Spender" />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
