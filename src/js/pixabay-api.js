//save functions for HTTP-requests
const API_KEY = '48362167-980900dd24403cbb12294ed40';
const BASE_URL = 'https://pixabay.com/api/';

export function serviceImages(question) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: question,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json(); 
  });
}
