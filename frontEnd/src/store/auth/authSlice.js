import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const logIn = createAsyncThunk("auth/logIn",
  async (user, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {
      const res = await fetch(`
        http://localhost:4000/users?email=${user.email}&password=${user.password}`
        
        
    
    )
    const data = await res.json()
    if(data.length===0){
       return rejectWithValue("Invalid email or password")
    }
      
      return data[0]
    } catch (error) {
      return rejectWithValue(error)
    }
  }

)

export const signUp = createAsyncThunk("auth/signUp",
  async (user, thunkAPI) => {
   
    const { rejectWithValue } = thunkAPI
    try {
      const res = await fetch(`http://localhost:4000/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json;"
        }
      })
      const data = await res.json()
     
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }

)

const initialState = {
  users: [],
  loading: false,
  error: null,
  user:{},
  isLogIn:false,
  accessToken: null,


}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut:(state)=>{
      state.user=null,
      state.isLogIn=false,
      state.accessToken=null
    }

  },
  extraReducers: (builder) => {

    //login in
    builder.addCase(logIn.pending, (state) => {
      state.error = null
      state.loading = true
    })
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false,
      state.isLogIn=true
    })
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })

    //register
    builder.addCase(signUp.pending, (state) => {
      state.error = null
      state.loading = true
    })
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
       state.isLogIn=true
    })
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })

   

  }

})
export const {logOut}=authSlice.actions
export default authSlice.reducer