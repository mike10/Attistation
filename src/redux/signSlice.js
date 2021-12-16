import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchSign = createAsyncThunk('sign', async (id) => {
  console.log("sign/get");
  const res = await fetch( `https://dummyapi.io/data/v1/user/${id}`, {
      headers: {
          "app-id": '61812ad9523754cd8285f9e7'
      }
    });
  return res.json();
})

export const fetchCreateUser = createAsyncThunk('sign', async (user) => {
  console.log(user);
  const res = await fetch("https://dummyapi.io/data/v1/user/create", {
      headers: {
          "Content-type": "application/json",
          "app-id": '61812ad9523754cd8285f9e7'
        },
      method: 'POST',
      body: user
  });
  return res.json();
})  

export const fetchUpdateSign = createAsyncThunk('sign', async (id) => {
 
  const res = await fetch(`https://dummyapi.io/data/v1/user/${id.id}`, {
      headers: {
          "Content-type": "application/json",
          "app-id": '61812ad9523754cd8285f9e7'
        },
      method: 'PUT',
      body: id.data
  });
  return res.json();
})  

const signSlice = createSlice({
    name: 'sign',
    initialState: {
      data: {},
      status: undefined
    },  
    reducers: {
      closeProfile: () => {
        return {
          data: {},
          status: undefined
        }
      }
    },
    extraReducers: {
      [fetchSign.fulfilled]: (state, action) => {
        console.log("action.payload", action.payload);
        return {
          data: action.payload,
          status: "success"
        }
      },
      [fetchSign.pending]: (state, action) => {
        return {
          data: state.data,
          status: "loading"
        }
      },
      [fetchSign.rejected]: (state, action) => {
        return {
          data: state.data,
          status: "error"+action.payload
        }
      }
    }
  
  })

  export const { closeProfile } = signSlice.actions


  export default signSlice.reducer