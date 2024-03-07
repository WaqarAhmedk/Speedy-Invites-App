import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  tabIndex: 0,
  active: 'invitations',
};

export const tabSlice = createSlice({
  name: 'tabSlice',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.tabIndex = action.payload;
    },
  },
});

export const {changeTab} = tabSlice.actions;
export default tabSlice.reducer;
