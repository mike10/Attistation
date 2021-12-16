import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts', async (page) => {
  
  const res = await fetch(
    `https://dummyapi.io/data/v1/post?page=${page}limit=20`, {
      headers: {
        "app-id": '61812ad9523754cd8285f9e7'
      }
    });
  return res.json();
})

export const fetchComments = createAsyncThunk('comments', async (id) => {
  console.log(id);
  const res = await fetch(
    `https://dummyapi.io/data/v1/post/${id}/comment?limit=10`, {
      headers: {
        "app-id": '61812ad9523754cd8285f9e7'
      }
    });
  return res.json();
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
      data: [],
      page: 0,
      total: 21,
      comments: [],
      status: undefined
    },  
    reducers: {},
    extraReducers: {
      [fetchPosts.fulfilled]: (state, action) => {
        console.log(action);
        return {
          data: [...state.data, ...action.payload.data],
          page: state.page+1,
          total: action.payload.total,
          comments: state.comments,
          status: "success"
        }
      },
      [fetchPosts.pending]: (state, action) => {
        return {
          data: state.data,
          page: state.page,
          total: state.total,
          comments: state.comments,
          status: "loading"
        }
      },
      [fetchPosts.rejected]: (state, action) => {
        return {
          data: state.data,
          page: state.page,
          total: state.total,
          comments: state.comments,
          status: "error"
        }
      },
      [fetchComments.fulfilled]: (state, action) => {
        console.log(action);
        return {
          data: state.data,
          page: state.page,
          total: state.total,
          comments: action.payload.data,
          status: "success"
        }
      },
      [fetchComments.pending]: (state, action) => {
        return {
          data: state.data,
          page: state.page,
          total: state.total,
          comments: state.comments,
          status: "loading"
        }
      },
      [fetchComments.rejected]: (state, action) => {
        return {
          data: state.data,
          page: state.page,
          total: state.total,
          comments: state.comments,
          status: "error"
        }
      }
    }
  
  })

  export default postsSlice.reducer
