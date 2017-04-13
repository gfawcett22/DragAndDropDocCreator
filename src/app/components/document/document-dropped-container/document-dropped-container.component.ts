import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import { IDocumentSection } from 'app/models/document-section.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-document-dropped-container',
  template: `
    <app-document-section-list [sections]="sections$ | async"
        [dragula]='"second-bag"'
        class="wrapper" 
        style="min-width:100%;min-height:100%">
    </app-document-section-list>  `,
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
