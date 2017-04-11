import { Action } from '@ngrx/store';
import { IDocumentSection } from '../models/document-section.interface';
import { type } from '../util';

export const ActionTypes = {
    DRAG:       type('[Draggable] Drag'),
};

export class DragAction implements Action {
    type = ActionTypes.DRAG;
}


export type Actions
= DragAction;

