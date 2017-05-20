import { RouterModule } from '@angular/router';
import { ArtistComponent } from './artist.component';

export const routing = RouterModule.forChild([
    { path: '', component: ArtistComponent }
]);