# Desaparecidos

[![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-orange)] [![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)  [![Next.js](https://img.shields.io/badge/Next.js-13.5-blue?logo=nextdotjs)](https://nextjs.org/)  [![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)](https://nodejs.org/)  [![Docker](https://img.shields.io/badge/Docker-24.0-blue?logo=docker)](https://www.docker.com/)
 
---
  [Sobre o Projeto](#-sobre-o-projeto)  
  [Funcionalidades Principais](#-funcionalidades-principais)  
  [Preview da Interface](#-preview-da-interface)  
  [Tecnologias Utilizadas](#-tecnologias-utilizadas)  
  [Estrutura do Projeto](#-estrutura-do-projeto)  
  [Como Executar Localmente](#-como-executar-localmente)  
  [Roadmap do Projeto](#-roadmap-do-projeto)  
  [Contribuição](#-contribuição)  
  [Licença](#-licença)  
  [Contato](#-contato)  

---

## 🚨 Sobre o Projeto

**Desaparecidas** é uma aplicação **Next.js** desenvolvida para conectar cidadãos e autoridades da Polícia Judiciária Civil de Mato Grosso.  

A aplicação permite:  

- Consultar registros de **pessoas desaparecidas** ou já localizadas.  
- Enviar informações adicionais, como observações, localização e fotos, para auxiliar na investigação.  

> Um projeto **100% responsivo, seguro e fácil de usar**, ideal para cidadãos e investigadores. 

---

## ⚡ Funcionalidades Principais

| Funcionalidade | Descrição |
|----------------|-----------|
| Consulta de Pessoas Desaparecidas | Pesquise por nome, idade, sexo ou região e visualize status de localização. |
| Envio de Informações Adicionais | Submissão de fotos, observações e localização aproximada do indivíduo. |
| Interface Responsiva | Funciona em dispositivos móveis e desktops, com design moderno e acessível. |
| Notificações e Feedback | Sistema de confirmação de envio de informações relevantes. |

---

## 🎨 Preview da Interface

![Preview da Interface](https://via.placeholder.com/800x400?text=Preview+da+Interface+Desaparecidas)

> Imagem ilustrativa: Interface amigável para consulta e envio de informações.  

---

## 🛠 Tecnologias Utilizadas

- **Frontend:** Next.js, React, TailwindCSS  
- **Backend:** Node.js, Express, PostgreSQL  
- **Integração:** API da Polícia Judiciária Civil de Mato Grosso  
- **Versionamento e CI/CD:** Git, GitHub Actions / Jenkins  
- **Containerização:** Docker & Docker Compose  
- **Testes:** Jest (com configuração e setup)

---

## 📂 Estrutura do Projeto
```
desaparecidos/
├─ 🌐 frontend/      # Next.js + TailwindCSS
│ ├─ 📄 pages/       # Páginas Next.js
│ ├─ 🧩 components/  # Componentes reutilizáveis (ex: Footer, Header, Navbar)
│ ├─ 🖼️ public/      # Assets (imagens, ícones, fontes)
│ └─ 🧪 tests/        # Testes automatizados com Jest
├─ 🐳 docker/        # Configurações Docker e Docker Compose
├─ 📖 docs/          # Documentação técnica, manuais e guias
├─ 📄 jest.config.js # Configuração do Jest
├─ 🧪 jest.setup.js  # Setup inicial do Jest
├─ 📄 next.config.js # Configuração do Next.js
├─ 📖 LICENSE        # Arquivo de licença
├─ 📝 README.md      # Este arquivo
└─ 📦 package.json   # Dependências do projeto

```
---
## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js >= 20  
- Docker & Docker Compose  
- Git  
- Jest (Testes Automatizados)

### Passos

1. Clone o repositório:
```
git clone git@github.com:EltonMdeLima/desaparecidos.git
cd desaparecidos
```

2. Configure variáveis de ambiente:
```
cp .env.example .env # Edite as variáveis conforme necessário
```

3. Inicialize containers do backend:
```
docker compose up -d
```

4. Execute o frontend Next.js:
```
cd frontend
pnpm install
pnpm dev
```

5. Testes Automatizados (Jest)
```
npm run test
```
---
## 🛠 Roadmap do Projeto

| Fase        | Funcionalidade                             | Status        | Observações              |
|-------------|--------------------------------------------|---------------|--------------------------|
| 🔹 Backend  | Estrutura inicial e integração com API oficial | ✅ Concluído   | Pronto para testes       |
| 🔹 Frontend | Interface Next.js responsiva               | ✅ Concluído   | Layouts básicos implementados |
| 🔹 Upload   | Envio de fotos e observações               | ✅ Concluído   | Validação de formatos e tamanho |
| 🔹 Testes   | Testes automatizados (frontend e backend)  | ✅ Em andamento | Cobertura mínima de 80% |
| 🔹 Autenticação | Sistema de login para usuários          | ⚪ Desenvolvimento | Implementar JWT ou OAuth |
| 🔹 Dashboard | Painel administrativo para autoridades    | ⚪ Desenvolvimento | Visualização de informações enviadas |
| 🔹 Deploy   | Produção via Docker + CI/CD                | ⚪ Planejado   | Pipeline de deploy completo |

---
## 🤝 Contribuição

Contribuições são muito bem-vindas! Use o fluxo GitFlow:

1. Crie uma branch a partir de development:
```
git checkout -b feature/nome-da-feature
```

2. Faça alterações com commits claros e descritivos.

3. Abra um Pull Request para revisão e integração.
---
## 📄 Licença

MIT License – consulte LICENSE
 para detalhes.
 
---
## 📬 Contato

**Elton M. Lima** – 💻 Engenheiro de Computação & ⚙️ Especialista em DevOps  

- 📧 Email: [elton_marcelino@outlook.com](mailto:elton_marcelino@outlook.com)  
- 🔗 LinkedIn: [linkedin.com/in/eltonmlima](https://www.linkedin.com/in/eltonmlima)  
- 🐙 GitHub: [github.com/eltonmlima](https://github.com/eltonmlima)  
