import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Redux
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

// Modules
import { LoginModule } from './modules/login/login.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

// Routing
import { AppRoutingModule } from './app.routing';

// Services
import { RouteGuardService } from './route-guard.service';

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
    AppRoutingModule,
    LoginModule,
    DashboardModule,
        StoreModule.provideStore(LoginReducers),
  ],
  providers: [
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
