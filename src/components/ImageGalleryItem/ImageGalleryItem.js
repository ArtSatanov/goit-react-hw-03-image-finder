export const ImageGalleryItem = ({ smallImg, largeImg, tags }) => {
  return (
    <li className="gallery-item" data-img={largeImg}>
      <img src={smallImg} alt={tags} />
    </li>
  );
};
