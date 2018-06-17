import Axios from "axios";

const API_KEY = "d0c39c311f46b7b9c5433aa4ef7c163a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = Axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
