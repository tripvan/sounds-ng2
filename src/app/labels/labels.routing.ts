import { RouterModule } from '@angular/router';

import { LabelsComponent } from './labels.component';

export const routing = RouterModule.forChild([{
    path: 'labels', component: LabelsComponent
}])