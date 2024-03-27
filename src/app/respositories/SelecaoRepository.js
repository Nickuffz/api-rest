import { consulta } from '../database/conexao.js'

class SelecaoRepository{
    //CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        consulta(sql, selecao, "Nao foi possivel cadastrar")
    }
    
    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, 'Nao foi possivel localizar os dados!')
    }
    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Nao foi possivel localizar o id!')
    }
    update(selecao,id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao,id], 'Nao foi possivel atualizar as informacoes')
    }
    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Nao foi possivel deletar os dados do id informado!')
    }
}

export default new SelecaoRepository()