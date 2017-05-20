import { Component, Input } from '@angular/core';

import { Label } from '../services/model/label';

@Component({
    selector: 'tc-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.css']
})
export class LabelComponent {
    @Input()
    public label: Label;
}                                                                                                                                                                                                  