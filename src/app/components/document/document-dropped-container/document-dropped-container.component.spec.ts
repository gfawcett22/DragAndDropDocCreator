import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDroppedContainerComponent } from './document-dropped-container.component';

describe('DocumentDroppedContainerComponent', () => {
  let component: DocumentDroppedContainerComponent;
  let fixture: ComponentFixture<DocumentDroppedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentDroppedContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDroppedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
