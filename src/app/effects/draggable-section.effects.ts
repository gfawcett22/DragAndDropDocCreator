
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';


import * as draggable from '../actions/draggable-section.actions';
import { DocumentService } from '../services/document.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

@Injectable()
export class DraggableSectionEffects {
    @Effect()
    loadSections$: Observable<Action> = this.actions$
        .ofType(draggable.ActionTypes.LOAD)
        .startWith(new draggable.LoadAction())
        .debounceTime(300) // mimic network call
        .map(toPayload)
        .switchMap(() => {
            // get the sections from the service and pass them to a new LoadAction
            return this.documentService.getDraggableSections()
                .map(sections => new draggable.LoadSuccessfulAction(sections))
                .catch(error => of(new draggable.LoadFailedAction(error)));

        });

    constructor(private actions$: Actions, private documentService: DocumentService) { }

}