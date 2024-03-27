import SelecaoRepository from '../respositories/SelecaoRepository.js'

class SelecaoController{

    async index(req,res){
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }

    async show(req,res){
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    }
    
    async store(req,res){
    const selecao = req.body
    const row = await SelecaoRepository.create(selecao)
    res.send(row)
}
    async update(req,res){
        const id = req.params.id
        const selecao = req.body
        const row = await SelecaoRepository.update(selecao,id)
        res.send(row)
        
    }
    async delete(req,res){
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.send(row)
    }

}

//padrao Singleton
export default new SelecaoController()