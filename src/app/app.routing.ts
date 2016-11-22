import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'login', redirectTo: 'login'}
]

export const AppRoutingModule = RouterModule.forRoot(routes)