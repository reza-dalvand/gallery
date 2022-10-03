import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  themeMood: true,
};
const slice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    ChangeThemeMood: (state, action) => {
      state.themeMood = action.payload.themeMood;
    },
  },
  extraReducers: {},
});
export const {ChangeThemeMood} = slice.actions;
export default slice.reducer;
