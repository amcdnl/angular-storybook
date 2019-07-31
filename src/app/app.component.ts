import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div style="position: absolute; z-index: 1;bottom:0;width:100%;">
        <cat></cat>
      </div>
      <div class="rainbow"></div>
    </div>
  `
})
export class AppComponent {}
