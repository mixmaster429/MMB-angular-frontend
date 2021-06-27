import { Action } from '@ngrx/store';
/**
 * Actions types for error handler
 */
export enum ErrorHandlerActionTypes {
    ShowModal = '[Error Handler] Show Error in Modal',
    ShowToastr = '[Error Handler] Show Error in Toastr',
    Redirect = '[Error Handler] Redirect'
}

/**
 * Error levels for error handling library
 * Toastr - minor issue (level 1)
 * Modal - major issue (level 2)
 * Redirect - critical issue (level 5)
 */
export enum ErrorType {
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    INFO = 'INFO',
    SUCCESS = 'SUCCESS'
}

/**
 * Error levels for error handling library
 * Toastr - minor issue (level 1)
 * Modal - major issue (level 2)
 * Redirect - critical issue (level 5)
 */
export enum ErrorLevel {
    MODAL = 'MODAL',
    TOASTR = 'TOASTR',
    REDIRECT = 'REDIRECT'
}

export class ShowModal implements Action {
    readonly type = ErrorHandlerActionTypes.ShowModal;  
    readonly payload;
    constructor(payload: {
        type: ErrorType,
        subject: string,
        description: string
    }) {}
}

export class ShowToastr implements Action {
    readonly type = ErrorHandlerActionTypes.ShowToastr;  
    readonly payload;
    constructor(payload: {
        type: ErrorType,
        subject: string,
        description: string
    }) {}
}

export class Redirect implements Action {
    readonly type = ErrorHandlerActionTypes.Redirect;  
    readonly payload;
    constructor(payload: {
        redirectUrl: string,
        type?: string,
        subject?: string,
        description?: string
    }) {}
}

export type ErrorActions = ShowModal | ShowToastr | Redirect;