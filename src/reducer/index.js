const initialState = {
  stickers: [],
  sticker: {
    id: null,
    lat: null,
    lng: null,
    country: null,
    city: null,
    note: null,
    username: null,
    isInfoWindowOpen: false
  },
  isModalOpen: false,
}

const reducer = (state = initialState, action)=> {
  switch(action.type){
    case 'INIT_STICKER':
      const stickers = action.payload;
      return Object.assign({}, state, {stickers})
    case 'SAVE_STICKER':
      return saveStickerInfo(state, action);
    case 'OPEN_MODAL':
      let newState = Object.assign({}, state);
      newState.isModalOpen = true;
      newState.sticker.lat = action.payload.lat;
      newState.sticker.lng = action.payload.lng;
      return newState;
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        isModalOpen : false,
        sticker: {
          id: null,
          lat: null,
          lng: null,
          country: null,
          city: null,
          note: null,
          username: null,
          isInfoWindowOpen: false
        },
      });
    case 'OPEN_INFO_WINDOW':
      return openInfoWindow(state, action);
    case 'CLOSE_INFO_WINDOW':
      return Object.assign({}, state, {
        isInfoWindowOpen : false,
      });
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

const setStickerInput = (state, action, label)=> {
  let newState = Object.assign({}, state);
  newState.sticker[label] = action.payload;
  return newState;
}

const saveStickerInfo = (state, action)=> {
  const stickers = [].concat(state.stickers);
  let newSticker = action.payload;
  newSticker.isInfoWindowOpen = false;
  stickers.push(newSticker)
  return Object.assign({}, state, {
    stickers,
    isModalOpen: false,
  })
}

const openInfoWindow = (state, action)=> {
  const stickers = [].concat(state.stickers);
  const index = stickers.findIndex(sticker=> sticker.id === action.payload);
  stickers[index].isInfoWindowOpen = true;
  return Object.assign({}, state, {
    stickers,
  });
}

export default reducer;