<p align="center">
  <img src="assets/images/logo.png" alt="Meu Pequeno Jardim" width="180" />
</p>

<h1 align="center">Meu Pequeno Jardim 🌱</h1>

Aplicativo mobile de **educação emocional para crianças**. A criança cultiva um "jardim de emoções": registra diariamente como está se sentindo, mantém um diário, acompanha um calendário e assiste a vídeos educativos — enquanto pais e responsáveis acompanham a evolução por uma área dedicada.

<p align="center">
  <img src="https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=flat&logo=react&logoColor=black" alt="React Native" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## As emoções do jardim

A criança navega por um carrossel e identifica como está se sentindo:

<p align="center">
  <img src="assets/images/Feliz.png" alt="Feliz" width="90" />
  <img src="assets/images/Triste.png" alt="Triste" width="90" />
  <img src="assets/images/Raiva.png" alt="Raivoso" width="90" />
  <img src="assets/images/Anisoso.png" alt="Ansioso" width="90" />
  <img src="assets/images/Sonolento.png" alt="Sonolento" width="90" />
  <img src="assets/images/Entediado.png" alt="Entediado" width="90" />
  <img src="assets/images/Doente.png" alt="Doente" width="90" />
  <img src="assets/images/NS.png" alt="Não sei" width="90" />
</p>

---


## Funcionalidades

- **Jardim de emoções**: carrossel interativo onde a criança seleciona como se sente (feliz, ansioso, triste, raivoso, sonolento, entediado, doente e mais).
- **Diário**: registro pessoal das emoções e acontecimentos do dia.
- **Calendário**: visualização do histórico emocional ao longo do tempo.
- **Vídeos educativos**: conteúdo em vídeo voltado ao bem-estar infantil.
- **Área dos responsáveis**: login, cadastro de criança e painel para acompanhamento dos pais.
- **Perfil**: personalização da experiência da criança.

## Stack

- **Expo (SDK 54)** com **expo-router** (roteamento baseado em arquivos e rotas tipadas)
- **React Native 0.81** + **React 19** com a Nova Arquitetura e React Compiler
- **TypeScript**
- **react-native-calendars** para o calendário
- **victory-native** para visualização de dados emocionais
- **react-native-youtube-iframe** para os vídeos
- **AsyncStorage** para persistência local

## Estrutura

```
app/
  (tabs)/        # Navegação principal: início, diário, calendário, vídeos, perfil
  login.tsx      # Autenticação dos responsáveis
  register.tsx   # Cadastro
  register-child.tsx
  parent-area.tsx# Área dos pais
  faq.tsx
components/      # Componentes reutilizáveis e de tema
constants/       # Tema e tokens de design
hooks/           # Hooks customizados (ex.: color scheme)
assets/          # Imagens das emoções e identidade visual
```

## Como executar

Pré-requisitos: Node.js LTS e o app [Expo Go](https://expo.dev/go) (ou um emulador Android/iOS).

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npx expo start
```

No terminal, escolha abrir em um **emulador Android**, **simulador iOS**, no **navegador** ou escaneie o QR Code com o **Expo Go**.

## Scripts

| Comando            | Descrição                          |
| ------------------ | ---------------------------------- |
| `npm start`        | Inicia o servidor Expo             |
| `npm run android`  | Abre no emulador Android           |
| `npm run ios`      | Abre no simulador iOS              |
| `npm run web`      | Abre no navegador                  |
| `npm run lint`     | Executa o linter                   |

---

Desenvolvido por **Caio Matheus Bezerra da Silva**.
