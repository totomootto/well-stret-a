import { Action, createReducer, on } from "@ngrx/store";
import { ActionApp } from "./models/action.model";
import * as ActionAppPageActions from "./well-types.actions";

export const wellTypesFeatureKey = "wellTypes";

export interface ActionsState {
  actions: ActionApp[];
}

export const initialState: ActionsState = {
  actions: [],
};

// export const reducer = createReducer(
//   initialState,

// );

const actionAppReducer = createReducer(
  initialState,
  on(ActionAppPageActions.addAction, (state, actionApp) => ({
    actions: [...state.actions, actionApp],
  }))
);

export function reducer(state: ActionsState | undefined, action: Action) {
  return actionAppReducer(state, action);
}
