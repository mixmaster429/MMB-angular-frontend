import { ErrorActions, ErrorHandlerActionTypes, ErrorType, ErrorLevel } from './error-handler.actions';

/**
 * Reducer function to handle errors
 * @param state ngRx current state
 * @param action ngRx action
 */
export interface ErrorHandlerState {
    type?: ErrorType,
    level?: ErrorLevel,
    subject?: string,
    description?: string,
    action?: ErrorHandlerActionTypes
}

/**
 * Initial state is empty for error handler i.e. no errors
 */
const initialState: ErrorHandlerState = {
};

export function errorHandlerReducer(state: ErrorHandlerState = initialState, action: ErrorActions) {
    switch (action.type) {
        case ErrorHandlerActionTypes.ShowToastr:
            return { 
                ...state,
                type: action.payload.type,
                subject: action.payload.subject,
                description: action.payload.description,
                action: action.type
            };
        case ErrorHandlerActionTypes.ShowModal:
            return { 
                ...state, 
                type: action.payload.type,
                subject: action.payload.subject,
                description: action.payload.description,
                action: action.type
            };
        case ErrorHandlerActionTypes.Redirect:
            return { 
                ...state, 
                redirectUrl: action.payload.redirectUrl,
                type: action.payload.type,
                subject: action.payload.subject,
                description: action.payload.description,
                action: action.type
            };
        default:
            return { ...state, type: null, subject: null, description: null, action: null };
    }
}

