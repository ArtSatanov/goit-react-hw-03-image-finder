import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { fetchImages } from '../api';

export class App extends Component {
  state = {
    searchQuery: '',
    gallaryItems: [],
    page: 1,
    loading: false,
  };

  handleSubmit = event => {
    event.preventDefault();
    const myFormData = new FormData(event.currentTarget);
    const searchData = Object.fromEntries(myFormData);
    this.setState({
      searchQuery: searchData.searchQuery,
      page: 1,
      gallaryItems: [],
    });
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
