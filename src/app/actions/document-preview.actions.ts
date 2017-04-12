import { Action } from '@ngrx/store';
import { type } from '../util';

import { IDocumentTextInsert } from 'app/models/document-text-insert.interface';

export const ActionTypes = {
    ADD_SECTION:       type('[Preview] Add Section'),
    REMOVE_SECTION:     type('[Preview] Remove Section')
};

export class AddSectionAction implements Action {
    type = ActionTypes.ADD_SECTION;
    constructor(public payload: IDocumentTextInsert) {}
}

export class RemoveSectionAction implements Action {
    type = ActionTypes.REMOVE_SECTION;
    // pass the index here
    constructor(public payload: number) {}
}

export type Actions
= AddSectionAction
| RemoveSectionAction;
