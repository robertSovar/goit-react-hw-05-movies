import Error from 'pages/home/common/Error/Error';
import { API_BASE_URL } from '../API/API_BASE_URL';
import { API_KEY } from '../API/API_KEY';
import axios from 'axios';

axios.defaults.baseURL = API_BASE_URL;

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

const FetchPopularMovies = async () => {
  try {
    const reponse = await axios.get(`trending/movie/day`, params);
    return reponse.data.results;
  } catch (error) {
    throw new Error('There was a problem in fetching data', error);
  }
};

export default FetchPopularMovies;
