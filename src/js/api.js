
const axios = require('axios').default;

const API_URL = "https://pixabay.com/api/";
const API_KEY = "33372794-081d1fa879bae651f1e0d4c06";



async function getImage (query, page) {
  const response = await axios.get(`${API_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`)

 return response.data.hits;
}
    

export default { getImage };





