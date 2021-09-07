import http from "./httpService";

const apiEndPoint =
  "https://fix8y9br5m.execute-api.us-east-2.amazonaws.com/s3/weather";

export const getLocationHistory = (latitude, longitude, hitory_timespan) => {
  const params = {
    lat: latitude,
    lon: longitude,
    history: hitory_timespan
  };

  return http.get(apiEndPoint, { params });
};
