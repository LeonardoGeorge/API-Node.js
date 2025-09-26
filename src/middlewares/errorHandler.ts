import { Request, Response, NextFunction } from 'express';

// Middleware para rotas não encontradas (404)
export const notFoundRequest = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: 'Rota não encontrada' });
};

// Middleware para tratamento geral de erros
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('❌ Erro:', error.message);

    res.status(500).json({
        error: 'Erro interno do servidor',
        message: error.message
    });
};

export default { errorHandler, notFoundRequest };