import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default counterStore;
export const counterActions = counterSlice.actions;
