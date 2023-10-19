import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { fetchImages } from '../api';

export class App extends Component {
  state = {
    searchQuery: '',
    gallaryItems: [],
    page: 1,
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery arrayResponse={[]} />
      </div>
    );
  }
}
