import { Action } from '@ngrx/store';
import { type } from '../util';

import { IDocumentSectionInsert } from '../models/document-section-insert.interface';

export const ActionTypes = {
    INSERT:       type('[Drop] INSERT'),
    REMOVE:     type('[Drop] Remove')
};

export class InsertAction implements Action {
    type = ActionTypes.INSERT;
    constructor(public payload: IDocumentSectionInsert) {}
}

export class RemoveAction implements Action {
    type = ActionTypes.REMOVE;
    // pass the index here
    constructor(public payload: number) {}
}

export type Actions
= InsertAction
| RemoveAction;
