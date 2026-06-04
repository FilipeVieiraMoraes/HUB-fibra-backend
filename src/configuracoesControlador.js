const pool = require('./config/db');

async function getConfiguracoes(req, res) {
  res.json({ platformName: 'HUB Fibra', version: '1.0.0' });
}

async function atualizarConfiguracao(req, res) {
  const { key } = req.params;
  const { value } = req.body;
  if (value === undefined) {
    return res.status(400).json({ message: 'Valor é obrigatório' });
  }
  res.json({ message: `Configuração '${key}' atualizada com sucesso`, value });
}

module.exports = { getConfiguracoes, atualizarConfiguracao };
