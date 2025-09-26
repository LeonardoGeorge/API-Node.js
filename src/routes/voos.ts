// src/routes/voos.ts
import express from 'express';

const router = express.Router();

// GET /voos - Listar todos os voos
router.get('/', async (req, res) => {
    try {
        // Aqui você implementaria a lógica para buscar voos
        const voos = [
            { id: 1, origem: 'São Paulo', destino: 'Rio de Janeiro' },
            { id: 2, origem: 'Brasília', destino: 'Salvador' }
        ];
        res.json(voos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar voos' });
    }
});

// GET /voos/:id - Buscar voo por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Lógica para buscar voo específico
        const voo = { id: 1, origem: 'São Paulo', destino: 'Rio de Janeiro' };
        res.json(voo);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar voo' });
    }
});

// POST /voos - Criar novo voo
router.post('/', async (req, res) => {
    try {
        const { origem, destino } = req.body;
        // Lógica para criar voo
        const novoVoo = { id: 3, origem, destino };
        res.status(201).json(novoVoo);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar voo' });
    }
});

// PUT /voos/:id - Atualizar voo
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { origem, destino } = req.body;
        // Lógica para atualizar voo
        res.json({ id, origem, destino, updated: true });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar voo' });
    }
});

// DELETE /voos/:id - Deletar voo
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Lógica para deletar voo
        res.json({ id, deleted: true });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar voo' });
    }
});

export default router;