// TODO: conectar ao banco de dados

function getRelatorios(req, res) {
  // TODO: buscar todos os relatórios no banco
  res.json([]);
}

function criarRelatorio(req, res) {
  const { title, type } = req.body;

  if (!title || !type) {
    return res.status(400).json({ message: 'Título e tipo são obrigatórios' });
  }

  // TODO: inserir novo relatório no banco
  res.status(201).json({ message: 'Relatório criado com sucesso' });
}

module.exports = { getRelatorios, criarRelatorio };
