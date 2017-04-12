import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import { IDocumentSection } from 'app/models/document-section.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-document-dropped-container',
  template: `
  <div style="position:relative">
    <app-document-section-list></app-document-section-list>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentDroppedContainerComponent implements OnInit {
  sections$: Observable<IDocumentSection[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.sections$ = store.select(fromRoot.getDropSections);
  }

  ngOnInit() {
  }

}
