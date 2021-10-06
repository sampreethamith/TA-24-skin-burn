export const getLocation = (showPosition, showError) => {
  if (navigator.geolocation) {
    // console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    // console.log("Location Not Enabled");
  }
};
