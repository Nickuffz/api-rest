import mysql from 'mysql'

const conexao = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'db'
});

conexao.connect()

export const consulta = (sql, values= -[]) => {
    return new Promise((resolve, reject) => {   
        conexao.query(sql, values, (err, result) => {
            if(err){
                reject(err)
            }
            else{
                resolve(JSON.parse(JSON.stringify(result)))
            }
        });
    });
}

export default conexao