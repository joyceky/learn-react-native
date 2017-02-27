/*
EXECUTED ON IOS STARTUP - if developing for IOS, code here

React vs react-native
REACT creates our components, knows how they should behave,
and makes them work together

REACT-NATIVE provides basic mobile components and renders
them on the mobile screen
*/

// Import a library to create a Component
import React from 'react';
import ReactNative from 'react-native';

// Create a Component - Objects that create text or content to render
// Components use JSX, which looks like html but compiles to javascript
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
