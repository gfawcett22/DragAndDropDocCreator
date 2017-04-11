import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDragableContainerComponent } from './document-dragable-container.component';

describe('DocumentDragableContainerComponent', () => {
  let component: DocumentDragableContainerComponent;
  let fixture: ComponentFixture<DocumentDragableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentDragableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDragableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
