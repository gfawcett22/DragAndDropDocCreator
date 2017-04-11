import { Action } from '@ngrx/store';
import { type } from '../util';

import { IDocumentSection } from '../models/document-section.interface';

export const ActionTypes = {
    ADD_SECTION:       type('[Preview] Add Section'),
    REMOVE_SECTION:     type('[Preview] Remove Section')
};

export class AddSectionAction implements Action {
    type = ActionTypes.ADD_SECTION;
    constructor(public payload: IDocumentSection) {}
}

export class RemoveSectionAction implements Action {
    type = ActionTypes.REMOVE_SECTION;
    // pass the index here
    constructor(public payload: number) {}
}

export type Action
= AddSectionAction
| RemoveSectionAction;
