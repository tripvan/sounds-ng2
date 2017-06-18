import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfiniteScrollDirective } from './infinite-scroll/infinite-scroll.directive';
import { AlbumComponent } from './album/album.component';
import { LoaderComponent } from './loader/loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, RouterModule, FlexLayoutModule],
    declarations: [InfiniteScrollDirective, AlbumComponent, LoaderComponent],
    exports: [CommonModule, RouterModule, FlexLayoutModule, InfiniteScrollDirective, AlbumComponent, LoaderComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            // providers: [] add singleton providers here
        };
    }
}