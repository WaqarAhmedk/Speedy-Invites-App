import {configureStore} from '@reduxjs/toolkit';
import tabsReducer from '../slices/tabSlice';

export const store = configureStore({
  reducer: {tabs: tabsReducer},
});
