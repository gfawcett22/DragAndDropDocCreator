import { Component, OnInit, Input } from '@angular/core';
import { IDocumentSection } from 'app/models/document-section.interface';

@Component({
  selector: 'app-document-section',
  template: `
    <div>{{section.title}}</div>
  `,
  styles: []
})
export class DocumentSectionComponent implements OnInit {
  @Input() section: IDocumentSection;
  constructor() { }

  ngOnInit() {
  }

}
