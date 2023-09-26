import { createSlice } from "@reduxjs/toolkit";
import { data } from "~/common/data";

export const sessionSlice = createSlice({
  name: "sessions",
  initialState: data,
  reducers: {
    updateSession: (state, action) => {
      const { payload } = action;
      // Update sessions array when meet same columnId
      state.forEach((col) =>
        col.columnId === payload.columnId
          ? (col.sessions = payload.sessions)
          : col.sessions
      );
    },
    // moveExercise: (state, action) => {},
  },
});

export const { updateSession, moveExercise } = sessionSlice.actions;

export default sessionSlice.reducer;
