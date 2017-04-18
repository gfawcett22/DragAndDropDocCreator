import { Component, OnInit, Input } from '@angular/core';
import { IDocumentSection } from 'app/models/document-section.interface';
import { DragulaActionsService } from "app/services/dragula-actions.service";

@Component({
  selector: 'app-document-section-list',
  template: `
    <app-document-section *ngFor="let section of sections" [section]="section" (removeSection)="removeSection(index)" [removeIcon]="removeIcon" [attr.data-id]="section.id"></app-document-section>
  `,
  styles: ['div.container {background-color:lightgray;}']
})
export class DocumentSectionListComponent implements OnInit {
  @Input() sections: IDocumentSection[];
  @Input() removeIcon: boolean;
  constructor(private dragulaAction: DragulaActionsService) { }

  ngOnInit() {
  }
  removeSection(index){
    this.dragulaAction.onRemove(index);
  }

}
