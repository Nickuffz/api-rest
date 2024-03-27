import { consulta } from '../database/conexao.js'

class SelecaoRepository {
    //CRUD
    async create(selecao) {
        try {
            const sql = "INSERT INTO selecoes SET ?;"
            await consulta(sql, selecao, "Não foi possivel cadastrar");
            return "Cadastro realizado com sucesso";
        } catch (err) {
            throw new Error(`Erro ao cadastrar seleção: ${err.message}`);
        }
    }

    async findAll() {
        try {
            const sql = "SELECT * FROM selecoes;"
            return await consulta(sql, 'Nao foi possivel localizar os dados!');
        }
        catch (err) {
            throw new Error(`Erro ao buscar seleções: ${err.message}`);
        }
    }

    async findById(id) {
        try{
            const sql = "SELECT * FROM selecoes WHERE id=?;"
            return await consulta(sql, id, 'Nao foi possivel localizar o id!');
        } catch (err)
        {
            throw new Error(`Erro ao buscar seleção de ID ${id} | ${err.message}`);
        }
    }

    async update(selecao, id) {
        try{
            const sql = "UPDATE selecoes SET ? WHERE id=?;"
            await consulta(sql, [selecao, id], 'Nao foi possivel atualizar as informacoes');
            return "Atualização realizada com sucesso";
        } catch (err){
            throw new Error(`Erro ao deletar seleção: ${id} | ${err.message}`)
        }
    }

    async delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Nao foi possivel deletar os dados do id informado!')
    }
}

export default new SelecaoRepository();