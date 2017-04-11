import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MaterialModule
  ],
  declarations: []
})
export class SharedModule { }
