import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_WEATHER_END_POINT;

export const getLocationUVName = (latitude, longitude) => {
  const params = {
    q: "loc",
    v: `${latitude},${longitude}`,
  };

  return http.get(apiEndPoint, { params });
};
