import express from 'express';
import produtosRouter from './produtos';  
import voosRouter from './voos';          
import { inverferir } from '../middlewares/inverferir'; 
const router = express.Router();

router.use('/produtos', produtosRouter);
router.use('/voos', inverferir, voosRouter);  // Aplica o middleware inverferir às rotas de voos

router.get('/ping', async (req, res) => {
    res.json({ pong: true });
});

router.get('/', async (req, res) => {
    let name = "Leonardo";  // ✅ Corrigido
    let age = 22;           // ✅ Corrigido

    res.json({ name, age });
});

export default router;