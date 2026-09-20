# Impostore

Prototipo del party game "Impostore": 1 giocatore umano contro 7 bot IA.
6 giocatori conoscono la parola segreta, 2 sono impostori e devono bluffare.

## Come funziona

- I bot standard generano i loro indizi tramite l'API di Anthropic (Claude), calibrati per non essere né troppo ovvi né troppo criptici.
- I bot impostori non conoscono la parola: generano un bluff plausibile basandosi sugli indizi già dati dagli altri.
- L'ordine dei turni è casuale ma garantisce che nessun impostore parli per primo.
- Dopo il giro di indizi si vota chi si sospetta essere impostore; gli standard vincono eliminando entrambi gli impostori, gli impostori vincono se raggiungono la parità con gli standard rimasti.

## Avvio in locale

```bash
npm install
npm run dev
```

Apri l'app nel browser, inserisci la tua chiave API Anthropic (salvata solo in `localStorage`, mai inviata altrove) e inizia una partita.

## Installazione su smartphone (PWA)

L'app è una Progressive Web App: build (`npm run build && npm run preview`) o deploy su un host HTTPS, poi apri l'URL da telefono e scegli "Aggiungi a schermata Home" (Android/Chrome) o "Aggiungi a Home" dalla condivisione di Safari (iOS). Funziona anche offline dopo la prima visita grazie al service worker.

## Stack

Vite + React + TypeScript + Tailwind CSS + Zustand + SDK Anthropic (chiamato direttamente dal browser per questo prototipo) + vite-plugin-pwa (manifest + service worker).
