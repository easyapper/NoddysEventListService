import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFormV1 } from 'app/shared/model/formapplication/form-v-1.model';
import { FormV1Service } from './form-v-1.service';

@Component({
    selector: 'jhi-form-v-1-delete-dialog',
    templateUrl: './form-v-1-delete-dialog.component.html'
})
export class FormV1DeleteDialogComponent {
    formV1: IFormV1;

    constructor(private formV1Service: FormV1Service, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: string) {
        this.formV1Service.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'formV1ListModification',
                content: 'Deleted an formV1'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-form-v-1-delete-popup',
    template: ''
})
export class FormV1DeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ formV1 }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(FormV1DeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.formV1 = formV1;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
