import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authApiSlice";

//create slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    message: null,
  },
  reducers: {
    setmsgEmpty: (state, action) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
      });
  },
});

//selectors

//actions
export const { setmsgEmpty } = authSlice.actions;

//export
export default authSlice.reducer;
