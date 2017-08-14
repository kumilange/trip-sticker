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
    case 'SAVE_STICKER':
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
    case 'EDIT_STICKER':
      return editStickerInfo(state, action)
    case 'DELETE_STICKER':
      return deleteStickerInfo(state, action)
    case 'CLEAR_STICKER':
      return {
        ...state,
        sticker: {
          country: undefined,
          city: undefined,
          note: undefined,
          username: undefined
        }
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: true,
        isAddModal: true,
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
    case 'OPEN_EDIT_MODAL':
      let sticker = action.payload;
      sticker.isInfoWindowOpen = false;

      return {
        ...state,
        isModalOpen: true,
        isAddModal: false,
        sticker: sticker
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