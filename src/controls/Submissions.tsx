import { createSlice } from "@reduxjs/toolkit";
import getLocalStorage from "../localStorage";

export interface DataType {
  key: React.Key;
  title: string;
  fName: string;
  lName: string;
  dob: string;
  nationality: string;
  idCard: string;
  gender: string;
  phone: string;
  passport: string;
  salary: number;
}

const initialState: DataType[] = getLocalStorage();
const submisstionsSlice = createSlice({
  name: "submissions",
  initialState,
  reducers: {
    addSubmission: (state, action) => {
      state.push(action.payload);
    },
    deleteOneSubmission: (state, action) => {
      const submission = action.payload;
      const index = state.findIndex((item) => item.key === submission.key);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    deleteManySubmission: (state, action) => {
      const items = action.payload;
      return state.filter((submission) => !items.includes(submission.key));
    },
    editSubmission: (state, action) => {
      const updatedItem = action.payload;
      const index = state.findIndex((item) => item.key === updatedItem.key);
      if (index !== -1) {
        state[index] = updatedItem;
      }
    },
  },
});

export const {
  addSubmission,
  deleteOneSubmission,
  deleteManySubmission,
  editSubmission,
} = submisstionsSlice.actions;

export default submisstionsSlice.reducer;
