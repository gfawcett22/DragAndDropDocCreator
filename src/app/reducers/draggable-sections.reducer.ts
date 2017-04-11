import {createSelector} from 'reselect';
import {IDocumentSection} from '../models/document-section.interface';
import * as draggable from '../actions/draggable-section.actions';


export interface State {
    sections: IDocumentSection[];
}

export const initialState: State = {
    sections: []
}

export function reducer(state = initialState, action: draggable.Actions): State {
    switch (action.type) {
        case draggable.ActionTypes.DRAG:
            break;
        default:
            return state;
    }
}

export const getSections = (state: State) => state.sections;
