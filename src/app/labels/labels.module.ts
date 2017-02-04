import { NgModule } from '@angular/core';

import { routing } from './labels.routing';
import { SharedModule } from '../shared/shared.module';
import { LabelsComponent } from './labels.component';
import { LabelComponent } from '../label/label.component';
import { LabelService } from '../services/label.service';

@NgModule({
    imports: [SharedModule, routing],
    declarations: [LabelsComponent, LabelComponent],
    providers: [LabelService]
})
export class LabelsModule {}