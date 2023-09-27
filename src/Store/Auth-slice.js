import { createSlice } from "@reduxjs/toolkit";
const AuthSlice =createSlice({
  name:'auth',
  initialState:{
    gologin:true,
  },
  reducers:{
    setlogin(state){
      state.gologin=!(state.gologin);
    } 
  }
});
export const AuthActions =AuthSlice.actions;
export default AuthSlice.reducer;