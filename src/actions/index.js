export function fetchStickers () {
  return async dispatch => {
    // API get, get data from DB
    const response = await (await fetch('http://localhost:3001')).json();
    let stickers = [];
    for(let record of response) {
      let sticker = {};
      sticker.lat = record.lat;
      sticker.lng = record.lng;
      sticker.id = record.id;
      sticker.country = record.country;
      sticker.city = record.city;
      sticker.note = record.note;
      sticker.username = record.username;
      sticker.isInfoWindowOpen = false;
      stickers.push(sticker);
    }
    // update state in reducer
    dispatch({
      type: 'INIT_STICKER',
      payload: stickers
    })
  }
}

export function saveStickerInfo (sticker) {
  return async dispatch => {
    try {
      const postData = sticker;
      // APT post, save data in DB
      const savedSticker = await ( await fetch('http://localhost:3001', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(postData)
      })).json();
      // update state in reducer
      dispatch({
        type: 'SAVE_STICKER',
        payload: savedSticker
      });
      // reset input form
      dispatch({
        type: 'CLEAR_STICKER',
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function editStickerInfo (sticker) {
  return async dispatch => {
    try {
      const putData = sticker;
      // APT put, update data in DB
      const updatedSticker = await ( await fetch('http://localhost:3001', {
        method: 'put',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(putData)
      })).json();
      // update state in reducer
      dispatch({
        type: 'EDIT_STICKER',
        payload: updatedSticker
      });
      // reset input form
      dispatch({
        type: 'CLEAR_STICKER',
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function deleteSticker (sticker) {
  return async dispatch => {
    const deleteData = sticker;

    try {
      // APT delete, delete data in DB
      const deletedId = await ( await fetch('http://localhost:3001', {
        method: 'delete',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(deleteData)
      })).json();
      // update state in reducer
      dispatch({
        type: 'DELETE_STICKER',
        payload: deletedId
      });
      // reset input form
      dispatch({
        type: 'CLEAR_STICKER',
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function openModalEdit (targetSticker) {
  return dispatch => {
    // close infoWindow
    dispatch({
      type: 'CLOSE_INFO_WINDOW',
      payload: targetSticker.id
    })
    // open modal for edit
    dispatch({
      type: 'OPEN_EDIT_MODAL',
      payload: targetSticker
    });
  }
}

export function openModal (latLng) {
  const lat = latLng.lat();
  const lng = latLng.lng();
  const position =  { lat, lng };
  return dispatch => {
    dispatch({
      type: 'OPEN_MODAL',
      payload: position
    })
  }
}

export function closeModal () {
  return dispatch => {
    dispatch({
      type: 'CLOSE_MODAL',
    })
    // reset input form
    dispatch({
      type: 'CLEAR_STICKER',
    })
  }
}

export function openInfoWindow (targetMarker) {
  return dispatch => {
    dispatch({
      type: 'OPEN_INFO_WINDOW',
      payload: targetMarker.id
    })
  }
}

export function closeInfoWindow (targetMarker) {
  return dispatch => {
    dispatch({
      type: 'CLOSE_INFO_WINDOW',
      payload: targetMarker.id
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
