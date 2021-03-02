export class MissingParamError extends Error {
    constructor (paramName: string) {
        super(`Parâmetro inexistente: ${paramName}`);
        this.name = 'MissingParamError';
    }
}