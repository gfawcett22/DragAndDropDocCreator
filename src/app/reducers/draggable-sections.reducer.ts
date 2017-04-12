import { createSelector } from 'reselect';
import { IDocumentSection } from '../models/document-section.interface';
import * as draggable from '../actions/draggable-section.actions';


export interface State {
    loaded: boolean;
    loading: boolean;
    sections: IDocumentSection[];
}

export const initialState: State = {
    loaded: false,
    loading: false,
    sections: []
};

export function reducer(state = initialState, action: draggable.Actions): State {
    switch (action.type) {
        case draggable.ActionTypes.LOAD:
            return Object.assign({}, state, { loading: true });
        case draggable.ActionTypes.LOAD_SUCCESSFUL:
            return {
                loaded: true,
                loading: false,
                sections: (<draggable.LoadSuccessfulAction>action).payload
            };
        case draggable.ActionTypes.DRAG:
            break;
        case draggable.ActionTypes.LOAD_FAILED:
            // console log the error message and execute default case to return state
            console.log((<draggable.LoadFailedAction>action).payload);
        default:
            return state;
    }
}

export const getSections = (state: State) => state.sections;
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
