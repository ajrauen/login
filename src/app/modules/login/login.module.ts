import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

// Routing
import { LoginRouter } from './login.routing';

@NgModule({
    imports: [
        LoginRouter
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule {}