import { RouterModule, RouterConfig } from '@angular/router';

export const routes: RouterConfig = [
    { path: '', pathMatch: 'full', redirectTo: 'search' }
];

export const routing = RouterModule.forRoot(routes);