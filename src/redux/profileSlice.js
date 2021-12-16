import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProfile = createAsyncThunk('profile/get', async (id) => {
  
  const res = await fetch(
    `https://dummyapi.io/data/v1/user/${id}`, {
      headers: {
          "app-id": '61812ad9523754cd8285f9e7'
      }
    });
  return res.json();
})

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      data: {},
      status: undefined
    },  
    reducers: {},
    extraReducers: {
      [fetchProfile.fulfilled]: (state, action) => {
        return {
          data: action.payload,
          status: "success"
        }
      },
      [fetchProfile.pending]: (state, action) => {
        return {
          data: state.data,
          status: "loading"
        }
      },
      [fetchProfile.rejected]: (state, action) => {
        return {
          data: state.data,
          status: "error"
        }
      }
    }
  
  })

  export default profileSlice.reducer
  