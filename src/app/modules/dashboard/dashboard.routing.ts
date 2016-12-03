import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const DashboardRouter = RouterModule.forChild([
    {path: '', component: DashboardComponent}
])