import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './reducers';
import 'hammerjs';

import { AppComponent } from './components/app.component';
import { DocumentModule } from 'app/components/document/document.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DraggableSectionEffects } from 'app/effects/draggable-section.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(DraggableSectionEffects),
    // EffectsModule.run(CollectionEffects),
    MaterialModule,
    DocumentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
