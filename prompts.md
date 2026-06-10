# Repositório de Prompts — GrowUp CRM
**Projeto:** CRM Inteligente para a FIBRA  
**Squad:** 27 — Residência Tecnológica

---

## Prompt 1 — Revisão de lógica do score de engajamento

**Objetivo:** Validar se a lógica de cálculo do score estava correta antes de implementar.

**Contexto informado:**
> "Tenho uma função em Node.js que calcula o score de engajamento de uma empresa com base no número de capacitações, visitas técnicas e participação em programas. Cada capacitação vale 10 pontos, cada visita vale 15, e participação em programa de aceleração vale 30. Faz sentido essa lógica ou tem algo que eu deveria ajustar para refletir melhor o peso de cada ação?"

**Saída esperada:** Validação da lógica e sugestão de ajuste nos pesos se necessário.

**Problemas encontrados:** A IA sugeriu adicionar um fator de decaimento temporal (penalizar empresas que não participam há muito tempo), o que não estava no escopo inicial.

**Ajuste realizado:** Ignoramos a sugestão de decaimento por estar fora do escopo do MVP. Mantivemos a lógica original e implementamos manualmente conforme planejado pelo grupo.

---

## Prompt 2 — Dúvida sobre relacionamento N:N no MySQL

**Objetivo:** Tirar dúvida pontual sobre como modelar a participação de empresas em eventos.

**Contexto informado:**
> "Estou modelando um banco MySQL onde uma empresa pode participar de vários eventos e um evento pode ter várias empresas. Já sei que preciso de uma tabela intermediária, mas não tenho certeza se coloco a chave primária composta por id_empresa e id_evento ou se crio um id_participacao separado. Qual é a melhor prática?"

**Saída esperada:** Explicação objetiva sobre as duas abordagens e qual usar no contexto do projeto.

**Problemas encontrados:** Nenhum. A resposta foi direta e ajudou a tomar a decisão de usar `id_participacao` como PK própria para facilitar referências futuras em logs.

**Ajuste realizado:** Nenhum. Implementamos conforme a recomendação, que fazia sentido para o modelo do projeto.

---

## Prompt 3 — Erro de CORS no backend

**Objetivo:** Resolver erro de CORS que aparecia ao conectar o frontend React com o backend Express.

**Contexto informado:**
> "Meu backend em Express está retornando erro de CORS quando o frontend React tenta fazer uma requisição GET. Já instalei o pacote cors e adicionei app.use(cors()) mas continua dando erro. O frontend roda na porta 3000 e o backend na 3001."

**Saída esperada:** Solução para o erro de CORS específico do ambiente de desenvolvimento.

**Problemas encontrados:** A primeira sugestão foi adicionar um header manualmente na rota, o que não resolveu.

**Ajuste realizado:** Aplicamos a configuração de origem específica no cors(), passando a URL do frontend como origem permitida. Resolveu o problema.

---

## Prompt 4 — Estrutura de pastas do projeto backend

**Objetivo:** Validar se a estrutura de pastas do backend estava organizada de forma adequada.

**Contexto informado:**
> "Meu backend em Node.js com Express está com todos os arquivos na pasta src. Tenho server.js, as rotas e os controladores misturados. Como organizar melhor isso sem complicar demais, já que é um projeto acadêmico de médio porte?"

**Saída esperada:** Sugestão de estrutura simples e funcional para o projeto.

**Problemas encontrados:** A IA sugeriu uma estrutura com camada de serviços separada dos controladores, o que adicionaria complexidade desnecessária pro escopo do projeto.

**Ajuste realizado:** Adotamos uma estrutura simplificada com separação apenas entre rotas e controladores, sem a camada de serviços. Mais adequada para o tamanho do projeto.

---

## Prompt 5 — Revisão da query de alertas de inatividade

**Objetivo:** Validar uma query MySQL que buscava empresas sem participação nos últimos 60 dias.

**Contexto informado:**
> "Tenho essa query no MySQL que deveria retornar empresas cuja data_ultima_interacao seja anterior a 60 dias atrás. Ela está retornando resultados estranhos, empresas que participaram recentemente também aparecem. Me ajuda a identificar o erro: SELECT * FROM empresa WHERE data_ultima_interacao < DATE_SUB(NOW(), INTERVAL 60 DAY)"

**Saída esperada:** Identificação do erro na query e correção.

**Problemas encontrados:** Nenhum. A IA identificou rapidamente que o campo `data_ultima_interacao` tinha valores nulos para empresas recém-cadastradas, o que fazia elas aparecerem no resultado.

**Ajuste realizado:** Adicionamos um `AND data_ultima_interacao IS NOT NULL` na query e tratamos o cadastro inicial para sempre definir a data como a data de criação da empresa.

---

## Prompt 6 — Dúvida sobre variáveis de ambiente no Railway

**Objetivo:** Entender como configurar as variáveis de ambiente do banco no Railway sem expor credenciais no repositório.

**Contexto informado:**
> "Estou hospedando meu banco MySQL no Railway e quero conectar meu backend Node.js a ele usando variáveis de ambiente. Como configuro o arquivo .env localmente e como garanto que as credenciais não vão pro GitHub?"

**Saída esperada:** Explicação de como usar dotenv e .gitignore para proteger as credenciais.

**Problemas encontrados:** Nenhum. Já tínhamos o dotenv instalado, só faltava adicionar o `.env` ao `.gitignore`, o que foi feito imediatamente.

**Ajuste realizado:** Adicionamos `.env` ao `.gitignore` e documentamos no README quais variáveis precisam ser configuradas, sem expor os valores reais.

---

## Histórico de Alterações

| Versão | Data | Descrição |
|---|---|---|
| v1.0 | Entrega Parcial | Prompts de planejamento documentados |
| v1.1 | Entrega Final | Prompts técnicos de desenvolvimento adicionados |
