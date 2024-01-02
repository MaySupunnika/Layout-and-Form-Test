import { createSlice } from "@reduxjs/toolkit";
import { DataType } from "./Submissions";

const initialState: DataType | null = null;

const editingSlice = createSlice({
  name: "editing",
  initialState,
  reducers: {
    setEditing: (state, action) => {
      return action.payload;
    },
    resetEditing: (state) => {
      return initialState;
    },
  },
});

export const { setEditing, resetEditing } = editingSlice.actions;
export default editingSlice.reducer;
