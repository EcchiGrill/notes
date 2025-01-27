import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotesState } from "../store-types";
import { NoteType } from "@/types";

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<NoteType[]>) => {
      state.notes = action.payload;
    },
    addNote: (state, action: PayloadAction<NoteType>) => {
      state.notes = [...state.notes, action.payload];
    },
  },
  selectors: {
    selectNotes: (state) => state.notes,
  },
});

export const { setNotes, addNote } = notesSlice.actions;

export default notesSlice.reducer;
