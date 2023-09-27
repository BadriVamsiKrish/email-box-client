import { createSlice } from "@reduxjs/toolkit";
const AuthSlice =createSlice({
  name:'auth',
  initialState:{
    gologin:true,
    registered:false,
    Token:'',
  },
  reducers:{
    setlogin(state){
      state.gologin=!(state.gologin);
    },
    setRegistered(state){
      state.registered=!(state.registered);
    },
    setToken(state,action){
      state.Token=action.payload;
    }

  }
});
export const AuthActions =AuthSlice.actions;
export default AuthSlice.reducer;