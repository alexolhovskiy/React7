import { createSlice } from "@reduxjs/toolkit";

const registrationSlice=createSlice({
    name:"registration",
    initialState:{
        name:''
    },
    reducers:{
        changeName:(state,action)=>{
            state.name=action.payload;
        }
    }
});

export default registrationSlice.reducer;
export const {changeName}=registrationSlice.actions;