# System Cache 🚀

## Descrição 📄

System Cache é um projeto desenvolvido em Node.js utilizando o framework Express e o banco de dados Redis. O objetivo do projeto é criar um servidor eficiente que se conecta a uma API externa e utiliza Redis para caching, melhorando a performance e a escalabilidade das respostas.

## Features ✨

- 🌐 **Criação de Servidor**: Utilização do Express para configurar um servidor web rápido e flexível.
- 🔗 **Conexão com API Externa**: Integração com uma API externa para obtenção de dados dinâmicos.
- 🛠️ **Configuração do Redis**: Implementação do Redis para caching dos dados, aumentando a eficiência e reduzindo a latência das requisições.

## Instalação e Uso 📦

1. **Clone o repositório:**

```sh
   git clone https://github.com/msc-santos/system-cache.git
   cd system-cache
   npm i
   npm run serve
```

## Estrutura

system-cache/

- │
- ├── node_modules/ # Dependências instaladas
- ├── routes.js # Definição das rotas da aplicação
- ├── .gitignore # Arquivos e diretórios a serem ignorados pelo Git
- ├── package.json # Informações do projeto e dependências
- ├── App.js/Index.js # Arquivo principal do servidor
- └── README.md # Documentação do projeto

## Endpoints

- [x] GET: / # Verifica o funcionamento da API
- [x] GET: /citys/:state # Buscas as cidades do estado informado
