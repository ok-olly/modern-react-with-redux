import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID D1S6fPHi2Vt2L7Az4bwhRbXRoDBNZKByBM70Cpi8Z64',
    },
    params: {
      query: 'cars',
    },
  });

  console.log(response);

  return response;
};

export default searchImages;
