import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.params = {
    client_id: "w0W1iDhQU6pJEqIKsgaiN1XMkhILDbyZJWmzzb4oJMY",
    orientation: "landscape",
    per_page: 15,
};

export const getPhotos = async (query, page) => {
    const {data} = await axios.get(`search/photos?query=${query}&page=${page}`);
    return data;
}