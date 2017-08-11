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

export function saveStickerInfo (sticker) {
  return async (dispatch) => {
    try {
      const postData =  sticker;
      // save data in DB
      const savedSticker = await ( await fetch('http://localhost:3001', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(postData)
      })).json();

      // update state in reducer
      dispatch({
        type: 'SAVE_STICKER',
        payload: savedSticker
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function openModal (latLng) {
  const lat = latLng.lat();
  const lng = latLng.lng();
  const position =  { lat, lng };
  return dispatch => {
    dispatch({
      type: 'OPEN_MODAL',
      isModalOpen: true,
      payload: position
    })
  }
}

export function closeModal () {
  return dispatch => {
    dispatch({
      type: 'CLOSE_MODAL',
      isModalOpen: false
    })
  }
}

export function inputCountry (country) {
  return dispatch => {
    dispatch({
      type: 'INPUT_COUNTRY',
      payload: country
    })
  }
}

export function inputCity (city) {
  return dispatch => {
    dispatch({
      type: 'INPUT_CITY',
      payload: city
    })
  }
}

export function inputNote (note) {
  return dispatch => {
    dispatch({
      type: 'INPUT_NOTE',
      payload: note
    })
  }
}

export function inputUsername (username) {
  return dispatch => {
    dispatch({
      type: 'INPUT_USERNAME',
      payload: username
    })
  }
}
