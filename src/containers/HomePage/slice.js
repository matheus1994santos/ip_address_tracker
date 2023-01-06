import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  locationsHistory: [],
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocationHistory: (state, action) => {
      state.locationsHistory = [
        ...state.locationsHistory,
        action.payload.location,
      ];
    },
    removeLocationHistory: (state, action) => {
      state.locationsHistory = state.locationsHistory.filter(
        (loc) => loc.ip !== action.payload.ip
      );
    },
  },
});

export const { addLocationHistory, removeLocationHistory } =
  locationsSlice.actions;

export default locationsSlice.reducer;
