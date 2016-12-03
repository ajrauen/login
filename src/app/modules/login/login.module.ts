import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

// Routing
import { LoginRouter } from './login.routing';

// services
import { LoginService } from './services/login.service';

@NgModule({
    imports: [
        LoginRouter,
    ],
    declarations: [
        LoginComponent
    ],
    providers:[
        LoginService
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule {}