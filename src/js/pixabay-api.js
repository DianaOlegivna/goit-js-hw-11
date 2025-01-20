const API_KEY = '48302509-34d9f74736e571fd8f4b83a25';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

 return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
 });
  
}
