// Import a library to create a Component
import React, { Component } from 'react';
// import destructuring used to import only what is needed from react-native
// these are primitive elements available in react-native
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Create a Component - Objects that create text or content to render
// Components use JSX, which looks like html but compiles to javascript
// class based components use state, not functional components
class AlbumList extends Component {
  state = { albums: [] };

  // lifecycle methods are available in class based components
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail album={album} key={album.title} />
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}


// Export component to import in App
export default AlbumList;
