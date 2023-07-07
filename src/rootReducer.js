import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice.js';
import colorsReducer from './features/colorsSlice.js';
import goodsReducer from './features/goodsSlice.js';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  colors: colorsReducer,
  goods: goodsReducer,
});

export default rootReducer;
