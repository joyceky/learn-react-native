// Import a library to create a Component
import React, { Component } from 'react';
// import destructuring used to import only what is needed from react-native
// these are primitive elements available in react-native
import { Text, View } from 'react-native';

// Create a Component - Objects that create text or content to render
// Components use JSX, which looks like html but compiles to javascript
class AlbumList extends Component {
  // lifecycle method
  componentWillMount() {
    console.log('componentWillMount in Album List');
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}


// Export component to import in App
export default AlbumList;
