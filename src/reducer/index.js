const initialState = {
  stickers: [],
  isModalOpen: false,
  position: null
}

const reducer = (state = initialState, action)=> {
  switch(action.type){
    case 'INIT_STICKER':
      const stickers = action.payload;
      return Object.assign({}, state, {stickers})
    case 'SAVE_STICKER':
      return saveStickerInfo(state, action);
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        isModalOpen : true,
        position: action.payload
      });
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        isModalOpen : false,
        position: null
      });
    default:
    return state;
  }
}

const saveStickerInfo = (state, action)=> {
  return Object.assign({}, ...state, {
    stickers: [
      ...state.stickers,
      {
        lat: action.payload.lat,
        lng: action.payload.lng
      }
    ]
  });
}

export default reducer;