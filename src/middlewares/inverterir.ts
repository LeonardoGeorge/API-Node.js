// src/middlewares/inverterir.ts

// 1. Importar tipo do express
import { Request, Response, NextFunction } from 'express';

// 2.Criar interface o corpo da requisição
interface InvertedBody {
    [key: string]: string | number | boolean | object | null | undefined;
}

// 3. Definir o middleware
