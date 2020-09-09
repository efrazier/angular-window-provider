import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello Browser!</h1>
    You're using: <pre>{{ window.navigator.userAgent }}</pre>
    
    <button class="bob" id="share" (click)='window.analyticsTrack($event.srcElement, "pageName", "contentName", "btnName", "dataObject")'>
    Call analyticsTrack()
  </button>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {

  @Input() window: Window;

}
