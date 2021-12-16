import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/get', async (page) => {
  const res = await fetch(
    `https://dummyapi.io/data/v1/user?page=${page}&limit=20`, {
      headers: {
        "app-id": '61812ad9523754cd8285f9e7'
      }
    });
  
  return res.json();
})


const usersSlice = createSlice({
    name: 'users',
    initialState: {
      data: [],
      page: 0,
      total: 21,
      status: undefined
    },  
    reducers: {},
    extraReducers: {
      [fetchUsers.fulfilled]: (state, action) => {
        return {
          data: [...state.data, ...action.payload.data],
          page: state.page+1,
          total: action.payload.total,
          status: "success"
        }
      },
      [fetchUsers.pending]: (state, action) => {
        return {
          data: state.data,
          page: state.page,
          total: state.total,
          status: "loading"
        }
      },
      [fetchUsers.rejected]: (state, action) => {
        return {
          data: state.data,
          page: state.page,
          total: state.total,
          status: "error"
        }
      }
    }
  
  })

  export default usersSlice.reducer
