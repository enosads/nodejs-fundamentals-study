# Node.js Fundamentals

Este projeto foi desenvolvido como parte de um estudo aprofundado sobre os fundamentos do Node.js. O foco principal é entender como o Node.js funciona internamente, explorando conceitos como Streams, buffer, e a criação de uma API REST completa sem o uso de frameworks externos como Express ou Fastify.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- JavaScript (ESM)
- Streams (Readable, Writable, Transform, Duplex)
- File System (Promises)
- HTTP (nativo)

## 💻 Sobre o projeto

A aplicação consiste em uma API para gerenciamento de usuários (CRUD) com as seguintes características:

- **Persistência de Dados:** Os dados são salvos em um arquivo JSON local (`db.json`) simulando um banco de dados.
- **Middleware:** Implementação de um middleware para interceptar o corpo das requisições e converter para JSON.
- **Streams:** Exemplos práticos de manipulação de dados em larga escala utilizando Readable, Writable e Transform streams.
- **Tratamento de Rotas:** Sistema de rotas manual utilizando Expressões Regulares (Regex) para suporte a parâmetros de URL.

## 🛠️ Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/enosads/nodejs-fundamentals-study.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd nodejs-fundamentals-study
   ```
3. Instale as dependências (se houver):
   ```bash
   npm install
   ```
4. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

O servidor estará rodando em `http://localhost:3333`.

## 📖 Aprendizados

Este projeto foi essencial para compreender como o Node.js lida com I/O não bloqueante através de streams, além de reforçar o entendimento sobre o protocolo HTTP e a estrutura de módulos ESM.

---
Desenvolvido por [Enos Andrade](https://github.com/enosads) 🚀
