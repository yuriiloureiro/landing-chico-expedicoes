# Tô Por Aí no Mundo — site das expedições

React + Vite + React Router. Deploy na Vercel.

## Rodar local

```bash
npm install
cp .env.example .env   # e preencha VITE_WEB3FORMS_KEY
npm run dev
```

## Adicionar ou editar uma expedição

Tudo fica em `src/data/expedicoes.js`. Cada objeto vira automaticamente:

- um card na home (`/#expedicoes`)
- uma página em `/expedicoes/<slug>`
- um link no rodapé

Campos principais:

| campo | obrigatório | descrição |
| --- | --- | --- |
| `slug` | sim | vira a URL |
| `nome`, `ano` | sim | |
| `status` | sim | `ultimas-vagas`, `aberta` ou `em-breve` |
| `periodo`, `duracao` | não | texto livre |
| `imagemCard`, `imagemHero` | não | importar de `src/assets/images/expedicoes/` |
| `videoId` | não | ID do YouTube (vídeo do Chico). Sem ele, mostra `imagemSecundaria` |
| `videoFormato` | não | `vertical` (Reels) ou `horizontal` |
| `incluso`, `naoIncluso`, `obrigatorios`, `dicas`, `faq` | não | seções aparecem só se preenchidas |
| `mensagemWhatsApp` | não | texto pré-preenchido no botão |

Expedições com `status: "em-breve"` mostram só o formulário de lista de espera.

## Formulários

Usam o [Web3Forms](https://web3forms.com) (grátis, entrega por e-mail). Crie a chave com o e-mail do Chico,
coloque em `.env` (local) e em **Settings → Environment Variables** na Vercel como `VITE_WEB3FORMS_KEY`.
Sem a chave, o formulário mostra erro e aponta pro WhatsApp.

## Deploy

`vercel.json` já tem o rewrite pra SPA (rotas diretas como `/expedicoes/...` funcionam).
