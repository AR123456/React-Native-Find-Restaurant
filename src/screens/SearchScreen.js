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
  // React Native ScrollView controls the vertical scroll-
  // if it detects that it has too much content to fit on the
  // screen all at one time it will enable scrolling. So here wrap ResutlList with ScrollView
  // android devices may need additional configuration . Constrain view element to only use screen state
  // that is avalible  with flex box, flex property can be applied to a child to tell that
  // element to fill up and expand to visible space that is avalible
  // https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707270#overview
  // flex:1 does this  add it to the most parent view.  A flex:1 to parent element
  //can fix a lot of vertical scrolling issues
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
