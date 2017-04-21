import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DocumentService } from 'app/services/document.service';

import { DragulaService } from 'ng2-dragula';
import { DragulaActionsService } from '../../services/dragula-actions.service';


@Component({
  selector: 'app-document-container',
  template: `
    <md-grid-list cols="5" rowHeight="100%" style="max-height:93%">
      <md-grid-tile style="border: 1px solid white">
        <app-document-draggable-container></app-document-draggable-container>
      </md-grid-tile>
      <md-grid-tile style="border: 1px solid white">
        <app-document-dropped-container></app-document-dropped-container>
      </md-grid-tile>
      <md-grid-tile colspan="3" style="border: 1px solid white">
        <app-document-preview></app-document-preview>
      </md-grid-tile>
    </md-grid-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentContainerComponent implements OnInit {
  constructor(private dragulaService: DragulaService, private dragulaActionService: DragulaActionsService) {
    this.dragulaService.setOptions('first-bag', {
      copy: true,
      copySortSource: true,
      accepts: function(el, target, source, sibling){
        if (target.id === 'dropSection') {
          return true;
        }
        return false;
      }
   });
   // value is [element, target, source, sibling]
    this.dragulaService.drop.subscribe(val => {
      this.dragulaActionService.onDrop(val);
    });
  }

  ngOnInit() {
  }

}
