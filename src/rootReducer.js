import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice.js';
import colorsReducer from './features/colorsSlice.js';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  colors: colorsReducer,
});

export default rootReducer;
