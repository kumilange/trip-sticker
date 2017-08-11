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
  return async (dispatch) => {
    try {
      const lat = latLng.lat();
      const lng = latLng.lng();
      const postData =  { lat, lng };
      const savedSticker = await ( await fetch('http://localhost:3001', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(postData)
      })).json();

      // update state in reducer
      dispatch({
        type: 'CLICK_SPOT',
        payload: savedSticker
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}
