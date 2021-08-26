import http from "./httpService";

const apiEndPoint =
  "https://fix8y9br5m.execute-api.us-east-2.amazonaws.com/s2/home?homedata=true";

export const getSkinBurnDemograph = () => {
  return http.get(apiEndPoint);
};
