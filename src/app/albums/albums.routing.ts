import { RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums.component';

export const routing = RouterModule.forChild([
    { path: 'search', component: AlbumsComponent }
]);