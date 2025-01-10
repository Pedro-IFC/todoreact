# Todo App em React, Express e MongoDB

Este repositório contém um projeto com um frontend em React e um backend em Express. Siga as instruções abaixo para configurar e rodar o ambiente corretamente.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado

## Estrutura do Projeto

- `frontend/`: Contém o código do React.
- `backend/`: Contém o código do Express.

## Configuração e Execução

### Backend

1. Navegue até o diretório do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor em modo de produção:

   ```bash
   npm run production
   ```

   O backend será iniciado e estará disponível no endereço configurado (ex.: `http://localhost:3000`).

### Frontend

1. Navegue até o diretório do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Para iniciar o frontend em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

   Para iniciar o frontend em modo de produção:

   ```bash
   npm run production
   ```

   O frontend estará disponível no endereço configurado (ex.: `http://localhost:5173`).

## Observações

- Certifique-se de que as variáveis de ambiente para o backend e o frontend estão corretamente configuradas nos arquivos `.env` em suas respectivas pastas.
- Para desenvolvimento, pode ser necessário rodar ambos (frontend e backend) simultaneamente.

## Scripts Principais

| Diretório  | Comando               | Descrição                      |
|------------|-----------------------|--------------------------------|
| `backend`  | `npm install`         | Instala dependências           |
| `backend`  | `npm run production`  | Inicia o backend em produção   |
| `frontend` | `npm install`         | Instala dependências           |
| `frontend` | `npm run dev`         | Inicia o frontend em dev       |
| `frontend` | `npm run production`  | Inicia o frontend em produção  |

## Tecnologias Utilizadas

- **Frontend:** React, Vite
- **Backend:** Express.js
