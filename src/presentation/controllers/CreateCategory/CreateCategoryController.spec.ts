import { CreateCategoryController } from './CreateCategoryController';
import { badRequestResponse } from '../../helpers';
import { InvalidParamError, MissingParamError, ServerError } from '../../errors';
import { ICreateCategory } from '../../../domain/useCases/ICreateCategory';
import { ICategory } from '../../../domain/models/ICategory';

let createCategory_sut: CreateCategoryController;
let fakeCreateCategoryUseCase: FakeCreateCategoryUseCase;

class FakeCreateCategoryUseCase implements ICreateCategory {
    public async create(request: string): Promise<ICategory> {
        return new Promise(resolve => resolve({ title: request, id: 'valid_id' }));
    }
}

describe('CreateCategory Controller', () => {
    beforeAll(() => {
        fakeCreateCategoryUseCase = new FakeCreateCategoryUseCase();
        createCategory_sut = new CreateCategoryController(fakeCreateCategoryUseCase);
    })

    test('Should return 400 if no title is provided', async () => {
        const response = await createCategory_sut.handle({ body: { title: '' } });
        expect(response).toEqual(badRequestResponse(new MissingParamError('title')));
    });

    
});