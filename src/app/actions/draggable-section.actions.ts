import { Action } from '@ngrx/store';
import { IDocumentSection } from '../models/document-section.interface';
import { type } from '../util';

export const ActionTypes = {
    LOAD:            type('[Drag] Load'),
    LOAD_SUCCESSFUL: type('[Drag] Load Successful'),
    LOAD_FAILED:     type('[Drag] Load Failed'),
    DRAG:            type('[Drag] Drag')
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;
    // call the service and pass the sections to a new instance of this class in the effects
    constructor() {}
}
export class LoadSuccessfulAction implements Action {
    type = ActionTypes.LOAD_SUCCESSFUL;
    constructor(public payload: IDocumentSection[]) {}
}
export class LoadFailedAction implements Action {
    type = ActionTypes.LOAD_SUCCESSFUL;
    // payload is an error message
    constructor(public payload: string) {}
}
export class DragAction implements Action {
    type = ActionTypes.DRAG;
    constructor(public payload: number){}
}


export type Actions
= LoadAction
| LoadSuccessfulAction
| LoadFailedAction
| DragAction;

