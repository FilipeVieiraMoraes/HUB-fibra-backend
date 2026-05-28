# Backend HUB - Node.js + Express

Backend simples feito em JavaScript puro para o projeto HUB.

Esta versão usa apenas:

- Node.js
- Express

Não usa:

- CORS
- Dotenv
- TypeScript
- Banco externo

Os dados estão simulados em memória no arquivo:

```txt
src/data/database.js
```

## Como rodar

Instale as dependências:

```bash
npm install
```

Rode o servidor:

```bash
npm run dev
```

Ou:

```bash
npm start
```

A API ficará disponível em:

```txt
http://localhost:3001
```

## Rotas

### Teste

```txt
GET /api/health
```

### Dashboard

```txt
GET /api/dashboard
```

### Empresas

```txt
GET    /api/companies
GET    /api/companies/:id
POST   /api/companies
PUT    /api/companies/:id
DELETE /api/companies/:id
```

Exemplo de POST em `/api/companies`:

```json
{
  "name": "Nova Empresa",
  "sector": "Tecnologia",
  "status": "Ativa",
  "employees": 50,
  "engagement": 80,
  "city": "Brasília",
  "contactEmail": "contato@novaempresa.com"
}
```

### Engajamento

```txt
GET /api/engagement
```

### Relatórios

```txt
GET  /api/reports
POST /api/reports
```

Exemplo de POST em `/api/reports`:

```json
{
  "title": "Relatório de teste",
  "type": "Empresas"
}
```

### Configurações

```txt
GET /api/settings
PUT /api/settings/:key
```

Exemplo de PUT em `/api/settings/platformName`:

```json
{
  "value": "HUB Admin"
}
```

## Observação importante

Como esta versão não usa banco de dados real, os dados criados ou alterados ficam salvos apenas enquanto o servidor estiver rodando.

Se você parar e iniciar o servidor novamente, os dados voltam ao estado inicial do arquivo `database.js`.
