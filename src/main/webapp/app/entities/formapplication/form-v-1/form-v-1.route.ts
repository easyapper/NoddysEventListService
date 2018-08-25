import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormV1 } from 'app/shared/model/formapplication/form-v-1.model';
import { FormV1Service } from './form-v-1.service';
import { FormV1Component } from './form-v-1.component';
import { FormV1DetailComponent } from './form-v-1-detail.component';
import { FormV1UpdateComponent } from './form-v-1-update.component';
import { FormV1DeletePopupComponent } from './form-v-1-delete-dialog.component';
import { IFormV1 } from 'app/shared/model/formapplication/form-v-1.model';

@Injectable({ providedIn: 'root' })
export class FormV1Resolve implements Resolve<IFormV1> {
    constructor(private service: FormV1Service) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((formV1: HttpResponse<FormV1>) => formV1.body));
        }
        return of(new FormV1());
    }
}

export const formV1Route: Routes = [
    {
        path: 'form-v-1',
        component: FormV1Component,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.formapplicationFormV1.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'form-v-1/:id/view',
        component: FormV1DetailComponent,
        resolve: {
            formV1: FormV1Resolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.formapplicationFormV1.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'form-v-1/new',
        component: FormV1UpdateComponent,
        resolve: {
            formV1: FormV1Resolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.formapplicationFormV1.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'form-v-1/:id/edit',
        component: FormV1UpdateComponent,
        resolve: {
            formV1: FormV1Resolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.formapplicationFormV1.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const formV1PopupRoute: Routes = [
    {
        path: 'form-v-1/:id/delete',
        component: FormV1DeletePopupComponent,
        resolve: {
            formV1: FormV1Resolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.formapplicationFormV1.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
