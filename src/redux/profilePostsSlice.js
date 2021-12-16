import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProfilePosts = createAsyncThunk('profileposts/get', async (id) => {
  
const res = await fetch(
    `https://dummyapi.io/data/v1/user/${id}/post?limit=5`, {
      headers: {
        "app-id": '61812ad9523754cd8285f9e7'
      }
    });
    
    return res.json();
})


const profilePostsSlice = createSlice({
    name: 'profilePosts',
    initialState: {
      data: [],
      status: undefined
    },  
    reducers: {},
    extraReducers: {
      [fetchProfilePosts.fulfilled]: (state, action) => {
        return {
          data: action.payload.data,
          status: "success"
        }
      },
      [fetchProfilePosts.pending]: (state, action) => {
        return {
          data: state.data,
          status: "loading"
        }
      },
      [fetchProfilePosts.rejected]: (state, action) => {
        return {
          data: state.data,
          status: "error"
        }
      }
    }
  
  })

  export default profilePostsSlice.reducer
