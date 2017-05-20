import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'search' },
    { path: 'artist/:id', loadChildren: 'app/artist/artist.module#ArtistModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);