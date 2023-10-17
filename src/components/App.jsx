import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    filter: '',
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
