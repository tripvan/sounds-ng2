import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { HeaderComponent } from './header.component';
import { YearsService } from '../services/years.service';
import { LabelService } from '../services/label.service';
@NgModule({
    imports: [SharedModule, FormsModule, PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [YearsService, LabelService]
})
export class HeaderModule {

}