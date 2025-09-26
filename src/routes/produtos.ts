import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ produtos: [] });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({ id, name: 'Teclado TXZ', price: 90 });
});

router.post('/', (req, res) => {
    // Receber os dados
    // Processar os dados

    // Retornar uma resposta
    res.status(201).json({ message: 'Produto criado com sucesso!' });
});
export default router;