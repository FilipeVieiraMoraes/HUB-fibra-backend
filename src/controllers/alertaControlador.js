const pool = require('../config/db');

const listarAlertas = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT a.*, e.nome AS nome_empresa
      FROM ALERTA a
      JOIN EMPRESA e ON e.id_empresa = a.id_empresa
      WHERE a.status_alerta = 'Pendente'
      ORDER BY a.data_alerta DESC
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar alertas', detalhe: err.message });
  }
};

const listarRecomendacoes = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT r.*, e.nome AS nome_empresa
      FROM RECOMENDACAO r
      JOIN EMPRESA e ON e.id_empresa = r.id_empresa
      WHERE r.status_recomendacao = 'Pendente'
      ORDER BY r.data_geracao DESC
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar recomendações', detalhe: err.message });
  }
};

module.exports = { listarAlertas, listarRecomendacoes };