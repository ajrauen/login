import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Modules
import { LoginModule } from './modules/login/login.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

// Services
import { RouteGuardService } from './route-guard.service';

// Routing
import { AppRoutingModule } from './app.routing';

// Redux
import { StoreModule } from '@ngrx/store';

//Reducers
import { LoginReducers } from './modules/login/reducers/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    DashboardModule,
    StoreModule.provideStore(LoginReducers),
    AppRoutingModule
  ],
  providers: [
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }