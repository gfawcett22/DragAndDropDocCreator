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
  styles: [
    `
      :host{
        width:100%;
        height:100%;
      }
    `
  ],
  template: `
    <app-document-section-list [sections]="sections$ | async"
        [showRemoveIcon]="false"
        [dragula]='"first-bag"'
        id="dragSection"
        class="wrapper"         
        >
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
