import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    error: null,
    isLoggedIn: false,
    isLoading: false,
    token: null
}

export const loginUser = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
    console.log(credentials)
    try {
        const response = await axios.post('https://json-server-bmy.onrender.com/auth/login', credentials)
        console.log(response.data)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue("Server Error!")
    }  
   
})

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload
            state.isLoggedIn = false
            state.user = null
            state.token = null
            state.isLoading = false
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.data
            state.token = action.payload.token
            state.isLoggedIn = true
            state.error = null
            state.isLoading = false
        })
    }
    
})

export const {logout} = usersSlice.actions
export default usersSlice.reducer