import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  User as FirebaseUser,
} from "firebase/auth";
import { app } from "../firebaseConfig";

type User = Omit<FirebaseUser, "toJSON" | "delete" | "reload" | "getIdTokenResult" | "getIdToken">;

interface UserState {
  user?: User;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  user: undefined,
  isLoading: false,
  errorMessage: "",
};

export const signup = createAsyncThunk<
  User,
  { username: string; password: string },
  { rejectValue: string }
>("user/signup", async ({ username, password }, thunkApi) => {
  try {
    const auth = getAuth(app);
    const userCredential = await createUserWithEmailAndPassword(auth, username, password);
    console.log(userCredential);
    return userCredential.user.toJSON() as User;
  } catch (error) {
    console.error(error);
    if (error instanceof FirebaseError) {
      return thunkApi.rejectWithValue(error.message);
    }
    return thunkApi.rejectWithValue("Could not signup please contact our support.");
  }
});

export const signin = createAsyncThunk<
  User,
  { username: string; password: string },
  { rejectValue: string }
>("user/signin", async ({ username, password }, thunkApi) => {
  try {
    const auth = getAuth(app);
    const userCredential = await signInWithEmailAndPassword(auth, username, password);
    console.log(userCredential);
    return userCredential.user.toJSON() as User;
  } catch (error) {
    console.error(error);
    if (error instanceof FirebaseError) {
      return thunkApi.rejectWithValue(error.message);
    }
    return thunkApi.rejectWithValue("Could not signup please contact our support.");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signup.rejected, (state, action) => {
      // Om det är ett firebase fel se till att spara en användarvänlig text
      state.errorMessage = action.payload || "";
      state.isLoading = false;
    });

    builder.addCase(signin.pending, (state, action) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signin.rejected, (state, action) => {
      // Om det är ett firebase fel se till att spara en användarvänlig text
      state.errorMessage = action.payload || "";
      state.isLoading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
