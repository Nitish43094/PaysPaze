import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    userData: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
}

const useSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData(state, value) {
            state.userData = value.payload;
        },
        setToken(state, value) {
            state.token = value.payload;
        }
    }
})

export const {setUserData,setToken} = useSlice.actions;

export default useSlice.reducer;