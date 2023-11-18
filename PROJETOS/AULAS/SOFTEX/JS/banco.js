const mysql = require('mysql');

// Configurações do banco de dados MySQL
const conexao = mysql.createConnection({
    host: '3306',
    user: 'root',
    password: '123456',
    database: 'israel'
});

// Função para conectar ao banco de dados
function conectarAoBanco() {
    conexao.connect((erro) => {
        if (erro) {
            console.error('Erro ao conectar ao banco de dados:', erro.message);
        } else {
            console.log('Conexão bem-sucedida com o banco de dados.');
            
        }
    });
}

// Chamada da função para conectar ao banco de dados
conectarAoBanco();



