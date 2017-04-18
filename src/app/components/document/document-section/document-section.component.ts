import { Component, OnInit, Input } from '@angular/core';
import { IDocumentSection } from 'app/models/document-section.interface';

@Component({
  selector: 'app-document-section',
  template: `
    <div [attr.data-id]="section.id" class="item">{{section.title}}</div>
  `,
  styles: [`
  div.item {
    background-color: gray; 
    border: 1px solid white; 
    cursor: pointer; 
    font-size:24px; 
    text-align: center;
  }`]
})
export class DocumentSectionComponent implements OnInit {
  @Input() section: IDocumentSection;
  constructor() {
    console.log(this.section);
   }

  ngOnInit() {
  }

}
