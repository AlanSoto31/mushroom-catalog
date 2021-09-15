const defaultState = {
  loading: false,
  list: [],
  error: null,
};

const MushroomReducer = (state = defaultState, { type, payload }) => {
  let newState;
  switch (type) {
    case 'DISPLAY_MUSHROOMS':
      newState = { ...state, list: payload };
      return newState;
    case 'SET_LOADING':
      newState = { ...state, loading: payload };
      return newState;
    case 'SHOW_ERROR':
      newState = { ...state, error: payload };
      return newState;
    default:
      return state;
  }
};

export default MushroomReducer;
