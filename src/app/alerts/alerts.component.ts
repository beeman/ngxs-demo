import { Component } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs/Observable'
import { AlertDismiss, AlertPayload, AlertState } from '../state/alert.state'

@Component({
  selector: 'app-alerts',
  template: `
    <div *ngFor="let alert of (alerts$ | async)">
      <div class="alert alert-{{alert.type}}">
        <a class="float-right" (click)="dismiss(alert)">x</a>
        {{alert.title}}
      </div>
    </div>
  `,
  styles: [
    `
    a {
      cursor: pointer;
    }
  `,
  ],
})
export class AlertsComponent {
  @Select(AlertState) public alerts$: Observable<AlertPayload>

  constructor(private store: Store) {}

  dismiss(alert) {
    this.store.dispatch(new AlertDismiss(alert))
  }
}
