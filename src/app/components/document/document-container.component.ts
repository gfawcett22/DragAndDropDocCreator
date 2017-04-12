import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DocumentService } from 'app/services/document.service';

import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-document-container',
  template: `
    <md-grid-list cols="5" rowHeight="95%">
      <md-grid-tile>
        <app-document-draggable-container></app-document-draggable-container>
      </md-grid-tile>
      <md-grid-tile>
        <app-document-dropped-container></app-document-dropped-container>
      </md-grid-tile>
      <md-grid-tile colspan="3">
        <app-document-preview></app-document-preview>
      </md-grid-tile>
    </md-grid-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
