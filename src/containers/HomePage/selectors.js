import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";

const selectLocations = (state) => state.locations || initialState.locations;

const selectLocationsHistory = createSelector(
  selectLocations,
  (state) => state.locationsHistory
);

const selectReducedLocationsHistory = createSelector(
  selectLocationsHistory,
  (state) =>
    state.reduce(
      (prev, curr) =>
        prev.find((item) => item.ip === curr.ip) ? prev : [...prev, curr],
      []
    )
);

export {
  selectLocations,
  selectLocationsHistory,
  selectReducedLocationsHistory,
};
