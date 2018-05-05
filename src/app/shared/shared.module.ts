import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfiniteScrollDirective } from './infinite-scroll/infinite-scroll.directive';
import { AlbumComponent } from './album/album.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [InfiniteScrollDirective, AlbumComponent, LoaderComponent],
    exports: [CommonModule, RouterModule, InfiniteScrollDirective, AlbumComponent, LoaderComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            // providers: [] add singleton providers here
        };
    }
}