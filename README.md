# Backend HUB Fibra - Node.js + Express + MySQL

Backend do CRM Inteligente HUB Fibra, integrado com banco de dados MySQL hospedado no Railway.

## Tecnologias

- Node.js
- Express
- MySQL2
- Dotenv
- CORS

## Como rodar localmente

1. Clone o repositório ou baixe o ZIP
2. Instale as dependências:
npm install
3. Crie um arquivo `.env` na raiz com as seguintes variáveis:
   
PORT=3001

DB_HOST=seu_host

DB_PORT=sua_porta

DB_USER=seu_usuario

DB_PASSWORD=sua_senha

DB_NAME=hub_fibra

   > O arquivo `.env` não é versionado por conter credenciais sensíveis.
   > Para rodar o projeto, solicite as credenciais do banco ao responsável pelo servidor Railway.

5. Rode o servidor:
npm start

A API ficará disponível em `http://localhost:3001`

## Rotas disponíveis

### Health
GET /api/health

### Empresas
GET    /api/companies
GET    /api/companies/:id
POST   /api/companies
PUT    /api/companies/:id
DELETE /api/companies/:id

### Engajamento
GET  /api/engagement
POST /api/engagement/recalcular/:id

### Alertas
GET /api/alerts

### Recomendações
GET /api/recommendations

### Relatórios
GET  /api/reports
POST /api/reports

### Configurações
GET /api/settings
PUT /api/settings/:key
