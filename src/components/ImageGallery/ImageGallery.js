import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ arrayResponse }) => {
  return (
    <ul class="gallery">
      {arrayResponse.map(elem => {
        <ImageGalleryItem
          key={elem.id}
          smallImg={elem.webformatURL}
          largeImg={elem.largeImageURL}
        />;
      })}
    </ul>
  );
};
