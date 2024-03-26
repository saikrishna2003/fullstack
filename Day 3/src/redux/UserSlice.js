import { createSlice } from "@reduxjs/toolkit"
// const {createSlice} = require("@reduxjs/toolkit")
const initialState = {
    isAuthenticated: false,
    token: '',
    role:''
}

const UserSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state,action) => {
            state.isAuthenticated = action.payload
        },
        setToken: (state,action) => {
            state.isAuthenticated = action.payload
        },
        setRole: (state,action) =>{
            state.role = action.payload
        }
    }
})

export const {setAuthenticated,setRole,setToken} = UserSlice.actions;
export default UserSlice.reducer;