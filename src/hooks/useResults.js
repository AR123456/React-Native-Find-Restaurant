// example of a custom hook
// a component to take care of the bussiness logic
//of dealing with the results from the API
// taking this logic out of the SearchScreen
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

// first take all of the code that is related to the yelp API out of the SearchScreen component

const useResults = () => {
  // return a couple of variales for the SeachScreen to take advantage of
  // remove all the logic from the SearchScreen component that has todo with
  // searching the yelp API
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
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
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);
  // functions and variables coming from this code that need to be in a jsx block here
  // add return statement and return the needed variables in an array
  return [searchApi, results, errorMessage];
};
// now if we had an app that needed to use this logic in other components we could
// re use it.
export default useResults;
