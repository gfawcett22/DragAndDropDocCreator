import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { DocumentContainerComponent } from './document-container.component';
import { DocumentDraggableContainerComponent } from './document-draggable-container/document-draggable-container.component';
import { DocumentDroppedContainerComponent } from './document-dropped-container/document-dropped-container.component';
import { DocumentPreviewComponent } from './document-preview/document-preview.component';
import { DocumentService } from './../../services/document.service';

import { DragulaModule } from 'ng2-dragula';

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
  ],
  providers: [DocumentService]
})
export class DocumentModule { }
