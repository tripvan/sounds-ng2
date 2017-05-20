import { Component, OnInit } from '@angular/core';

import { Label } from '../services/model/label';
import { LabelService } from '../services/label.service';
@Component({
    selector: 'tc-labels',
    templateUrl: './labels.component.html',
    styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {
    constructor(private labelService: LabelService) {}
    labels: Label[]

    ngOnInit() {
        this.labels = this.labelService.getAllLabels() // todo observable
    }
}