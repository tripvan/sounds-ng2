import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // allow styles to be applied outside this component
})
export class AppComponent {}