import { combineReducers } from 'redux';
import MushroomReducer from './MushroomReducer';

const rootReducer = combineReducers({
  mushrooms: MushroomReducer,
});

export default rootReducer;
