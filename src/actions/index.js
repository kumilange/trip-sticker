export function clickSpot (latLng) {
  return (dispatch)=> {
    dispatch({
      type: 'CLICK_SPOT',
      payload: {
        lat: latLng.lat(),
        lng: latLng.lng(),
      }
    })
  }
}