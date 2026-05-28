const express = require('express');
const cors = require('cors');

const painelRotas = require('./routes/painelRotas');
const empresaRotas = require('./routes/empresaRotas');
const engajamentoRotas = require('./routes/engajamentoRotas');
const relatorioRotas = require('./routes/relatorioRotas');
const configuracoesRotas = require('./routes/configuracoesRotas');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API do HUB funcionando!',
    version: '1.0.0'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Servidor online'
  });
});

app.use('/api/dashboard', painelRotas);
app.use('/api/companies', empresaRotas);
app.use('/api/engagement', engajamentoRotas);
app.use('/api/reports', relatorioRotas);
app.use('/api/settings', configuracoesRotas);

app.use((req, res) => {
  res.status(404).json({
    message: 'Rota não encontrada'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
