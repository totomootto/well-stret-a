import { createAction, props } from "@ngrx/store";
import { ActionApp } from "./models/action.model";

// export const loadWellTypess = createAction("[WellTypes] Load WellTypess");

// export const loadWellTypessSuccess = createAction(
//   "[WellTypes] Load WellTypess Success",
//   props<{ data: any }>()
// );

// export const loadWellTypessFailure = createAction(
//   "[WellTypes] Load WellTypess Failure",
//   props<{ error: any }>()
// );

export const addAction = createAction("[Action] Add action", props<{}>());

export const getActions = createAction("[Action] Get actions");
