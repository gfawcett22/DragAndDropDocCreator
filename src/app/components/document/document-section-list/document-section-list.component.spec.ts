import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSectionListComponent } from './document-section-list.component';

describe('DocumentSectionListComponent', () => {
  let component: DocumentSectionListComponent;
  let fixture: ComponentFixture<DocumentSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
