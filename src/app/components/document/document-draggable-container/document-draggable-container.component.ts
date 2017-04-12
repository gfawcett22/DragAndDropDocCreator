import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as drag from '../../../actions/draggable-section.actions';
import { IDocumentSection } from 'app/models/document-section.interface';
import { Observable } from 'rxjs/Observable';
import { DocumentService } from 'app/services/document.service';

@Component({
  selector: 'app-document-draggable-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-document-section-list [sections]="sections$ | async"></app-document-section-list>
  `
})
export class DocumentDraggableContainerComponent implements OnInit {
  sections$: Observable<IDocumentSection[]>;

  constructor(private store: Store<fromRoot.State>, private documentService: DocumentService) {
    this.sections$ = store.select(fromRoot.getDraggableSections);
    this.getSections();
  }
  getSections() {
    this.store.dispatch(new drag.LoadAction());
  }
  ngOnInit() {
  }

}
