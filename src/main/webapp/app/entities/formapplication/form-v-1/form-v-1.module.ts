import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from 'app/shared';
import {
    FormV1Component,
    FormV1DetailComponent,
    FormV1UpdateComponent,
    FormV1DeletePopupComponent,
    FormV1DeleteDialogComponent,
    formV1Route,
    formV1PopupRoute
} from './';

const ENTITY_STATES = [...formV1Route, ...formV1PopupRoute];

@NgModule({
    imports: [GatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [FormV1Component, FormV1DetailComponent, FormV1UpdateComponent, FormV1DeleteDialogComponent, FormV1DeletePopupComponent],
    entryComponents: [FormV1Component, FormV1UpdateComponent, FormV1DeleteDialogComponent, FormV1DeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayFormV1Module {}
