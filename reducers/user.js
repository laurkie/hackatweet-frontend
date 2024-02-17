import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, firstname: null, username: null, userImg: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.firstname = action.payload.firstname;
      state.value.username = action.payload.username;
      state.value.userImg = action.payload.userImg;
    },
    logout: (state) => {
      Object.values(state.value).forEach(value => value = null);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;