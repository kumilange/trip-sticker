export function fetchStickers () {
  return async (dispatch) => {
    // get sticker data
    const response = await (await fetch('http://localhost:3001')).json();

    let stickers = [];
    for(let record of response) {
      let sticker = {}
      sticker.lat = record.lat;
      sticker.lng = record.lng;
      stickers.push(sticker)
    }
    dispatch({
      type: 'INIT_STICKER',
      payload: stickers
    })
  }
}

export function clickSpot (latLng) {
  // save db

  // update state in reducer
  return dispatch => {
    dispatch({
      type: 'CLICK_SPOT',
      payload: {
        lat: latLng.lat(),
        lng: latLng.lng()
      }
    })
  }
}
