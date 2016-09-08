import { Component, ViewEncapsulation } from "@angular/core"; 

@Component({
  selector: "my-app",
  template: require("./app.component.html"),
  styles: [require("./app.component.css")],
  encapsulation: ViewEncapsulation.None // allow styles to be applied outside this component
})
export class AppComponent {}