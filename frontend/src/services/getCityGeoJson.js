import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_WEATHER_END_POINT;

export default function getCityGeoJson(suburb) {
  const params = {
    q: "city",
    v: suburb.join(","),
  };

  return http.get(apiEndPoint, { params });
}
