import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFormV1 } from 'app/shared/model/formapplication/form-v-1.model';

@Component({
    selector: 'jhi-form-v-1-detail',
    templateUrl: './form-v-1-detail.component.html'
})
export class FormV1DetailComponent implements OnInit {
    formV1: IFormV1;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ formV1 }) => {
            this.formV1 = formV1;
        });
    }

    previousState() {
        window.history.back();
    }
}
