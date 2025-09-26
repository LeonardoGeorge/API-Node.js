import express from 'express';
import helmet from 'helmet';
import path from 'path';
import routes from './routes';
import { errorHandler, notFoundRequest } from './middlewares/errorHandler';
import dotenv from 'dotenv';


// Carrega variáveis de ambiente
dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;  // Usa a porta do .env ou 3000

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '..', 'public')));

server.use('/', routes);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`);
});