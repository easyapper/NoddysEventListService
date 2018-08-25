export const enum FormType {
    SURVEY = 'SURVEY',
    SIGNUP = 'SIGNUP',
    REGISTRATION = 'REGISTRATION',
    COMPLAINT = 'COMPLAINT'
}

export interface IFormV1 {
    id?: string;
    customerId?: string;
    formType?: FormType;
}

export class FormV1 implements IFormV1 {
    constructor(public id?: string, public customerId?: string, public formType?: FormType) {}
}
