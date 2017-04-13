import { Component, OnInit, Input } from '@angular/core';
import { IDocumentSection } from 'app/models/document-section.interface';

@Component({
  selector: 'app-document-section-list',
  template: `
    <app-document-section *ngFor="let section of sections" [section]="section"></app-document-section>
  `,
  styles: ['div.container {background-color:lightgray;}']
})
export class DocumentSectionListComponent implements OnInit {
  @Input() sections: IDocumentSection[];
  constructor() { }

  ngOnInit() {
  }

}
