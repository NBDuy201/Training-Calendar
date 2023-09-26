import { createSlice } from "@reduxjs/toolkit";
import { data } from "~/common/data";

export const sessionSlice = createSlice({
  name: "sessions",
  initialState: data,
  reducers: {
    addSession: (state, action) => {
      const {
        payload: { columnId, sessions },
      } = action;
      const indexCol = state.findIndex((item) => item.columnId === columnId);
      // Push new column data
      if (indexCol === -1) {
        state.push({ columnId, sessions: sessions });
        return;
      }
      // Append data to exist column
      state[indexCol].sessions = [...state[indexCol].sessions, ...sessions];
    },
    updateSession: (state, action) => {
      const { payload } = action;
      // Update sessions array when meet same columnId
      state.forEach((col) => {
        col.columnId === payload.columnId
          ? (col.sessions = payload.sessions)
          : col.sessions;
      });
    },
    updateExercise: (state, action) => {
      const { payload } = action;
      // console.log("🚀 ~ file: sessionSlice.js:19 ~ payload:", payload);
      state.forEach((col) => {
        if (col?.columnId === payload?.columnId) {
          // Update exercises array when meet same sessionId
          col?.sessions?.forEach((session) => {
            // console.log(
            //   "🚀 ~ file: sessionSlice.js:24 ~ col?.sessions?.forEach ~ session:",
            //   current(session),
            //   current(session)?.id === payload.sessionId
            // );
            return session?.id === payload.sessionId
              ? (session.exercises = payload.exercises)
              : session.exercises;
          });
        }
      });
    },
  },
});

export const { updateSession, updateExercise, addSession } =
  sessionSlice.actions;

export default sessionSlice.reducer;
