import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../entities/user/model/userSlice';
import { dummyApi } from '../../shared/api/dummyApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [dummyApi.reducerPath]: dummyApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(dummyApi.middleware),
});
