import { Component, OnInit, Input } from '@angular/core';
import { IDocumentSection } from 'app/models/document-section.interface';

@Component({
  selector: 'app-document-section',
  template: `
    <div class="item" 
          dnd-draggable
          [dragEnabled]="true"
          [dragData]="section">
          {{section.title}}
    </div>
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
  constructor() { }

  ngOnInit() {
  }

}
