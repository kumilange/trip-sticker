const stickerInitialState = {
  id: null,
  lat: null,
  lng: null,
  country: null,
  city: null,
  note: null,
  username: null,
  isInfoWindowOpen: false
}

const initialState = {
  stickers: [],
  sticker: stickerInitialState,
  isModalOpen: false,
}

const reducer = (state = initialState, action)=> {
  switch(action.type){
    case 'INIT_STICKER':
      return initStickers(state, action)
      // const stickers = action.payload;
      // return Object.assign({}, state, {stickers})
    case 'SAVE_STICKER':
      return saveStickerInfo(state, action);
    case 'CLEAR_STICKER':
      return clearStickerInfo(state, action);
    case 'OPEN_MODAL':
      return openModal(state, action);
    case 'CLOSE_MODAL':
      return closeModal(state, action)
    case 'OPEN_INFO_WINDOW':
      return handleInfoWindow(state, action, 'open');
    case 'CLOSE_INFO_WINDOW':
      return handleInfoWindow(state, action, 'close');
    case 'INPUT_COUNTRY':
      return setStickerInput(state, action, 'country');
    case 'INPUT_CITY':
      return setStickerInput(state, action, 'city');
    case 'INPUT_NOTE':
      return setStickerInput(state, action, 'note');
    case 'INPUT_USERNAME':
      return setStickerInput(state, action, 'username');
    default:
      return state;
  }
}

const initStickers = (state, action)=> {
  const stickers = action.payload;
  return Object.assign({}, state, {stickers})
}

const setStickerInput = (state, action, label)=> {
  let newState = Object.assign({}, state);
  newState.sticker[label] = action.payload;
  return newState;
}

const saveStickerInfo = (state, action)=> {
  const stickers = Array.prototype.concat(state.stickers);
  let newSticker = action.payload;
  newSticker.isInfoWindowOpen = false;
  stickers.push(newSticker);
  return Object.assign({}, state, {
    stickers,
    isModalOpen: false,
  });
}

const clearStickerInfo = (state, action)=> {
  let newState = Object.assign({}, state);
  newState.sticker.country = null;
  newState.sticker.city = null;
  newState.sticker.note = null;
  newState.sticker.username = null;
  return newState;
}

const openModal = (state, action)=> {
  let newState = Object.assign({}, state);
  newState.isModalOpen = true;
  newState.sticker.lat = action.payload.lat;
  newState.sticker.lng = action.payload.lng;
  return newState;
}

const closeModal = (state, action)=> {
  return Object.assign({}, state, {
    isModalOpen : false,
    sticker: stickerInitialState
  });
}

const handleInfoWindow = (state, action, test)=> {
  const stickers = Array.prototype.concat(state.stickers);
  const index = stickers.findIndex(sticker=> sticker.id === action.payload);
  stickers[index].isInfoWindowOpen = test === 'open' ? true : false;
  return Object.assign({}, state, {
    stickers,
  });
}

export default reducer;