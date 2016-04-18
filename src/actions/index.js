import axios from 'axios';

const WEATHER_API_KEY = 'db4752076c8c1bc85b2eb4c8ff8d13f1';
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${WEATHER_API_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
