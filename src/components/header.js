// Import a library to create a Component
import React from 'react';
// import destructuring used to import only what is needed from react-native
import { Text } from 'react-native';

// Create a Component - Objects that create text or content to render
// Components use JSX, which looks like html but compiles to javascript
const Header = () => {
  return (
    <Text>Header Text</Text>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// Export component to import in App
export default Header;
