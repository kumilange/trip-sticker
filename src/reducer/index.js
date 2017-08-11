const initialState = {
  stickers: [],
  sticker: {
    id: null,
    position: null,
    country: null,
    city: null,
    note: null,
    username: null,
  },
  isModalOpen: false,
  position: null,
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
    case 'INPUT_COUNTRY':
      return Object.assign({}, state, {
        sticker : { country: action.payload }
      });
    case 'INPUT_CITY':
      return Object.assign({}, state, {
        sticker : { country: action.payload }
      });
    case 'INPUT_NOTE':
      return Object.assign({}, state, {
        sticker : { country: action.payload }
      });
    case 'INPUT_USERNAME':
      return Object.assign({}, state, {
        sticker : { country: action.payload }
      });
    default:
    return state;
  }
}

const saveStickerInfo = (state, action)=> {
  console.log('save',action)
  return Object.assign({}, ...state, {
    stickers: [
      ...state.stickers,
      ...state.sticker,
      ...state.sticker.position
    ]
  });
}

// save後にリセットするアクションディスパッチ

// const setStickerInput = (state, action, label)=> {
//   return Object.assign({}, state, {
//     sticker : { label: action.payload }
//   });
// }

export default reducer;