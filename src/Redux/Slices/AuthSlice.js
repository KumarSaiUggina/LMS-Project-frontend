import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

const authSlice = createSlice({
  name: "auth",
  intialState,
  reducers: {},
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
