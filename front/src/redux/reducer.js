import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    token: undefined,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = undefined;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

let actions = counterSlice.actions;
export default { store: store, actions: actions };
