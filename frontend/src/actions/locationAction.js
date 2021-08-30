export const latlongAvailable = (latitude, longitude) => {
  return {
    type: "LAT_LONG_AVAILABLE",
    payload: { latitude, longitude },
  };
};

export const latlongNotAvailable = () => {
  return {
    type: "LOCATION_NOT_AVAILABLE",
  };
};

export const locationUVName = (uvi, locationName) => {
  return {
    type: "LOCATION_UV_NAME",
    payload: { uvi, locationName },
  };
};
