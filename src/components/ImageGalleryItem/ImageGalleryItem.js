// export const ImageGalleryItem = ({ smallImg, largeImg, tags }) => {
//   return (
//     <li className="gallery-item" data-img={largeImg}>
//       <img src={smallImg} alt={tags} />
//     </li>
//   );
// };
import { Component } from 'react';
import { ModalСomponent } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { smallImg, largeImg, tags } = this.props;
    return (
      <li className="gallery-item">
        <img src={smallImg} alt={tags} onClick={() => this.openModal()} />
        <div></div>
        <ModalСomponent
          isModalOpen={this.state.isModalOpen}
          imgModal={largeImg}
          altModal={tags}
          closeModal={this.closeModal}
        />
      </li>
    );
  }
}
