import { Component, Input } from '@angular/core';

import { Label } from '../services/model/label';

@Component({
    selector: 'tc-label',
    template: require('./label.component.html'),
    styles: [require('./label.component.css')]
})
export class LabelComponent {
    @Input()
    public label: Label;
}                                                                                                                                                                                                  