const initialState = {
  isLocationEnabled: false,
  latitude: "",
  longitude: "",
  uvi: "",
  locationName: "",
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LAT_LONG_AVAILABLE":
      const { latitude, longitude } = action.payload;
      return { ...state, isLocationEnabled: true, latitude, longitude };
    case "LOCATION_NOT_AVAILABLE":
      return { ...state, isLocationEnabled: false };
    case "LOCATION_UV_NAME":
      const { uvi, locationName } = action.payload;
      return { ...state, uvi, locationName };
    default:
      return state;
  }
};
