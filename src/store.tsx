import { configureStore } from "@reduxjs/toolkit";
import submissionsReducer from "./controls/Submissions";
import editingRedecer from "./controls/editing";

const store = configureStore({
  reducer: {
    submissions: submissionsReducer,
    editing: editingRedecer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
