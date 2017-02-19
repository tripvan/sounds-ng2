import { Component, Input } from '@angular/core';

@Component( {
  selector: 'tc-loader',
  template: `<div class="spinning-container">
                <span [hidden]="isHidden" class="glyphicon glyphicon-star spinning"></span>
              </div>`,
  styles: [require('./loader.component.css')]
})
export class LoaderComponent {
  @Input() public isHidden: boolean;
}