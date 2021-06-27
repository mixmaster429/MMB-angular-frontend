import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ErrorHandlerState } from './error-handler.reducer';

const getErrorHandlerState = createFeatureSelector<ErrorHandlerState>('error-handler');

export const errorState = createSelector(
    getErrorHandlerState, (state: ErrorHandlerState) => state
);