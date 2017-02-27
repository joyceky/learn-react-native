/*
EXECUTED ON IOS STARTUP - if developing for IOS, code here

React vs react-native
REACT creates our components, knows how they should behave,
and makes them work together

REACT-NATIVE provides basic mobile components and renders
them on the mobile screen

http://rallycoding.herokuapp.com/api/music_albums
*/

// Import a library to create a Component
import React from 'react';
// import destructuring used to import only what is needed from react-native
import { AppRegistry, View } from 'react-native';
// import our components to nest inside App and render
import Header from './src/components/Header';
import AlbumList from './src/components/Album-List';

// Create a Component - Objects that create text or content to render
// Components use JSX, which looks like html but compiles to javascript
const App = () => {
return (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );
};

// Render it to the device with ReactNative
AppRegistry.registerComponent('albums', () => App);
