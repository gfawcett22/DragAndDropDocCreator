import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';

import { IDocumentSection } from 'app/models/document-section.interface';
import { Observable } from 'rxjs/Observable';
import { DroppedSectionService } from 'app/services/drop-section.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-document-dropped-container',
  template: `
    <app-document-section-list [sections]="sections$ | async"
        [dragula]='"first-bag"'
        id="dropSection"
        class="wrapper" 
        style="min-width:100%;min-height:100%">
    </app-document-section-list>  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentDroppedContainerComponent implements OnInit, OnChanges {
  sections$: Observable<IDocumentSection[]>;

  constructor(private dropService: DroppedSectionService,
    private dragulaService: DragulaService
   ) {}
  ngOnChanges(changes) {
    //console.log(this.sections$);
  }
  ngOnInit() {
    this.sections$ = this.dropService.getSections();
  }
  

}
