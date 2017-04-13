import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

import { DocumentService } from 'app/services/document.service';
import * as fromRoot from '../reducers';
import * as drag from '../actions/draggable-section.actions';
import { Observable } from "rxjs/Observable";
import { IDocumentSection } from "app/models/document-section.interface";

@Injectable()
export class DraggableSectionService {

    constructor(private store: Store<fromRoot.State>, private docService: DocumentService) {

     }
     loadSections():void {
         this.store.dispatch(new drag.LoadAction());
     }
     getSections(): Observable<IDocumentSection[]>{
        return this.docService.getDraggableSections();
     }
}