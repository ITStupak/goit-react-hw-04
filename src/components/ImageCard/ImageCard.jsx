import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <>
      <>
        <img
          onClick={() => {
            openModal(image.urls.regular, image.alt_description);
          }}
          className={css.image}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </>
    </>
  );
};

export default ImageCard;
