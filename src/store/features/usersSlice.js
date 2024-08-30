import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    error: null,
    isLoggedIn: false
}

export const loginUser = createAsyncThunk('user/login', async (credentials) => {
    console.log(credentials)
    try {
        const response = await axios.post('https://dummyjson.com/auth/login', credentials)

        console.log(response.data)
        
        return response.data
    } catch (err) {
        return "Server Error!"
    }  
   
})

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginn: (state, action) => {
            console.log("sum", sum)
            state.user = action.payload
            state.isLoggedIn = true
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload
            state.isLoggedIn = false
            state.user = null
        })
        .addCase(loginUser.fulfilled, (state, action) => {
             console.log("Sum of large array:", sum);
            state.user = action.payload
            state.isLoggedIn = true
            state.error = null
        })
    }
    
})

export const {loginn} = usersSlice.actions
export default usersSlice.reducer