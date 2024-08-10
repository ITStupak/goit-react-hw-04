import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { getPhotos } from "./apiService/gallery";
import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) return;
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await getPhotos(query, page);
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const handleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
    setIsEmpty(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url, alt) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isVisible && (
        <LoadMoreBtn onClick={loadMore} disabled={loading}>
          {loading ? "Loading" : "Load more"}
        </LoadMoreBtn>
      )}
      {!images.length && !isEmpty && (
        <ErrorMessage textAlign="center">Let`s begin search 🔎</ErrorMessage>
      )}
      {loading && <Loader />}
      {error && (
        <ErrorMessage textAlign="center">❌ Something went wrong </ErrorMessage>
      )}
      {isEmpty && (
        <ErrorMessage textAlign="center">
          Sorry. There are no images ... 😭
        </ErrorMessage>
      )}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
