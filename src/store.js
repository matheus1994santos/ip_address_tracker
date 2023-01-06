import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "./containers/HomePage/slice";

export default configureStore({
  reducer: {
    locations: locationsReducer,
  },
});
