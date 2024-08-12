import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.gList}>
        {images.map((image) => {
          return (
            <li key={image.id} className={css.gItem}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
