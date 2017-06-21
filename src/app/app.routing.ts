import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', loadChildren: 'app/albums/albums.module#AlbumsModule'},
    { path: 'artist', loadChildren: 'app/artist/artist.module#ArtistModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);