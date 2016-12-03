import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Modules
import { LoginModule } from './modules/login/login.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

// Routing
import { AppRoutingModule } from './app.routing';

// Services
import { RouteGuardService } from './route-guard.service';

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
    DashboardModule
  ],
  providers: [
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
