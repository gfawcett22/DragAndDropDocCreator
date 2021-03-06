import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DocumentService } from 'app/services/document.service';

import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-document-container',
  template: `
    <md-grid-list cols="5" rowHeight="100%" style="max-height:93%">
      <md-grid-tile style="border: 1px solid white">
        <app-document-draggable-container style='width:100%; height:100%'></app-document-draggable-container>
      </md-grid-tile>
      <md-grid-tile style="border: 1px solid white">
        <app-document-dropped-container style='width:100%; height:100%'></app-document-dropped-container>
      </md-grid-tile>
      <md-grid-tile colspan="3" style="border: 1px solid white">
        <app-document-preview></app-document-preview>
      </md-grid-tile>
    </md-grid-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
