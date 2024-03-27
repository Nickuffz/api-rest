import SelecaoRepository from '../respositories/SelecaoRepository.js'

class SelecaoController {

    async index(req, res) {
        try {
            const row = await SelecaoRepository.findAll();
            res.status(200).json(row);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id
            const row = await SelecaoRepository.findById(id);
            if (row) {
                res.status(200).json(row);
            } else {
                res.status(404).json({ error: 'Seleção não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: `Erro ao buscar seleção por ID: ${err.message}` });
        }
    }

    async store(req, res) {
        try {
            const selecao = req.body
            const row = await SelecaoRepository.create(selecao);
            res.status(201).json(row);
        } catch (err) {
            res.status(500).json({ error: `Erro ao criar seleção: ${err.message}` });
        }
    }
    async update(req, res) {
        try {
            const id = req.params.id
            const selecao = req.body
            const updatedRow = await SelecaoRepository.update(selecao, id)
            if (updatedRow) {
                res.status(200).json(updatedRow);
            } else {
                res.status(404).json({ error: 'Seleção não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: `Erro ao atualizar seleção: ${err.message}` });
        }

    }
    async delete(req, res) {
        try {
            const id = req.params.id
            const deletedRow = await SelecaoRepository.delete(id)
            if (deletedRow) {
                res.status(200).json(deletedRow);
            } else {
                res.status(404).json({ error: 'Seleção não encontrada' });
            }
        }
        catch (err) {
            res.status(500).json({ error: `Erro ao deletar seleção: ${err.message}` })
        }
    }
}

//padrao Singleton
export default new SelecaoController()