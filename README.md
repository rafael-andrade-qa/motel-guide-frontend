# Guia de Móteis - Frontend

Este projeto é um frontend responsivo e moderno desenvolvido em React, focado no cadastro de usuários para o sistema **Guia de Móteis**. O design é elegante, com espaço bem definido para inputs, mensagens de erro e interações suaves.

## 📄 Funcionalidades
- Formulário de cadastro de usuários com validação embutida.
- Mensagens de erro dinâmicas para campos obrigatórios, senhas fracas e confirmação de e-mail.
- Design responsivo para diferentes tamanhos de tela.
- Estilização customizada para se alinhar ao tema **Guia de Móteis**.
- `data-testid` em elementos para facilitar a automação de testes.

## 🛠️ Tecnologias Utilizadas
- **React**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta de build rápida para projetos React.
- **CSS3**: Estilização personalizada do formulário.

## 🚀 Começando

### 1. Clone o repositório
```bash
git clone https://github.com/rafael-andrade-qa/motel-guide-frontend.git
cd motel-guide-frontend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Rode o projeto localmente
```bash
npm run dev
```
O projeto estará acessível em http://localhost:5173/.

### 4. Build para produção
```bash
npm run build
```
O build final será gerado na pasta `dist`.

### 5. Deploy no GitHub Pages
Para publicar o projeto no GitHub Pages, execute:

```bash
npm run deploy
```
O projeto será publicado em: https://rafael-andrade-qa.github.io/motel-guide-frontend

## ⚙️ Validações Implementadas
- **Campos obrigatórios:** O formulário não pode ser enviado sem preencher todos os campos.
- **Validação de senha forte:** A senha deve conter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.
- **Confirmação de e-mail:** O campo de confirmação de e-mail deve corresponder ao e-mail principal.
- **Mensagens de erro:** Mensagens dinâmicas informando erros ao usuário.

## 🔍 `data-testid` Implementados
- **`form-title`**: Título do formulário.
- **`input-name`**: Campo de entrada do nome.
- **`input-email`**: Campo de entrada do e-mail.
- **`input-confirm-email`**: Campo de entrada para confirmação de e-mail.
- **`input-password`**: Campo de entrada da senha.
- **`submit-button`**: Botão de submissão do formulário.
- **`error-*`**: Mensagens de erro dinâmicas para cada campo.
