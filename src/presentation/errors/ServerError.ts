export class ServerError extends Error {
    constructor (errorStack: string) {
        super('Erro interno do servidor');
        this.name = 'ServerError';
        this.stack = errorStack;
    }
}