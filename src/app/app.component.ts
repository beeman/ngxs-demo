import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Alert } from './state/alert.state';

@Component({
  selector: 'app-root',
  template: `
    <div class="container my-2">
      <div class="my-4">
        <button class="btn btn-primary" (click)="alert('primary')">Info Alert</button>
        <button class="btn btn-info" (click)="alert('info')">Info Alert</button>
        <button class="btn btn-success" (click)="alert('success')">Success Alert</button>
        <button class="btn btn-warning" (click)="alert('warning')">warning Alert</button>
        <button class="btn btn-danger" (click)="alert('danger')">Danger Alert</button>
      </div>
      <app-alerts></app-alerts>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  constructor(private store: Store) {
    console.log('alertTypes');
  }

  public alert(type) {
    const title = `Alert of type ${type}`;
    this.store.dispatch(new Alert({ type, title }));
  }
}
