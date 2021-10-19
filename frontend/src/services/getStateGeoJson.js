import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_WEATHER_END_POINT;

export default function getStateGeoJson() {
  const params = {
    q: "state",
    v: "all",
  };
  return http.get(apiEndPoint, { params });
}
