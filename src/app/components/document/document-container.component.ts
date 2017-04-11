import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'app/services/document.service';

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
  styles: []
})
export class DocumentContainerComponent implements OnInit {

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
  }

}
