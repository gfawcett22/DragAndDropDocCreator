
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';


import * as draggable from '../actions/draggable-section.actions';
import * as drop from '../actions/drop-section.actions';
import { DocumentService } from '../services/document.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

@Injectable()
export class DocumentEffects {
    constructor(private actions$: Actions, private documentService: DocumentService) { }

    @Effect()
    drop$: Observable<Action> = this.actions$
        .ofType(drop.ActionTypes.DROP)
        .debounceTime(300)
        .map(toPayload)
        
}