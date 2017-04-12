import { createSelector } from 'reselect';
import * as document from '../actions/document-preview.actions';
import { IDocumentTextInsert } from 'app/models/document-text-insert.interface';
import { IDocumentText } from 'app/models/document-text.interface';


export interface State {
    sections: IDocumentText[];
}

export const initialState: State = {
    sections: []
};

export function reducer(state = initialState, action: document.Actions): State {
    switch (action.type) {
        case document.ActionTypes.ADD_SECTION:
            const sectionToInsert = <IDocumentTextInsert>action.payload;
            return {
                sections: [...state.sections.slice(0, sectionToInsert.index),
                { sectionId: sectionToInsert.sectionId, text: sectionToInsert.text },
                ...state.sections.slice(sectionToInsert.index + 1)
                ]
            };
        case document.ActionTypes.REMOVE_SECTION:
            const index = <number>action.payload;
            return{
                sections: [...state.sections.slice(0, index), ...state.sections.slice(index + 1)]
            };
        default:
            return state;
    }
}

export const getSections = (state: State) => state.sections;
