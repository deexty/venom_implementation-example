# Projeto de Exemplo - Venom Bot

Este é um projeto de exemplo que demonstra como utilizar a biblioteca `venom-bot` para criar um bot do WhatsApp em Node.js.

## Índice
- [Pré Requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Comandos Básicos](#comandos-básicos)
  - [Enviar Mensagens](#enviar-mensagens)
  - [Buscar Qrcode para conexão externa](#enviar-documentos)
- [Rotas Básicas](#rotas-básicas)

## Pré-requisitos {#pré-requisitos}


- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- NPM ou Yarn

## Instalação {#instalação}

1. Clone o repositório:

   ```bash
   git clone https://github.com/deexty/venom_implementation-example.git
   cd venom_implement
   
2. Instale as dependências:

    ```bash
    npm install
    ou
    yarn install

## Comandos Básicos {#comandos-básicos}

1. Enviar Mensagens {#enviar-mensagens}<br/>
   Para enviar uma mensagem simples, utilize o seguinte comando:
   ```bash
   intancedVenomService.sendMessage(to, message);

2. Buscar QR Code para Conexão Externa {#enviar-documentos}<br/>
   Para obter o QR code e conectar-se externamente, você pode usar o seguinte comando:
   ```bash
   const qrcode = intancedVenomService.getQrCode();
   //retorna um base64

## Rotas Básicas {#rotas-básicas}

1. **(POST)/send-message**
     <br/>
    Para enviar uma mensagem simples, utilize o seguinte comando:
    Exemplo body:
     ```bash
     {
    "to": "554399999999",
    "message": "Hello World!"
    }  
3. **(GET)/qrcode**
  <br/>
   Para obter o QR code e conectar-se externamente
