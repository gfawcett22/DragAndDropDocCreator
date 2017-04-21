import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDocumentSection } from 'app/models/document-section.interface';
import { DragulaActionsService } from 'app/services/dragula-actions.service';

@Component({
  selector: 'app-document-section-list',
  styles: [
    `
      :host{
        width:200px;
        height:810px;
      }
    `,
    `
      div.container {
        background-color:lightgray;
      }
    `
  ],
  template: `
    <app-document-section *ngFor="let section of sections; let i=index;" 
        [section]="section" 
        (removeSection)="removeSectionEmitted($event)" 
        [showRemoveIcon]="showRemoveIcon" 
        [attr.data-id]="section.id"
        [index]="i">
    </app-document-section>
  `
})
export class DocumentSectionListComponent implements OnInit {
  @Input() sections: IDocumentSection[];

  @Input() showRemoveIcon: boolean;
  @Output() removeSection: EventEmitter<any> = new EventEmitter<any>();
  constructor(private dragulaActionsService: DragulaActionsService) { }

  ngOnInit() {
  }
  removeSectionEmitted(i) {
    this.dragulaActionsService.onRemove(i);
  }

}
