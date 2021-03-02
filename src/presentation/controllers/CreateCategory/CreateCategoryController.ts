import { MissingParamError } from '../../errors';
import { badRequestResponse, okResponse, serverErrorResponse } from '../../helpers';
import { IController, IHttpRequest, IHttpResponse } from '../../protocols';
import { ICreateCategory } from '../../../domain/useCases/ICreateCategory';

export class CreateCategoryController implements IController {
    private readonly createCategory: ICreateCategory;

    constructor(createCategory: ICreateCategory) {
        this.createCategory = createCategory;
    }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        try {
            if (!httpRequest.body.title) {
                return badRequestResponse(new MissingParamError('title'));
            }
            
        } catch (error) {
            console.log(error);
            return serverErrorResponse(error);
        }
    }
}