import axios from "axios";

const fetchImages = ({ search = "", page = 1 }) => {
  const BASE_URL =
    "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=";
  const apiKey = "21715456-94146d2128778e129cf5897fe";
  return axios
    .get(`${BASE_URL}${search}&page=${page}&per_page=12&key=${apiKey}`)
    .then((resp) => resp.data.hits);
};

export { fetchImages };
