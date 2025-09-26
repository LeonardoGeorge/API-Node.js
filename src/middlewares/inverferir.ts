import { Request, Response, NextFunction } from 'express';

export const inverferir = (req: Request, res: Response, next: NextFunction) => {
    console.log('🔍 Middleware inverferir executado!');
    console.log(`📝 Método: ${req.method}`);
    console.log(`🌐 URL: ${req.url}`);
    console.log(`⏰ Horário: ${new Date().toISOString()}`);

    // Simples verificação de exemplo
    if (req.method === 'POST' && !req.body) {
        return res.status(400).json({ error: 'Body vazio em requisição POST' });
    }

    // Continua para a próxima função (controller)
    next();
};

export default inverferir;