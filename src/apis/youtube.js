import axios from 'axios';

const KEY = 'AIzaSyAHD1vQjSxOf26j_hTu1jcGPAL2m4AZfBU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
