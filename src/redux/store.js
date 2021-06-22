import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";

export default configureStore({
  reducer: {
    projects: projectReducer,
  },
});
