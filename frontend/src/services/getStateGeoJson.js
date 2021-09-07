import http from "./httpService";

const apiEndPoint =
  "https://fix8y9br5m.execute-api.us-east-2.amazonaws.com/s3/geojson?q=test";

export default function getStateGeoJson() {
  return http.get(apiEndPoint);
}
