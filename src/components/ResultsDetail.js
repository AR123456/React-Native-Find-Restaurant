import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      {/* note here using the full word source not src
    and double {{}} because it is an object 
    */}
      <Image
        style={styles.image}
        source={{
          // uri is syntax for react native
          // the default for an Image tag in react native
          // is colapsed.  so need to add a fixed height to see it.
          uri: result.image_url,
        }}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        Starts, {result.rating} Reviews {result.review_count}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default ResultsDetail;
