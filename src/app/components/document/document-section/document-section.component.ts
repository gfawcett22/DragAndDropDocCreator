import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDocumentSection } from 'app/models/document-section.interface';

@Component({
  selector: 'app-document-section',
  template: `
    <div class="item">{{section.title}}<i *ngIf="removeIcon" (click)="removeSectionClick($event)" class="fa fa-minus-circle"></i></div>
  `,
  styles: [`
  div.item {
    background-color: gray; 
    border: 1px solid white; 
    cursor: pointer; 
    font-size:24px; 
    text-align: center;
  }`,
  `
  i {
    margin-right: 5px;
    float: right;
  }
  `
  ]
})
export class DocumentSectionComponent implements OnInit {
  @Input() section: IDocumentSection;
  @Input() removeIcon: boolean
  @Output() removeSection = new EventEmitter<any>();
  constructor() {
   }

  ngOnInit() {
  }
  removeSectionClick(event){
    this.removeSection.emit();
  }

}
