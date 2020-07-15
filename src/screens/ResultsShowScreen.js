import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
// props come directly from a parent component get navigation which has
// a special function getParam
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  // console.log(result);
  // helper function
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
    // only want to do this one time
  }, []);
  // when the component is first displayed results will be null
  // need to check if null and if so return null or do not show
  // anythhing untill message comes back
  if (!result) {
    return null;
  }

  // console.log(id);
  return (
    <View>
      <Text>{result.name}</Text>
      {/* photos is an array of photos */}
      <FlatList
        data={result.photos}
        // this is the actual URL of the image we need
        // so putting it in as the return
        keyExtractor={(photo) => photo}
        // renderItem needs a props here item is the actual URL of the photo
        renderItem={({ item }) => {
          // import Image from react-native
          return <Image style={styles.image} source={{ uri: item }}></Image>;
        }}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    margin: 5,
  },
});
export default ResultsShowScreen;
// whenever talking about rendering components it is state that we are talking about
