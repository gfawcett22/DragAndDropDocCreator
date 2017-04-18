import { createSelector } from 'reselect';
import { IDocumentSection } from '../models/document-section.interface';
import * as drop from '../actions/drop-section.actions';
import { IDocumentSectionInsert } from 'app/models/document-section-insert.interface';


export interface State {
    sections: IDocumentSection[];
}

export const initialState: State = {
    sections: [{id: 8, title: 'Dropped'}, {id: 8, title: 'Dropped 2'}]
};

export function reducer(state = initialState, action: drop.Actions): State {
    switch (action.type) {
        case drop.ActionTypes.INSERT:
            const sectionToInsert = <IDocumentSectionInsert>action.payload;            
            return {
                sections: [...state.sections.slice(0, sectionToInsert.index),
                ...[{ id: sectionToInsert.id, title: sectionToInsert.title }],
                ...state.sections.slice(sectionToInsert.index)
                ]
            };
        case drop.ActionTypes.REMOVE:
            const index = <number>action.payload;
            return {
                sections: [...state.sections.slice(0, index), ...state.sections.slice(index + 1)]
            };
        default:
            return state;
    }
}

export const getSections = (state: State) => state.sections;
