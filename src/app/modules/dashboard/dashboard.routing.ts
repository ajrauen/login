import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteGuardService } from '../../route-guard.service';

export const DashboardRouter = RouterModule.forChild([
    {path: '', component: DashboardComponent, canActivate: [RouteGuardService]}
])