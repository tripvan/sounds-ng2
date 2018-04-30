import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { HeaderComponent } from './header.component';
import { YearsService } from '../services/years.service';
import { LabelService } from '../services/label.service';
@NgModule({
    imports: [SharedModule, FormsModule, PerfectScrollbarModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [YearsService, LabelService, {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }]
})
export class HeaderModule {

}