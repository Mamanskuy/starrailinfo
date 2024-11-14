import axios from 'axios';

const BASE_URL_CHARACTERS = 'https://hsr-api.vercel.app/api/v1';
const BASE_URL_EVENTS = 'https://api.ennead.cc/starrail';

export const api = {
  // Characters
  getCharacters: async () => {
    try {
      const response = await axios.get(`${BASE_URL_CHARACTERS}/characters`);
      return response.data;
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  },

  // Events
  getEvents: async () => {
    try {
      const response = await axios.get(`${BASE_URL_EVENTS}/news/events`);
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  // Redeem Codes
  getRedeemCodes: async () => {
    try {
      const response = await axios.get(`${BASE_URL_EVENTS}/code`);
      return response.data;
    } catch (error) {
      console.error('Error fetching redeem codes:', error);
      throw error;
    }
  }
};