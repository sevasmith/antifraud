import { createSlice } from '@reduxjs/toolkit';

const storedUser = localStorage.getItem('currentUser');

const initialState = {
  currentUser: storedUser ? JSON.parse(storedUser) : null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
