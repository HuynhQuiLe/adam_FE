import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: {
        brand_id: '',
        item_name:'',
        description: '',
        model:''
    }
}

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {
    setItem: (state, action) => {
        state.item = {
            ...state.item,
            ...action.payload
        }
    }
  }
});

export const {setItem} = itemSlice.actions

export default itemSlice.reducer