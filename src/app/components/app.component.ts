import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <md-sidenav-container fullscreen>
      <md-toolbar color="warn">
        Drag and Drop Document Creator
      </md-toolbar>
      <app-document-container></app-document-container>
    </md-sidenav-container>
  `
})
export class AppComponent {
  title = 'app works!';
}
