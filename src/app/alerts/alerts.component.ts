import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store'
import { AlertDismiss } from '../state/alert.state'

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
  styles: [`
    a {
      cursor: pointer;
    }
  `]
})
export class AlertsComponent implements OnInit {
  @Select('alerts') public alerts$;

  constructor(private store: Store) { }

  ngOnInit() {}

  dismiss(alert) {
    this.store.dispatch(new AlertDismiss(alert));
  }

}
