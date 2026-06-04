const pool = require('../config/db');

const listarRelatorios = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT e.nome, e.categoria, e.score_engajamento, e.status_engajamento
      FROM EMPRESA e
      ORDER BY e.score_engajamento DESC
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar relatórios', detalhe: err.message });
  }
};

const criarRelatorio = async (req, res) => {
  res.json({ mensagem: 'Relatório registrado com sucesso' });
};

module.exports = { listarRelatorios, criarRelatorio };