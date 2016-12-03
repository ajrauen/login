import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';

// Routing
import { DashboardRouter } from './dashboard.routing';

@NgModule({
    imports: [
        DashboardRouter
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})

export class DashboardModule {}