import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot()
  ],
  exports: [
    CommonModule,
    MaterialModule,
    DndModule
  ],
  declarations: []
})
export class SharedModule { }
