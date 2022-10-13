import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  isLoading: boolean;
  name: string;
  savingsGoal: number;
  error: string;
}

const initialState: ProfileState = {
  isLoading: false,
  name: "",
  savingsGoal: 0,
  error: "",
};

export const setName = createAsyncThunk<string, string, { rejectValue: string }>(
  "profile/setname",
  async (name, thunkApi) => {
    return thunkApi.rejectWithValue("Could not save name");
    return name;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setName.pending, (state) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(setName.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.isLoading = false;
      state.name = action.payload;
    });
    builder.addCase(setName.rejected, (state, action) => {
      console.log("rejected");
      state.isLoading = false;
      state.error = action.payload || "Unknown error";
    });
  },
});

export const profileReducer = profileSlice.reducer;
