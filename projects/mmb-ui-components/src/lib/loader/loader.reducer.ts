import { LoaderActions, LoaderActionTypes } from './loader.actions';

/**
 * Reducer function to show/hide loader
 * @param state ngRx current state
 * @param action ngRx action
 */
export interface LoaderState {
    isVisible: boolean;
}

const initialState: LoaderState = {
    isVisible: false
};

export function loaderReducer(state: LoaderState = initialState, action: LoaderActions) {
    switch (action.type) {
        case LoaderActionTypes.ShowLoader:
            return { ...state, isVisible: true };
        case LoaderActionTypes.HideLoader:
            return { ...state, isVisible: false };
        default:
            return { ...state, isVisible: false };
    }
}

