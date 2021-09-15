import mushroomList from './mushrooms';

const defaultState = {
  list: mushroomList,
};

const MushroomReducer = (state = defaultState, { type, payload }) => {
  let newState;
  switch (type) {
    case 'DISPLAY_MUSHROOMS':
      newState = { ...state, list: payload };
      return newState;
    default:
      return state;
  }
};

export default MushroomReducer;
