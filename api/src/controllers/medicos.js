const con = require('../connect');

function create(req, res) {
    const { nome, crm, especialidade, telefone, email } = req.body;
    const sql = 'INSERT INTO medicos (nome, crm, especialidade, telefone, email) VALUES (?, ?, ?, ?, ?)';
    const values = [nome, crm, especialidade, telefone, email];
    
    con.query(sql, values, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Erro ao cadastrar médico' });
        } else {
            res.status(201).json({ message: 'Médico cadastrado com sucesso' });
        }
    });
}

function read(req, res) {
    const sql = 'SELECT * FROM medicos';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Erro ao consultar médicos' });
        } else {
            res.status(200).json(result);
        }
    });
}

function update(req, res) {
    const { id } = req.params;
    const { nome, crm, especialidade, telefone, email } = req.body;
    const sql = 'UPDATE medicos SET nome = ?, crm = ?, especialidade = ?, telefone = ?, email = ? WHERE id = ?';
    const values = [nome, crm, especialidade, telefone, email, id];
    
    con.query(sql, values, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Erro ao alterar médico' });
        } else {
            res.status(202).json({ message: 'Médico alterado com sucesso' });
        }
    });
}

function del(req, res) {
    const { id } = req.params;
    const sql = 'DELETE FROM medicos WHERE id = ?';
    
    con.query(sql, [id], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Erro ao excluir médico' });
        } else {
            res.status(204).send();
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
};
