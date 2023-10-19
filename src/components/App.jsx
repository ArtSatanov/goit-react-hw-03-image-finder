import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../api';

export class App extends Component {
  state = {
    searchQuery: '',
    gallaryItems: [],
    error: false,
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
        this.setState({ loading: true });
        const images = await fetchImages(
          this.state.searchQuery,
          this.state.page
        );

        this.setState({
          gallaryItems: [...images.hits],
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.gallaryItems.length > 0 && (
          <ImageGallery images={this.state.gallaryItems} />
        )}
      </div>
    );
  }
}
