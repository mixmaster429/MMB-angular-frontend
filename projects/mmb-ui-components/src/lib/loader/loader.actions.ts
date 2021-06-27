import { Action } from '@ngrx/store';
/**
 * Actions types for Loader
 */
export enum LoaderActionTypes {
    ShowLoader = '[Loader] Show Loader',
    HideLoader = '[Loader] Hide Loader'
}

export class ShowLoader implements Action {
    readonly type = LoaderActionTypes.ShowLoader;    
}

export class HideLoader implements Action {
    readonly type = LoaderActionTypes.HideLoader;
}

export type LoaderActions = ShowLoader | HideLoader;