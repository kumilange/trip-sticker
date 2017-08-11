const initialState = {
  stickers: []
}

const reducer = (state = initialState, action)=> {
  switch(action.type){
    case 'INIT_STICKER':
      const stickers = action.payload;
      return Object.assign({}, state, {stickers})
    case 'CLICK_SPOT':
      return clickSpot(state, action);
    default:
    return state;
  }
}

const clickSpot = (state, action)=> {
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