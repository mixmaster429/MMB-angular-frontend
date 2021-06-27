import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoaderState } from './loader.reducer';

const getLoaderState = createFeatureSelector<LoaderState>('loader');

export const isLoaderVisible = createSelector(
    getLoaderState, (state: LoaderState) => state.isVisible
);