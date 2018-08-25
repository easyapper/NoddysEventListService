import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IFormV1 } from 'app/shared/model/formapplication/form-v-1.model';
import { FormV1Service } from './form-v-1.service';

@Component({
    selector: 'jhi-form-v-1-update',
    templateUrl: './form-v-1-update.component.html'
})
export class FormV1UpdateComponent implements OnInit {
    private _formV1: IFormV1;
    isSaving: boolean;

    constructor(private formV1Service: FormV1Service, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ formV1 }) => {
            this.formV1 = formV1;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.formV1.id !== undefined) {
            this.subscribeToSaveResponse(this.formV1Service.update(this.formV1));
        } else {
            this.subscribeToSaveResponse(this.formV1Service.create(this.formV1));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IFormV1>>) {
        result.subscribe((res: HttpResponse<IFormV1>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get formV1() {
        return this._formV1;
    }

    set formV1(formV1: IFormV1) {
        this._formV1 = formV1;
    }
}
