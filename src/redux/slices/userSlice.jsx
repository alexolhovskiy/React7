import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser=createAsyncThunk(
    'user/fetchUser',
    async(id,thunkApi)=>{
        
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/users/'+id)
            if(!response.ok){
                throw new Error("Error");
            }
            return await response.json();
        }catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
})

const initialState={
    user:{},
    loading:false,
    error:null,
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:
    (builder)=>{
        builder
            .addCase(fetchUser.pending,(state,action)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(fetchUser.fulfilled,(state,action)=>{
                state.loading=false;
                state.user=action.payload;
            })
            .addCase(fetchUser.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            })
      
        
    }
});

export default userSlice.reducer;