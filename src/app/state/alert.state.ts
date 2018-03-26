import { Action, State } from '@ngxs/store';

export type alertTypes = 'info' | 'success' | 'danger' | 'warning';

export interface AlertPayload {
  title: string;
  type: alertTypes;
}

export class Alert {
  constructor(private payload: AlertPayload) {}
}

export class AlertDismiss {
  constructor(private payload: AlertPayload) {}
}

@State({
  name: 'alerts',
  defaults: []
})
export class AlertState {

  @Action(Alert)
  alert({ getState, setState}, { payload }) {
    setState([...getState(), payload]);
  }

  @Action(AlertDismiss)
  alertDismiss({ getState, setState}, { payload }) {
    setState([...getState().filter(alert => alert !== payload)]);
  }

}
