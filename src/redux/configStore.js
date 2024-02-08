import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import authSlice from './authSlice'
import modalSlice from './modalSlice'
import notificationSlice from './notificationSlice'
import itemSlice from './itemSlice'
export const store = configureStore({
  reducer: { loadingSlice, authSlice, modalSlice, notificationSlice, itemSlice },
});
