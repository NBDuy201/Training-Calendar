import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./calendarSlice";
import { REDUX_STATE } from "~/common/constants";

export const store = configureStore({
  reducer: {
    [REDUX_STATE.CALENDAR]: calendarSlice,
  },
});
