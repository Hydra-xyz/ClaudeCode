# Impostore

Party game "Impostore": 1 giocatore umano contro 7 bot.
6 giocatori conoscono la parola segreta, 2 sono impostori e devono bluffare.

Completamente autonomo: nessuna chiave API, nessun account, nessuna
connessione richiesta dopo il primo caricamento. I bot attingono da un
database locale di indizi scritti a mano, uno per ciascuna delle 120
parole suddivise in 10 categorie.

## Come funziona

- I bot standard pescano un indizio vero sulla parola segreta da un database locale, evitando quelli già usati nel turno.
- I bot impostori non conoscono la parola: "rubano" un indizio plausibile ma sbagliato da un'altra parola della stessa categoria, per mimetizzarsi.
- L'ordine dei turni è casuale ma garantisce che nessun impostore parli per primo.
- Dopo il giro di indizi si vota chi si sospetta essere impostore; gli standard vincono eliminando entrambi gli impostori, gli impostori vincono se raggiungono la parità con gli standard rimasti.

## Avvio in locale

```bash
npm install
npm run dev
```

Apri l'app nel browser e inizia subito una partita, nessuna configurazione richiesta.

## Installazione su smartphone (PWA)

L'app è una Progressive Web App: build (`npm run build && npm run preview`) o deploy su un host HTTPS, poi apri l'URL da telefono e scegli "Aggiungi a schermata Home" (Android/Chrome) o "Aggiungi a Home" dalla condivisione di Safari (iOS). Funziona interamente offline dopo la prima visita grazie al service worker.

## Stack

Vite + React + TypeScript + Tailwind CSS + Zustand + vite-plugin-pwa (manifest + service worker). Nessuna dipendenza da servizi esterni a runtime.
