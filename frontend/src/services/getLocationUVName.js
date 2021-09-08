import http from "./httpService";

const apiEndPoint =
  "https://fix8y9br5m.execute-api.us-east-2.amazonaws.com/s3/weather";

export const getLocationUVName = (latitude, longitude) => {
  const params = {
    lat: latitude,
    lon: longitude,
  };

  return http.get(apiEndPoint, { params });
};
