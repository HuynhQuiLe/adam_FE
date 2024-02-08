import { createSlice } from '@reduxjs/toolkit'
import { userLocalStorage } from '../api/localStorage';

const initialState = {
    isLogin:  userLocalStorage.get() ? true : false,
    token: userLocalStorage.get() || null
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
        if(action.payload) {
            userLocalStorage.set(action.payload)
            state.isLogin = true;
        } else {
            userLocalStorage.remove()
            state.isLogin = false;
        }
    },

    setToken: (state, action) => {
        state.token = action.payload
    }
  }
});

export const {setIsLogin, setToken} = authSlice.actions

export default authSlice.reducer