import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notesSlice";

const store = configureStore({
  reducer: { notes: notesSlice },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
