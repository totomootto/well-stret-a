import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ActionsState } from "./well-types.reducer";

export const selectFeature = (state: ActionsState) => state.actions;

export const selectActions = createSelector(selectFeature, (state) => state);
