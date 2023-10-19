import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../api';

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

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      try {
        const images = await fetchImages(
          this.state.searchQuery,
          this.state.page
        );
        console.log(images);
        this.setState({
          gallaryItems: [...images],
        });
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.gallaryItems} />
      </div>
    );
  }
}
