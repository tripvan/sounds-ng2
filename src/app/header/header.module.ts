import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header.component';
import { YearsService } from '../services/years.service';
import { LabelService } from '../services/label.service';
@NgModule({
    imports: [SharedModule, FormsModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [YearsService, LabelService]
})
export class HeaderModule {

}