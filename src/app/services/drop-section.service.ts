import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';
import { IDocumentSection } from 'app/models/document-section.interface';

@Injectable()
export class DroppedSectionService {

    constructor(private store: Store<fromRoot.State>) { }

    getSections(): Observable<IDocumentSection[]> {
        return this.store.select(fromRoot.getDropSections);
    }
}