
const API_KEY = '45127620-5b07992107ac4e8771e67df86'; 
const BASE_URL = 'https://pixabay.com/api';


export function fetchImages(query) {
  const url = `${BASE_URL}/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}
