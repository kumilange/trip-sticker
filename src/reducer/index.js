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
      return {
        ...state,
        stickers: [
          ...state.stickers,
          ...action.payload
        ]
      }
    case 'SAVE_STICKER':
      let newSticker = action.payload;
      newSticker.isInfoWindowOpen = false;

      return {
        ...state,
        isModalOpen: false,
        stickers : [
          ...state.stickers,
          newSticker
        ]
      }
    case 'CLEAR_STICKER':
      return {
        ...state,
        sticker: {
          country: null,
          city: null,
          note: null,
          username: null
        }
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: true,
        sticker: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
        sticker: stickerInitialState
      }
    case 'OPEN_INFO_WINDOW':
      return handleInfoWindow(state, action, true);
    case 'CLOSE_INFO_WINDOW':
      return handleInfoWindow(state, action, false);
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