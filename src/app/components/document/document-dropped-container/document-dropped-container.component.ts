import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';

import { IDocumentSection } from 'app/models/document-section.interface';
import { Observable } from 'rxjs/Observable';
import { DroppedSectionService } from 'app/services/drop-section.service';
import { DragulaService } from 'ng2-dragula';
import { DragulaActionsService } from "app/services/dragula-actions.service";

@Component({
  selector: 'app-document-dropped-container',
  template: `
    <app-document-section-list [sections]="sections$ | async"
        [showRemoveIcon]="true"
        [dragula]='"first-bag"'
        id="dropSection"
        class="wrapper" 
        style="min-width:100%;min-height:100%">
        (removeSection)="removeSectionEmitted($event)"
        >
    </app-document-section-list>  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentDroppedContainerComponent implements OnInit, OnChanges {
  sections$: Observable<IDocumentSection[]>;

  constructor(private dropService: DroppedSectionService,
              private dragulaService: DragulaService,
              private dragulaActionsService: DragulaActionsService)
              {}
  ngOnChanges(changes) {
  }
  ngOnInit() {
    this.sections$ = this.dropService.getSections();
  }
  
  removeSectionEmitted(i) {
    console.log('dropped container', i);
    this.dragulaActionsService.onRemove(i);
  }

}
