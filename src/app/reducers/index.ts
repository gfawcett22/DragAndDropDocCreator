import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';
/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';



import * as fromDrag from './draggable-sections.reducer';
import * as fromDrop from './drop-section.reducer';
import * as fromPreview from './document-preview.reducer';


export interface State {
    drag: fromDrag.State;
    drop: fromDrop.State;
    preview: fromPreview.State;
}

const reducers = {
    drag: fromDrag.reducer,
    drop: fromDrop.reducer,
    preview: fromPreview.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */
export const getDragState = (state: State) => state.drag;
export const getDropState = (state: State) => state.drop;
export const getPreviewState = (state: State) => state.preview;

/**
 * Wrap child reducers because they are unaware of overall state
 */
export const getDragSections = createSelector(getDragState, fromDrag.getSections);
export const getDragLoading = createSelector(getDragState, fromDrag.getLoading);
export const getDragLoaded = createSelector(getDragState, fromDrag.getLoaded);

export const getDropSections = createSelector(getDropState, fromDrop.getSections);
export const getPreviewSections = createSelector(getPreviewState, fromPreview.getSections);
