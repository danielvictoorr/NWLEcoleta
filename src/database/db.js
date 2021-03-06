// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto de operações do banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports =db
//utilizar o objeto do bancdo de dados , para nossas operações
 
/* db.serialize(() => {
        //com comandos SQL eu vou:

        //1-Criar um a tabela
        db.run(`
                CREATE TABLE IF NOT EXISTS places (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        image TEXT,
                        name TEXT,
                        address TEXT,
                        address2 TEXT,
                        state TEXT,
                        city TEXT,
                        items TEXT
                        
                );
        `)


        //2-inserir dados na tabela
        const query =  `
                INSERT INTO places(
                        image,
                        name,
                        address,
                        address2,
                        state,
                        city,
                        items
                ) VALUES(?,?,?,?,?,?,?);
        `
        
        const values =[
                "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
                "Papersider",
                " Guilherme Gemballa, Jardim América",
                " Número 260",
                " Santa Catarian",
                " Rio do Sul",
                " Papeís e Papelão"
        ]

        function afterInsertData(err){
                if(err){
                        return console.log(err)
                }

                console.log("Cadastrado com sucesso")
                console.log(this)
        
        }
        
        db.run(query, values, afterInsertData)


        //3-consultar dados na tabela
        db.all(`SELECT name FROM places`, function(err,rows){
                if(err){
                        return console.log(err)
                }
                
                console.log("Aqui estão seus registro: ")
                console.log(rows)
        })



        //4-deletar um dado na tabela
        db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
                if(err){
                        return console.log(err)
                }

                console.log("Registro deletado com sucesso")
        })

        

})   */