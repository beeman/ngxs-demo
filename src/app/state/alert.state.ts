import { Action, State, StateContext } from '@ngxs/store'

export type alertTypes = 'info' | 'success' | 'danger' | 'warning';

export interface AlertPayload {
  title: string;
  type: alertTypes;
}

export class Alert {
  constructor(public payload: AlertPayload) {}
}

export class AlertDismiss {
  constructor(public payload: AlertPayload) {}
}

@State<AlertPayload[]>({
  name: 'alerts',
  defaults: []
})
export class AlertState {

  @Action(Alert)
  alert({ getState, setState }: StateContext<AlertPayload[]>, { payload }: Alert) {
    setState([...getState(), payload]);
  }

  @Action(AlertDismiss)
  alertDismiss({ getState, setState }: StateContext<AlertPayload[]>, { payload }: AlertDismiss) {
    setState([...getState().filter(alert => alert !== payload)]);
  }

}
