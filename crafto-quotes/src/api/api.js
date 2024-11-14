import axios from 'axios';

const BASE_URL = 'https://assignment.stage.crafto.app';
const MEDIA_URL = 'https://crafto.app/crafto/v1.0/media/assignment';

export const login = async (username, otp) => {
  const response = await axios.post(`${BASE_URL}/login`, {
      username,
      otp
  });
  return response?.data;
};

export const getQuotes = async (token, limit = 20, offset = 0) => {
    const response = await axios.get(`${BASE_URL}/getQuotes`, {
        headers: { Authorization: token },
        params: { limit, offset }
    });
    return response?.data?.data;
};

export const uploadMedia = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${MEDIA_URL}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
};

export const createQuote = async (token, text, mediaUrl) => {
    const response = await axios.post(`${BASE_URL}/postQuote`, {
        text,
        mediaUrl
    }, {
        headers: { Authorization: token, 'Content-Type': 'application/json' }
    });
    return response.data;
};
