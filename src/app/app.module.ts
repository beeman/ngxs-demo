import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertState } from './state/alert.state';

const routes: Routes = [
  // { path: '', redirectTo: 'messages', pathMatch: 'full' },
  // { path: 'messages', loadChildren: './messages/messages.module#MessagesModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([ AlertState ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
