import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ arrayResponse }) => {
  return (
    <ul className="gallery">
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
