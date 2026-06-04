const pool = require('../config/db');

const listarEmpresas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM EMPRESA ORDER BY nome');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar empresas', detalhe: err.message });
  }
};

const buscarEmpresa = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM EMPRESA WHERE id_empresa = ?', [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ erro: 'Empresa não encontrada' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar empresa', detalhe: err.message });
  }
};

const criarEmpresa = async (req, res) => {
  const { nome, razao_social, cnpj, cep, cnae, email, telefone,
          setor, regiao_administrativa, porte, tipo_empresa, num_funcionarios } = req.body;
  try {
    const [result] = await pool.query(
      `INSERT INTO EMPRESA 
       (nome, razao_social, cnpj, cep, cnae, email, telefone, setor,
        regiao_administrativa, porte, tipo_empresa, num_funcionarios)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome, razao_social, cnpj, cep, cnae, email, telefone,
       setor, regiao_administrativa, porte, tipo_empresa, num_funcionarios]
    );
    res.status(201).json({ id_empresa: result.insertId, mensagem: 'Empresa criada com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar empresa', detalhe: err.message });
  }
};

const atualizarEmpresa = async (req, res) => {
  const { nome, razao_social, email, setor, regiao_administrativa, porte } = req.body;
  try {
    const [result] = await pool.query(
      `UPDATE EMPRESA 
       SET nome = ?, razao_social = ?, email = ?, setor = ?,
           regiao_administrativa = ?, porte = ?
       WHERE id_empresa = ?`,
      [nome, razao_social, email, setor, regiao_administrativa, porte, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Empresa não encontrada' });
    res.json({ mensagem: 'Empresa atualizada com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar empresa', detalhe: err.message });
  }
};

const deletarEmpresa = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM EMPRESA WHERE id_empresa = ?', [req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Empresa não encontrada' });
    res.json({ mensagem: 'Empresa removida com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar empresa', detalhe: err.message });
  }
};

module.exports = { listarEmpresas, buscarEmpresa, criarEmpresa, atualizarEmpresa, deletarEmpresa };