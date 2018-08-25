import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IFormV1 } from 'app/shared/model/formapplication/form-v-1.model';

type EntityResponseType = HttpResponse<IFormV1>;
type EntityArrayResponseType = HttpResponse<IFormV1[]>;

@Injectable({ providedIn: 'root' })
export class FormV1Service {
    private resourceUrl = SERVER_API_URL + 'formapplication/api/form-v-1-s';

    constructor(private http: HttpClient) {}

    create(formV1: IFormV1): Observable<EntityResponseType> {
        return this.http.post<IFormV1>(this.resourceUrl, formV1, { observe: 'response' });
    }

    update(formV1: IFormV1): Observable<EntityResponseType> {
        return this.http.put<IFormV1>(this.resourceUrl, formV1, { observe: 'response' });
    }

    find(id: string): Observable<EntityResponseType> {
        return this.http.get<IFormV1>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IFormV1[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: string): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
