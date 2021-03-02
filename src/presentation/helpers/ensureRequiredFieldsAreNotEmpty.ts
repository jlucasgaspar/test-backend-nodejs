import { IHttpRequest } from '../protocols';

interface FieldsToBeValidated {
    httpRequest: IHttpRequest;
    requiredFields: Array<string>;
}

export function ensureRequiredFieldsAreNotEmpty({ httpRequest, requiredFields }: FieldsToBeValidated): string | undefined
{
    for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
            return field;
        }
    }
}