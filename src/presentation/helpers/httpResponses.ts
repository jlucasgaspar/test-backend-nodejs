import { IHttpResponse } from '../protocols';
import { ServerError } from '../errors';

export const okResponse = (data: any): IHttpResponse => ({
    statusCode: 200,
    body: data
});

export const badRequestResponse = (err: Error): IHttpResponse => ({
    statusCode: 400,
    body: err
});

export const serverErrorResponse = (err: Error): IHttpResponse => ({
    statusCode: 500,
    body: new ServerError(err.stack as string)
});