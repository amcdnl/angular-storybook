import { Component, Input } from '@angular/core';
import faker from 'faker';

@Component({
  selector: 'cat',
  template: `
    <div class="container" style="margin: 15px auto; text-align: center;">
      <div *ngIf="image" style="margin-top: 80px;">
        <img class="image" [src]="image" />
      </div>
      <button type="button" (click)="onMoarClick()">{{label}}</button>
    </div>
  `
})
export class CatComponent {
  @Input() label = 'MOAR';

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
