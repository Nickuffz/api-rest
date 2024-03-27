import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'db'
})

conexao.connect()

export const consulta = (sql, values='', msgReject) => {
    return new Promise((resolve, reject) => {   
        conexao.query(sql, values, (err, result) => {
            if(err){
                return reject(msgReject)
            }
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao