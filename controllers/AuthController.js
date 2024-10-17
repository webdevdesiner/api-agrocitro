const pool = require('../database/mysql');


const PlantioController = {
    async criar(req, res){
        
        const{Variedade, Data_Plantio, Quantidade_Plantada, Localizacao} = req.body;
        let sql = `INSERT INTO Plantio (Variedade, Data_Plantio, Quantidade_Plantada, Localizacao) VALUES (?,?,?,?)`

        const result = await pool.query(sql, [Variedade, Data_Plantio, Quantidade_Plantada, Localizacao])
        
        const insertId = result[0]?.insertId;
        if(!insertId) {
            return res.status(401).json({message: 'erro ao criar controle de Plantio!'})
        }
        const sql_select = `SELECT * from Plantio where ID_Plantio = ?`
        const [rows] =await pool.query(sql_select, [insertId])
        return res.status(201).json(rows[0])
    },

    async listar(req, res) {
        let sql = "SELECT * from Plantio";
        const [rows] = await pool.query(sql);

        return res.status(200).json(rows);
    }

 
}
module.exports = PlantioController; 






