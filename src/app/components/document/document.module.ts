import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { DocumentContainerComponent } from './document-container.component';
import { DocumentDraggableContainerComponent } from './document-draggable-container/document-draggable-container.component';
import { DocumentDroppedContainerComponent } from './document-dropped-container/document-dropped-container.component';
import { DocumentPreviewComponent } from './document-preview/document-preview.component';
import { DocumentService } from './../../services/document.service';

import { DragulaModule } from 'ng2-dragula';
import { DocumentSectionComponent } from './document-section/document-section.component';
import { DocumentSectionListComponent } from './document-section-list/document-section-list.component';
import { DraggableSectionService } from "app/services/draggable-section.service";

@NgModule({
  imports: [
    SharedModule,
    DragulaModule
  ],
  exports: [
    DocumentContainerComponent
  ],
  declarations: [
    DocumentContainerComponent,
    DocumentDraggableContainerComponent,
    DocumentDroppedContainerComponent,
    DocumentPreviewComponent,
    DocumentSectionComponent,
    DocumentSectionListComponent,
  ],
  providers: [
    DocumentService,
    DraggableSectionService]
})
export class DocumentModule { }
