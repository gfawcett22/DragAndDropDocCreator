import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import { IDocumentSection } from 'app/models/document-section.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-document-dropped-container',
  templateUrl: './document-dropped-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentDroppedContainerComponent implements OnInit {
  sections$: Observable<IDocumentSection[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.sections$ = store.select(fromRoot.getDropSections);
    console.log(this.sections$);
  }

  ngOnInit() {
  }

}
