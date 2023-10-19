import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  console.log(typeof images);
  console.log(images);
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImg={webformatURL}
          largeImg={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};
