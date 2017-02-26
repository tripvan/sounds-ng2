import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { AlbumComponent } from './album/album.component';
import { LoaderComponent } from './loader/loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [BrowserAnimationsModule, CommonModule, RouterModule, FlexLayoutModule.forRoot()],
    declarations: [InfiniteScrollComponent, AlbumComponent, LoaderComponent],
    exports: [BrowserAnimationsModule, CommonModule, RouterModule, FlexLayoutModule, InfiniteScrollComponent, AlbumComponent, LoaderComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            // providers: [] add singleton providers here 
        }
    }
}