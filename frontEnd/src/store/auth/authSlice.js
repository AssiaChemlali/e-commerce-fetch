import { createSlice } from "@reduxjs/toolkit";

const initialState={
  userId:"1",
  isLogIn:false
}
const authSlice=createSlice({
  name:"auth",
  initialState,
  reducers:{},
  
})
export default authSlice.reducer