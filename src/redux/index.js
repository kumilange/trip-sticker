/********* constants *********/
const SAVE_STICKER = 'SAVE_STICKER'
const EDIT_STICKER = 'EDIT_STICKER'
const DELETE_STICKER = 'DELETE_STICKER'
const CLEAR_STICKER = 'CLEAR_STICKER'
const OPEN_INFO_WINDOW = 'OPEN_INFO_WINDOW'
const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW'
const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const INPUT_COUNTRY = 'INPUT_COUNTRY'
const INPUT_CITY = 'INPUT_CITY'
const INPUT_NOTE = 'INPUT_NOTE'
const INPUT_USERNAME = 'INPUT_USERNAME'

/********* action creator *********/
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
    // update state in redux
    dispatch({
      type: 'INIT_STICKER',
      payload: stickers
    })
  }
}

export function saveSticker (sticker) {
  return async dispatch => {
    try {
      const postData = sticker;
      // APT post, save data in DB
      const savedSticker = await ( await fetch('http://localhost:3001', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(postData)
      })).json();

      // update state in redux
      dispatch({
        type: SAVE_STICKER,
        payload: savedSticker
      });

      // reset input form
      dispatch({
        type: CLEAR_STICKER,
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function editSticker (sticker) {
  return async dispatch => {
    try {
      const putData = sticker;

      // APT put, update data in DB
      const updatedSticker = await ( await fetch('http://localhost:3001', {
        method: 'put',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(putData)
      })).json();

      // update state in redux
      dispatch({
        type: EDIT_STICKER,
        payload: updatedSticker
      });

      // reset input form
      dispatch({
        type: CLEAR_STICKER,
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

      // update state in redux
      dispatch({
        type: DELETE_STICKER,
        payload: deletedId
      });

      // reset input form
      dispatch({
        type: CLEAR_STICKER,
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
      type: CLOSE_INFO_WINDOW,
      payload: targetSticker.id
    })

    // open modal for edit
    dispatch({
      type: OPEN_EDIT_MODAL,
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
      type: OPEN_MODAL,
      payload: position
    })
  }
}

export function closeModal () {
  return dispatch => {
    dispatch({
      type: CLOSE_MODAL,
    })
    // reset input form
    dispatch({
      type: CLEAR_STICKER,
    })
  }
}

export function openInfoWindow (targetMarker) {
  return dispatch => {
    dispatch({
      type: OPEN_INFO_WINDOW,
      payload: targetMarker.id
    })
  }
}

export function closeInfoWindow (targetMarker) {
  return dispatch => {
    dispatch({
      type: CLOSE_INFO_WINDOW,
      payload: targetMarker.id
    })
  }
}

export function inputCountry (country) {
  return dispatch => {
    dispatch({
      type: INPUT_COUNTRY,
      payload: country
    })
  }
}

export function inputCity (city) {
  return dispatch => {
    dispatch({
      type: INPUT_CITY,
      payload: city
    })
  }
}

export function inputNote (note) {
  return dispatch => {
    dispatch({
      type: INPUT_NOTE,
      payload: note
    })
  }
}

export function inputUsername (username) {
  return dispatch => {
    dispatch({
      type: INPUT_USERNAME,
      payload: username
    })
  }
}

/********* reducer *********/
const stickerInitialState = {
  id: undefined,
  lat: undefined,
  lng: undefined,
  country: undefined,
  city: undefined,
  note: undefined,
  username: undefined,
  isInfoWindowOpen: false
}

const initialState = {
  stickers: [],
  sticker: stickerInitialState,
  isModalOpen: false,
  isAddModal: true
}

const reducer = (state = initialState, action)=> {
  switch(action.type){
    case 'INIT_STICKER':
      return {
        ...state,
        stickers: [
          ...state.stickers,
          ...action.payload
        ]
      }
    case SAVE_STICKER:
      let newSticker = action.payload;
      newSticker.isInfoWindowOpen = false;
      return {
        ...state,
        isModalOpen: false,
        stickers : [
          ...state.stickers,
          newSticker
        ],
        sticker: newSticker
      }
    case EDIT_STICKER:
      return editStickerInfo(state, action)
    case DELETE_STICKER:
      return deleteStickerInfo(state, action)
    case CLEAR_STICKER:
      return {
        ...state,
        sticker: {
          country: undefined,
          city: undefined,
          note: undefined,
          username: undefined
        }
      }
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        isAddModal: true,
        sticker: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        sticker: stickerInitialState
      }
    case OPEN_EDIT_MODAL:
      let sticker = action.payload;
      sticker.isInfoWindowOpen = false;
      return {
        ...state,
        isModalOpen: true,
        isAddModal: false,
        sticker: sticker
      }
    case OPEN_INFO_WINDOW:
      return handleInfoWindow(state, action, true);
    case CLOSE_INFO_WINDOW:
      return handleInfoWindow(state, action, false);
    case INPUT_COUNTRY:
      return setStickerInput(state, action, 'country');
    case INPUT_CITY:
      return setStickerInput(state, action, 'city');
    case INPUT_NOTE:
      return setStickerInput(state, action, 'note');
    case INPUT_USERNAME:
      return setStickerInput(state, action, 'username');
    default:
      return state;
  }
}

const editStickerInfo = (state, action)=> {
  const stickers = Array.prototype.concat(state.stickers);
  const index = stickers.findIndex(sticker=> sticker.id === action.payload.id);
  stickers[index] = action.payload;
  return {
    ...state,
    isModalOpen: false,
    stickers
  }
}

const deleteStickerInfo = (state, action)=> {
  const stickers = Array.prototype.concat(state.stickers);
  const index = stickers.findIndex(sticker=> sticker.id === action.payload.id);
  stickers.splice(index, 1);
  return {
    ...state,
    isModalOpen: false,
    stickers
  }
}

const handleInfoWindow = (state, action, isOpen)=> {
  const stickers = Array.prototype.concat(state.stickers);
  const index = stickers.findIndex(sticker=> sticker.id === action.payload);
  stickers[index].isInfoWindowOpen = isOpen;
  return {
    ...state,
    stickers
  }
}

const setStickerInput = (state, action, label)=> {
  return {
    ...state,
    sticker: {
      ...state.sticker,
      [label]: action.payload
    }
  }
}

export default reducer;