import { Component, OnInit, Input } from '@angular/core';
import { IDocumentSection } from 'app/models/document-section.interface';

@Component({
  selector: 'app-document-section',
  template: `
    <div class="container">{{section.title}}</div>
  `,
  styles: ['div.container {background-color: gray; border: 1px solid white; cursor: pointer;}']
})
export class DocumentSectionComponent implements OnInit {
  @Input() section: IDocumentSection;
  constructor() { }

  ngOnInit() {
  }

}
