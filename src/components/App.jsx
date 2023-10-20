import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../api';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    gallaryItems: [],
    error: false,
    page: 1,
    loading: false,
    totalHits: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const myFormData = new FormData(event.currentTarget);
    const searchData = Object.fromEntries(myFormData);
    this.setState({
      searchQuery: searchData.searchQuery,
      page: 1,
      gallaryItems: [],
      totalHits: '',
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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
          gallaryItems: [...this.state.gallaryItems, ...images.hits],
          totalHits: images.totalHits,
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
          <ImageGallery images={this.state.gallaryItems}/>
        )}
        {if (this.state.gallaryItems.length > 0 && Number(this.state.totalHits) / 12 < this.state.page)
        {
          <Button OnClick={this.handleLoadMore}/>
        }}
      </div>
    );
  }

