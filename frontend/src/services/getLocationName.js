import http from "./httpService";

const apiEndPoint = `https://cors-anywhere.herokuapp.com/http:http://api.openweathermap.org/geo/1.0/reverse?lat=-37.89340299593458&lon=145.04192503470648&appid=${process.env.REACT_APP_API_ID}`;

export function getLocationName() {
  return http.get(apiEndPoint);
}
