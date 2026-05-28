// TODO: conectar ao banco de dados

function getConfiguracoes(req, res) {
  // TODO: buscar todas as configurações no banco
  res.json([]);
}

function atualizarConfiguracao(req, res) {
  const { key } = req.params;
  const { value } = req.body;

  if (value === undefined) {
    return res.status(400).json({ message: 'Valor é obrigatório' });
  }

  // TODO: atualizar configuração pelo key no banco
  res.json({ message: 'Configuração atualizada com sucesso' });
}

module.exports = { getConfiguracoes, atualizarConfiguracao };
