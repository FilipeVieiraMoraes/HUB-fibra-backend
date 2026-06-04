const pool = require('../config/db');

const listarEngajamento = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT id_empresa, nome, setor, categoria,
             status_engajamento, score_engajamento, data_ultima_interacao
      FROM EMPRESA
      ORDER BY score_engajamento DESC
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar engajamento', detalhe: err.message });
  }
};

const recalcularEngajamento = async (req, res) => {
  try {
    await pool.query('CALL sp_recalcular_engajamento_empresa(?)', [req.params.id]);
    res.json({ mensagem: 'Engajamento recalculado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao recalcular', detalhe: err.message });
  }
};

module.exports = { listarEngajamento, recalcularEngajamento };