import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);
// When app first starts anything we export from this file is going to be taken by react
// native and automatically shown on the screen of the device.
// Always have to exprot a react component from this file but in this case we dont
// realy have a component.
// we have the navigator instead.
// the createAppContainer function creates container that is an app component to export
// and displays whatever content the navigator is creating
export default createAppContainer(navigator);
