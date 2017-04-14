import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as drag from '../../../actions/draggable-section.actions';
import { IDocumentSection } from 'app/models/document-section.interface';
import { Observable } from 'rxjs/Observable';
import { DragulaService } from 'ng2-dragula';
import { DraggableSectionService } from 'app/services/draggable-section.service';

@Component({
  selector: 'app-document-draggable-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-document-section-list [sections]="sections$ | async"        
        style="min-width:100%;min-height:100%">
    </app-document-section-list>
  `
})
export class DocumentDraggableContainerComponent implements OnInit {
  sections$: Observable<IDocumentSection[]>;

  constructor(private dragService: DraggableSectionService) {
  }

  getSections() {
    this.sections$ = this.dragService.getSections();
  }
  ngOnInit() {
    this.dragService.loadSections();
    this.getSections();
  }

}
