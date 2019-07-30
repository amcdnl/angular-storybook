import { Component } from '@angular/core';
import faker from 'faker';

@Component({
  selector: 'panda',
  template: `
    <div class="container" style="margin: 15px auto; text-align: center;">
      <div *ngIf="image">
        <img class="image" [src]="image" />
      </div>
      <button type="button" (click)="onMoarClick()">MOAR</button>
    </div>
  `
})
export class PandaComponent {
  image = '';

  ngOnInit() {
    this.image = faker.image.cats();
  }

  onMoarClick() {
    // Reset our image to null to trigger src update
    this.image = null;

    setTimeout(() => {
      this.image = faker.image.cats();
    }, 100);
  }
}
