// Import a library to create a Component
import React from 'react';
// import destructuring used to import only what is needed from react-native
// these are primitive elements available in react-native
import { Text, View } from 'react-native';

// Create a Component - Objects that create text or content to render
// Components use JSX, which looks like html but compiles to javascript
const AlbumList = () => {
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Album List</Text>
      </View>
    );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  textStyle: {
    fontSize: 20
  }

};

// Export component to import in App
export default AlbumList;
