import { Component, Inject } from '@angular/core';
import { WINDOW } from "./core/services/window.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(@Inject(WINDOW) public window: Window) {
    console.log(window);
    window.analyticsTrack("bob");
  }

}
