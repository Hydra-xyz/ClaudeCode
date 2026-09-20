export interface WordEntry {
  word: string;
  clues: string[];
}

export interface WordCategory {
  id: string;
  label: string;
  emoji: string;
  words: WordEntry[];
}

export const WORD_CATEGORIES: WordCategory[] = [
  {
    id: "cibo",
    label: "Cibo & Bevande",
    emoji: "🍕",
    words: [
      {
        word: "Pizza",
        clues: [
          "Si mangia spesso il venerdì sera",
          "Ha una forma rotonda e si taglia a fette",
          "Il forno a legna la rende più buona",
          "Napoli ne va molto fiera",
          "Si porta a casa in una scatola di cartone",
          "Ognuno la personalizza con ingredienti diversi",
        ],
      },
      {
        word: "Gelato",
        clues: [
          "Si scioglie velocemente d'estate",
          "Si serve in coppetta o cono",
          "Ha tantissimi gusti tra cui scegliere",
          "In Italia se ne va fieri",
          "Fa venire il mal di testa se mangiato in fretta",
          "Meglio gustarlo passeggiando",
        ],
      },
      {
        word: "Cappuccino",
        clues: [
          "Si beve soprattutto al mattino",
          "Ha la schiuma di latte sopra",
          "Dopo pranzo è quasi un tabù ordinarlo in Italia",
          "Va servito in una tazza calda",
          "Si accompagna spesso con un cornetto",
          "Il barista lo prepara con la macchina espresso",
        ],
      },
      {
        word: "Pasta",
        clues: [
          "È un piatto tipico della domenica in famiglia",
          "Si cuoce in acqua bollente e salata",
          "Ha centinaia di formati diversi",
          "Il sugo la rende ancora più gustosa",
          "Va scolata al dente",
          "È un simbolo della cucina italiana nel mondo",
        ],
      },
      {
        word: "Sushi",
        clues: [
          "Si mangia spesso con le bacchette",
          "Viene dal Giappone",
          "Il pesce crudo ne è protagonista",
          "Si intinge nella salsa di soia",
          "Lo zenzero lo accompagna spesso",
          "Ha forme piccole e curate",
        ],
      },
      {
        word: "Panino",
        clues: [
          "Perfetto da portare in ufficio o a scuola",
          "Ha due fette di pane che racchiudono il ripieno",
          "Si prepara in pochi minuti",
          "Ideale per un pranzo veloce",
          "Ognuno lo farcisce a modo suo",
          "Si trova in ogni bar",
        ],
      },
      {
        word: "Cioccolato",
        clues: [
          "Fa felici grandi e bambini",
          "Esiste in versione fondente, al latte o bianca",
          "A San Valentino se ne regala spesso",
          "Si scioglie in bocca",
          "Il cacao è il suo ingrediente principale",
          "Alcuni non riescono a resistergli",
        ],
      },
      {
        word: "Formaggio",
        clues: [
          "Si ottiene dal latte",
          "Ha stagionature diverse, dal fresco al molto stagionato",
          "Va benissimo su un tagliere con il vino",
          "Alcune varietà hanno buchi caratteristici",
          "Si gratta spesso sulla pasta",
          "Il suo profumo può essere molto intenso",
        ],
      },
      {
        word: "Vino",
        clues: [
          "Si beve durante le cene importanti",
          "Invecchiando può migliorare",
          "Rosso o bianco, dipende dai gusti",
          "Si versa in un calice",
          "L'Italia ne è tra i maggiori produttori al mondo",
          "Va abbinato bene al piatto che accompagna",
        ],
      },
      {
        word: "Popcorn",
        clues: [
          "Non può mancare al cinema",
          "Scoppietta mentre si cuoce",
          "Si condisce con sale o zucchero",
          "Si mangia a manciate durante un film",
          "Il mais è il suo ingrediente base",
          "Riempie una grande busta con poco",
        ],
      },
      {
        word: "Hamburger",
        clues: [
          "Simbolo della cucina americana",
          "Ha la carne tra due fette di pane",
          "Il fast food lo ha reso famosissimo",
          "Si personalizza con salse e formaggio",
          "Si mangia spesso con le patatine",
          "Va servito ancora caldo",
        ],
      },
      {
        word: "Tiramisù",
        clues: [
          "Dolce al cucchiaio molto amato in Italia",
          "Il caffè è uno dei suoi ingredienti chiave",
          "Il mascarpone lo rende cremoso",
          "Si serve freddo da frigorifero",
          "Il cacao in polvere lo decora sopra",
          "Il nome suggerisce energia",
        ],
      },
    ],
  },
  {
    id: "luoghi",
    label: "Luoghi",
    emoji: "🗺️",
    words: [
      {
        word: "Spiaggia",
        clues: [
          "D'estate si riempie di ombrelloni",
          "La sabbia scotta sotto i piedi a mezzogiorno",
          "Il mare la bagna da un lato",
          "Ci si va per prendere il sole",
          "I bambini ci costruiscono castelli",
          "Le conchiglie si trovano spesso qui",
        ],
      },
      {
        word: "Montagna",
        clues: [
          "D'inverno si riempie di sciatori",
          "L'aria lassù è più fresca e pulita",
          "Si sale con sentieri o funivie",
          "Le cime più alte restano innevate a lungo",
          "Gli scarponi sono l'attrezzatura giusta per esplorarla",
          "Offre panorami mozzafiato dall'alto",
        ],
      },
      {
        word: "Aeroporto",
        clues: [
          "Si passa dai controlli di sicurezza prima di entrare",
          "I voli partono e atterrano qui",
          "Le valigie si ritirano su un nastro",
          "Gli annunci megafonici scandiscono gli orari",
          "Ci sono negozi duty-free per i passeggeri",
          "Il check-in è il primo passo prima di partire",
        ],
      },
      {
        word: "Biblioteca",
        clues: [
          "Bisogna fare silenzio qui dentro",
          "Gli scaffali sono pieni di libri da prendere in prestito",
          "Uno studente ci va per concentrarsi",
          "Il bibliotecario aiuta a trovare i testi giusti",
          "Il tesserino serve per portare via i libri",
          "È un rifugio perfetto nelle giornate di pioggia",
        ],
      },
      {
        word: "Ospedale",
        clues: [
          "I medici e gli infermieri lavorano qui ogni giorno",
          "Il pronto soccorso accoglie le emergenze",
          "Ci si va quando serve una cura",
          "Le stanze ospitano i pazienti ricoverati",
          "Le ambulanze arrivano spesso a sirene spiegate",
          "I visitatori seguono orari precisi",
        ],
      },
      {
        word: "Deserto",
        clues: [
          "La sabbia si estende a perdita d'occhio",
          "Di giorno il caldo è intenso, di notte il freddo",
          "Le oasi sono rare ma preziose",
          "I cammelli lo attraversano da secoli",
          "Le dune cambiano forma con il vento",
          "La pioggia qui è un evento raro",
        ],
      },
      {
        word: "Stadio",
        clues: [
          "Le tifoserie cantano per novanta minuti",
          "Le gradinate si riempiono nei giorni di partita",
          "Il campo è al centro di tutto",
          "Un fischio d'inizio apre l'evento",
          "I cori accompagnano ogni azione",
          "I biglietti vanno spesso a ruba per le partite importanti",
        ],
      },
      {
        word: "Vulcano",
        clues: [
          "Può eruttare lava all'improvviso",
          "Ha un cratere sulla sommità",
          "Alcuni sono considerati ancora attivi",
          "La sua forma ricorda una montagna con la cima aperta",
          "Il magma ribolle nel suo interno",
          "Gli scienziati lo monitorano con attenzione",
        ],
      },
      {
        word: "Metropolitana",
        clues: [
          "Corre sottoterra nelle grandi città",
          "Bisogna convalidare il biglietto prima di salire",
          "È un modo veloce per evitare il traffico",
          "Le fermate si susseguono lungo la linea",
          "Le porte si aprono e chiudono automaticamente",
          "Nelle ore di punta è sempre affollata",
        ],
      },
      {
        word: "Castello",
        clues: [
          "Ha spesso torri e mura imponenti",
          "Un tempo ci vivevano nobili e sovrani",
          "Il fossato lo proteggeva dai nemici",
          "Oggi molti si visitano come musei",
          "Le leggende parlano spesso di fantasmi al suo interno",
          "Si trova spesso in cima a una collina",
        ],
      },
      {
        word: "Foresta",
        clues: [
          "Gli alberi sono fittissimi qui dentro",
          "Ci si può perdere facilmente senza una mappa",
          "Gli animali selvatici la abitano",
          "La luce filtra appena tra le foglie",
          "I sentieri si intrecciano tra il verde",
          "È un polmone naturale per il pianeta",
        ],
      },
      {
        word: "Isola",
        clues: [
          "È completamente circondata dall'acqua",
          "Ci si arriva spesso in barca o traghetto",
          "Alcune sono disabitate e selvagge",
          "Il mare la isola dalla terraferma",
          "Molte diventano mete turistiche ambite",
          "Robinson Crusoe ne fece la sua casa forzata",
        ],
      },
    ],
  },
  {
    id: "professioni",
    label: "Professioni",
    emoji: "👷",
    words: [
      {
        word: "Medico",
        clues: [
          "Visita i pazienti per capire cosa non va",
          "Indossa spesso un camice bianco",
          "Ha studiato per molti anni prima di esercitare",
          "Prescrive le medicine quando serve",
          "Lavora spesso in ospedale o in uno studio",
          "Il suo giuramento porta il nome di un antico filosofo greco",
        ],
      },
      {
        word: "Insegnante",
        clues: [
          "Sta in piedi davanti alla classe ogni giorno",
          "Corregge i compiti a casa la sera",
          "Usa la lavagna per spiegare",
          "Prepara le verifiche per gli studenti",
          "Le vacanze estive sono lunghe per questo mestiere",
          "Trasmette conoscenza alle nuove generazioni",
        ],
      },
      {
        word: "Pompiere",
        clues: [
          "Interviene quando scoppia un incendio",
          "Guida un mezzo rosso con la sirena",
          "Usa una scala lunga per salire ai piani alti",
          "Salva le persone in pericolo",
          "Indossa un casco resistente al calore",
          "L'acqua è la sua arma principale",
        ],
      },
      {
        word: "Cuoco",
        clues: [
          "Lavora tra pentole e fornelli",
          "Indossa un cappello alto e bianco",
          "Crea i piatti che poi arrivano in tavola",
          "Un ristorante non potrebbe funzionare senza di lui",
          "Assaggia spesso ciò che prepara",
          "I coltelli sono i suoi strumenti principali",
        ],
      },
      {
        word: "Astronauta",
        clues: [
          "Indossa una tuta speciale per sopravvivere fuori dall'atmosfera",
          "Viaggia a bordo di un razzo",
          "Fluttua senza peso quando è in orbita",
          "Si allena per anni prima della missione",
          "Osserva la Terra da lontanissimo",
          "La stazione spaziale è la sua casa temporanea",
        ],
      },
      {
        word: "Pilota",
        clues: [
          "Sta seduto in cabina di comando durante il volo",
          "Ha superato addestramenti severissimi",
          "Comunica con la torre di controllo",
          "Decolla e atterra con grande precisione",
          "Indossa spesso un'uniforme elegante",
          "I passeggeri si fidano completamente di lui",
        ],
      },
      {
        word: "Fotografo",
        clues: [
          "Cattura momenti attraverso un obiettivo",
          "Cerca sempre la luce migliore per uno scatto",
          "Ai matrimoni non manca mai",
          "Modifica le immagini al computer dopo lo scatto",
          "Porta con sé più obiettivi diversi",
          "Immortala ricordi che altrimenti svanirebbero",
        ],
      },
      {
        word: "Idraulico",
        clues: [
          "Ripara i tubi quando perdono acqua",
          "Interviene quando il lavandino si intasa",
          "Porta con sé una cassetta di attrezzi pesante",
          "Lavora spesso sotto i lavelli",
          "Le chiavi inglesi sono tra i suoi strumenti",
          "Si chiama in emergenza quando l'acqua allaga casa",
        ],
      },
      {
        word: "Giornalista",
        clues: [
          "Racconta i fatti del giorno al pubblico",
          "Scrive articoli o li racconta davanti a una telecamera",
          "Fa domande scomode durante le interviste",
          "Rincorre le notizie prima degli altri",
          "Un taccuino è spesso il suo compagno di lavoro",
          "La libertà di stampa è il suo pilastro",
        ],
      },
      {
        word: "Barista",
        clues: [
          "Prepara caffè e cocktail dietro un bancone",
          "Conosce a memoria gli ordini abituali dei clienti",
          "La macchina espresso è il suo strumento principale",
          "Lavora spesso in piedi per ore",
          "Un bar senza di lui non potrebbe aprire",
          "Sa fare disegni con la schiuma del latte",
        ],
      },
      {
        word: "Detective",
        clues: [
          "Segue indizi per risolvere un mistero",
          "Osserva dettagli che agli altri sfuggono",
          "Indaga su casi complicati",
          "Spesso lavora con una lente d'ingrandimento",
          "I romanzi gialli lo raccontano spesso come protagonista",
          "Interroga sospetti per scoprire la verità",
        ],
      },
      {
        word: "Sarto",
        clues: [
          "Cuce abiti su misura per i clienti",
          "Usa ago, filo e un metro da sarta",
          "Prende le misure con grande precisione",
          "Ripara vestiti strappati o troppo larghi",
          "Lavora spesso su una macchina da cucire",
          "Un abito da sposa passa spesso dalle sue mani",
        ],
      },
    ],
  },
  {
    id: "sport",
    label: "Sport",
    emoji: "⚽",
    words: [
      {
        word: "Calcio",
        clues: [
          "Si gioca con un pallone rotondo usando soprattutto i piedi",
          "Due squadre da undici giocatori si sfidano",
          "Il portiere è l'unico che può usare le mani",
          "I mondiali sono il suo evento più seguito",
          "Un rigore può decidere una partita intera",
          "Le tifoserie riempiono gli stadi ogni weekend",
        ],
      },
      {
        word: "Tennis",
        clues: [
          "Si gioca con una racchetta su un campo diviso da una rete",
          "Wimbledon è uno dei suoi tornei più prestigiosi",
          "Il punteggio si conta in modo insolito, tipo quindici e trenta",
          "Può essere giocato in singolo o in doppio",
          "La pallina deve rimbalzare nel campo avversario",
          "Un match può durare diverse ore",
        ],
      },
      {
        word: "Nuoto",
        clues: [
          "Si pratica in acqua, spesso in una piscina",
          "Lo stile libero è una delle tecniche più veloci",
          "Le Olimpiadi assegnano molte medaglie in questa disciplina",
          "Serve saper trattenere il respiro sott'acqua",
          "Il costume aderente riduce la resistenza in acqua",
          "Gli allenamenti iniziano spesso da bambini piccoli",
        ],
      },
      {
        word: "Pallavolo",
        clues: [
          "Si gioca con una palla che non deve toccare terra",
          "Sei giocatori per squadra si alternano in rotazione",
          "La rete divide il campo in due metà",
          "La schiacciata è un colpo spettacolare",
          "Il muro serve a bloccare gli attacchi avversari",
          "Si gioca spesso anche sulla sabbia",
        ],
      },
      {
        word: "Sci",
        clues: [
          "Si scende lungo un pendio innevato con due assi ai piedi",
          "Gli impianti di risalita portano in cima alla pista",
          "I bastoncini aiutano a mantenere l'equilibrio",
          "Lo slalom richiede curve strette tra i paletti",
          "Le Alpi sono una meta classica per praticarlo",
          "Serve un abbigliamento pesante e impermeabile",
        ],
      },
      {
        word: "Boxe",
        clues: [
          "Due atleti si sfidano indossando guantoni imbottiti",
          "L'incontro si divide in round cronometrati",
          "Il ring è delimitato da corde",
          "Un pugno ben assestato può mettere KO l'avversario",
          "L'arbitro può fermare tutto se vede troppo pericolo",
          "Muhammad Ali ne è una leggenda assoluta",
        ],
      },
      {
        word: "Ciclismo",
        clues: [
          "Si pedala su due ruote per lunghe distanze",
          "Il Giro d'Italia è una delle sue gare più famose",
          "La maglia rosa premia chi è in testa alla classifica",
          "Le salite in montagna mettono a dura prova le gambe",
          "Il casco protegge la testa in caso di caduta",
          "Le squadre si aiutano a vicenda durante la gara",
        ],
      },
      {
        word: "Scherma",
        clues: [
          "Si combatte con una lama sportiva chiamata fioretto o sciabola",
          "Una maschera protegge il viso durante l'assalto",
          "I punti si segnano toccando l'avversario nella zona valida",
          "È tra le discipline olimpiche più antiche",
          "La pedana delimita lo spazio del combattimento",
          "Richiede riflessi fulminei e grande precisione",
        ],
      },
      {
        word: "Basket",
        clues: [
          "Si segna facendo passare la palla in un canestro sopraelevato",
          "Cinque giocatori per squadra scendono in campo",
          "Il palleggio è fondamentale per muoversi con la palla",
          "La schiacciata entusiasma sempre il pubblico",
          "L'NBA è il campionato più famoso al mondo",
          "Un tiro da lontano vale più punti",
        ],
      },
      {
        word: "Golf",
        clues: [
          "Si colpisce una pallina con una mazza verso una buca",
          "Il campo si estende su prati enormi e curati",
          "Meno colpi si fanno, meglio è",
          "I giocatori indossano spesso abbigliamento elegante",
          "Il bunker di sabbia è un ostacolo temuto",
          "Serve grande concentrazione e silenzio durante il colpo",
        ],
      },
      {
        word: "Arrampicata",
        clues: [
          "Si sale lungo una parete usando mani e piedi",
          "Un'imbracatura e una corda garantiscono sicurezza",
          "Le prese colorate indicano il percorso da seguire",
          "Può essere praticata su roccia naturale o pareti artificiali",
          "Il magnesio sulle mani migliora la presa",
          "Richiede forza nelle braccia e strategia mentale",
        ],
      },
      {
        word: "Surf",
        clues: [
          "Si cavalca un'onda in piedi su una tavola",
          "Le spiagge con buone onde attirano gli appassionati",
          "L'equilibrio è tutto per non cadere in acqua",
          "La muta protegge dal freddo dell'oceano",
          "Hawaii è considerata una delle sue patrie",
          "Aspettare l'onda giusta richiede molta pazienza",
        ],
      },
    ],
  },
  {
    id: "animali",
    label: "Animali",
    emoji: "🐾",
    words: [
      {
        word: "Leone",
        clues: [
          "È considerato il re della savana",
          "Vive in gruppi chiamati branchi",
          "Il maschio ha una folta criniera",
          "Il suo ruggito si sente da lontano",
          "Caccia spesso in squadra con le femmine",
          "È uno dei simboli più usati negli stemmi araldici",
        ],
      },
      {
        word: "Delfino",
        clues: [
          "Vive nell'oceano ma è un mammifero, non un pesce",
          "È considerato tra gli animali più intelligenti del mare",
          "Comunica con una serie di suoni e fischi",
          "Ama saltare fuori dall'acqua",
          "Nuota spesso in gruppo con i suoi simili",
          "Molti acquari lo hanno reso una star degli spettacoli",
        ],
      },
      {
        word: "Pinguino",
        clues: [
          "Non riesce a volare nonostante abbia le ali",
          "Vive in climi molto freddi",
          "Cammina con un'andatura dondolante e buffa",
          "È un ottimo nuotatore sott'acqua",
          "Ha un piumaggio bianco e nero elegante",
          "I genitori si alternano per covare l'uovo",
        ],
      },
      {
        word: "Ragno",
        clues: [
          "Ha otto zampe, non sei come gli insetti",
          "Costruisce trappole di seta per catturare prede",
          "Molte persone ne hanno una paura irrazionale",
          "Alcune specie sono velenose",
          "Tesse la sua tela con grande pazienza",
          "Un supereroe molto famoso prende ispirazione da lui",
        ],
      },
      {
        word: "Elefante",
        clues: [
          "È uno dei più grandi animali terrestri",
          "Ha una lunga proboscide multifunzione",
          "Le sue zanne sono fatte d'avorio",
          "Ha una memoria proverbiale, difficile da eguagliare",
          "Vive in gruppi familiari guidati da una femmina anziana",
          "Le sue grandi orecchie lo aiutano a rinfrescarsi",
        ],
      },
      {
        word: "Gufo",
        clues: [
          "Caccia soprattutto di notte",
          "Può ruotare la testa quasi all'indietro",
          "È spesso associato alla saggezza nella cultura popolare",
          "Il suo verso risuona nel buio del bosco",
          "Ha una vista eccezionale al buio",
          "Vola in modo silenzioso grazie alle sue piume speciali",
        ],
      },
      {
        word: "Squalo",
        clues: [
          "Nuota nei mari incutendo spesso timore",
          "Ha diverse file di denti affilatissimi",
          "La sua pinna dorsale spunta a volte fuori dall'acqua",
          "È un predatore che esiste da milioni di anni",
          "Un film famoso lo ha reso terrificante al grande pubblico",
          "Alcune specie sono in realtà pacifiche e innocue",
        ],
      },
      {
        word: "Farfalla",
        clues: [
          "Nasce da un bruco dopo una trasformazione",
          "Ha ali colorate e delicate",
          "Si posa spesso sui fiori",
          "Vola con movimenti leggeri e imprevedibili",
          "La metamorfosi è la fase chiave della sua vita",
          "Molte specie migrano per lunghissime distanze",
        ],
      },
      {
        word: "Canguro",
        clues: [
          "Si muove a grandi balzi con le zampe posteriori",
          "Porta i suoi piccoli in un marsupio",
          "Vive principalmente in Australia",
          "Ha una coda potente che usa per l'equilibrio",
          "I maschi a volte si sfidano a colpi di zampe",
          "È diventato un simbolo nazionale del suo continente",
        ],
      },
      {
        word: "Polpo",
        clues: [
          "Ha otto tentacoli pieni di ventose",
          "Può cambiare colore per mimetizzarsi",
          "Vive sui fondali marini",
          "È considerato incredibilmente intelligente per un invertebrato",
          "Riesce a passare attraverso spazi strettissimi",
          "Rilascia inchiostro quando si sente minacciato",
        ],
      },
      {
        word: "Cammello",
        clues: [
          "Attraversa il deserto per lunghi tratti senza bere",
          "Ha una o due gobbe sulla schiena",
          "Le gobbe immagazzinano grasso, non acqua",
          "È chiamato la nave del deserto",
          "Ha ciglia lunghissime che lo proteggono dalla sabbia",
          "Da secoli accompagna le carovane commerciali",
        ],
      },
      {
        word: "Pipistrello",
        clues: [
          "Vola solo di notte",
          "Dorme appeso a testa in giù",
          "Si orienta usando gli ultrasuoni",
          "È l'unico mammifero capace di volare veramente",
          "Vive spesso in grotte buie",
          "Viene associato spesso a vampiri e Halloween",
        ],
      },
    ],
  },
  {
    id: "oggetti",
    label: "Oggetti quotidiani",
    emoji: "🧦",
    words: [
      {
        word: "Ombrello",
        clues: [
          "Si apre quando inizia a piovere",
          "Ha una struttura di stecche che si allargano",
          "Il vento a volte lo rovescia",
          "Lo si dimentica spesso in giro",
          "Ripara dalla pioggia mentre si cammina",
          "Portarne uno chiuso al chiuso porta sfortuna secondo una superstizione",
        ],
      },
      {
        word: "Occhiali",
        clues: [
          "Aiutano a vedere meglio chi ha problemi di vista",
          "Si appoggiano sul naso e dietro le orecchie",
          "Esistono anche versioni da sole per proteggere gli occhi",
          "L'ottico li prescrive dopo una visita",
          "Si puliscono spesso con un panno morbido",
          "Alcuni li indossano solo per leggere",
        ],
      },
      {
        word: "Zaino",
        clues: [
          "Si porta sulle spalle grazie a due cinghie",
          "Gli studenti lo riempiono di libri e quaderni",
          "Ha spesso più tasche per organizzare le cose",
          "È utile anche per viaggi ed escursioni",
          "Lo si indossa comodamente sulla schiena",
          "Un buon modello distribuisce bene il peso",
        ],
      },
      {
        word: "Specchio",
        clues: [
          "Riflette l'immagine di chi si guarda",
          "Si usa spesso al mattino per prepararsi",
          "Una leggenda dice che romperlo porti sette anni di sfortuna",
          "In bagno non manca mai",
          "Aiuta a controllare il proprio aspetto",
          "Alcuni sono decorati con cornici elaborate",
        ],
      },
      {
        word: "Chiave",
        clues: [
          "Serve ad aprire porte e cancelli",
          "Si infila in una serratura per girarla",
          "Perderla può creare non pochi problemi",
          "Spesso si tiene in un mazzo insieme ad altre",
          "Un fabbro può farne una copia",
          "È piccola ma indispensabile ogni giorno",
        ],
      },
      {
        word: "Candela",
        clues: [
          "Si accende con un fiammifero o un accendino",
          "La cera si scioglie lentamente mentre brucia",
          "Sulle torte di compleanno se ne mettono diverse",
          "Crea un'atmosfera calda e romantica",
          "Il suo stoppino va acceso con cura",
          "Utile quando manca la corrente elettrica",
        ],
      },
      {
        word: "Forbici",
        clues: [
          "Hanno due lame che si incrociano per tagliare",
          "Servono per tagliare carta, stoffa o capelli",
          "Si tengono con pollice e altre dita in due anelli",
          "Un parrucchiere le usa tutto il giorno",
          "Vanno maneggiate con attenzione dai più piccoli",
          "Esistono versioni specifiche per ogni materiale da tagliare",
        ],
      },
      {
        word: "Orologio",
        clues: [
          "Indica l'ora che scorre durante la giornata",
          "Si indossa spesso al polso",
          "Le lancette si muovono in senso orario",
          "Alcuni modelli sono digitali, altri analogici",
          "Bisogna caricarlo o cambiargli la pila di tanto in tanto",
          "Un buon modello può diventare anche un gioiello prezioso",
        ],
      },
      {
        word: "Valigia",
        clues: [
          "Si riempie di vestiti prima di un viaggio",
          "Ha rotelle per essere trascinata più facilmente",
          "In aeroporto viene spesso pesata al check-in",
          "Si chiude con cerniere o fibbie robuste",
          "Un'etichetta con il nome evita che vada persa",
          "Tornare da un viaggio significa disfarla di nuovo",
        ],
      },
      {
        word: "Bussola",
        clues: [
          "Indica sempre il nord grazie a un ago magnetico",
          "È indispensabile per chi si perde nei boschi",
          "Gli esploratori la portavano sempre con sé",
          "Ha un quadrante con i punti cardinali",
          "Funziona anche senza batterie o elettricità",
          "Un'antica invenzione ancora oggi molto utile",
        ],
      },
      {
        word: "Lente d'ingrandimento",
        clues: [
          "Ingrandisce i dettagli più piccoli",
          "I detective la usano spesso nei film",
          "Aiuta a leggere caratteri molto piccoli",
          "Concentra i raggi del sole se puntata su un foglio",
          "Ha un manico e un vetro curvo",
          "Utile per osservare insetti o francobolli da vicino",
        ],
      },
      {
        word: "Termometro",
        clues: [
          "Misura la temperatura corporea quando non ci si sente bene",
          "Il mercurio è stato sostituito da versioni digitali più sicure",
          "Si mette sotto l'ascella o in bocca",
          "Segnala se c'è la febbre",
          "Esiste anche per misurare la temperatura dell'aria esterna",
          "Un numero alto preoccupa sempre i genitori",
        ],
      },
    ],
  },
  {
    id: "tecnologia",
    label: "Tecnologia",
    emoji: "💻",
    words: [
      {
        word: "Smartphone",
        clues: [
          "Sta comodamente in tasca",
          "Ha sostituito fotocamere, agende e molto altro",
          "Si ricarica ogni giorno con un cavo",
          "Le app occupano gran parte del suo schermo",
          "Molti non riescono a stare senza per più di un'ora",
          "Le notifiche interrompono di continuo chi lo possiede",
        ],
      },
      {
        word: "Robot",
        clues: [
          "Esegue compiti spesso ripetitivi al posto dell'uomo",
          "La fantascienza lo immagina spesso capace di pensare da solo",
          "Nelle fabbriche assembla pezzi con grande precisione",
          "Può essere programmato per svolgere task diversi",
          "Alcuni modelli assomigliano vagamente a esseri umani",
          "I sensori gli permettono di percepire l'ambiente",
        ],
      },
      {
        word: "Drone",
        clues: [
          "Vola senza pilota a bordo",
          "Viene controllato a distanza con un telecomando",
          "Ha spesso una telecamera per riprese dall'alto",
          "Le eliche lo mantengono in volo",
          "Viene usato anche per consegne sperimentali",
          "In molte zone servono permessi per farlo volare",
        ],
      },
      {
        word: "Router",
        clues: [
          "Distribuisce la connessione internet in tutta la casa",
          "Le sue lucine lampeggiano quando è acceso",
          "Spegnerlo e riaccenderlo risolve molti problemi di rete",
          "Trasmette il segnale Wi-Fi agli altri dispositivi",
          "Di solito sta nascosto in un angolo di casa",
          "Senza di lui lo streaming si blocca facilmente",
        ],
      },
      {
        word: "Stampante 3D",
        clues: [
          "Costruisce oggetti aggiungendo materiale strato dopo strato",
          "Usa filamenti di plastica che si sciolgono con il calore",
          "Può creare pezzi di ricambio su misura",
          "Il progetto digitale guida ogni suo movimento",
          "Ci mette spesso ore per completare un oggetto",
          "Ha rivoluzionato la prototipazione rapida",
        ],
      },
      {
        word: "Auricolari",
        clues: [
          "Si infilano nelle orecchie per ascoltare musica",
          "Molti modelli oggi sono senza fili",
          "Isolano dai rumori esterni durante l'ascolto",
          "Si ricaricano in un piccolo astuccio",
          "Sono comodi per fare chiamate senza usare le mani",
          "Facile perderne uno mentre si cammina",
        ],
      },
      {
        word: "Videocamera",
        clues: [
          "Registra immagini in movimento",
          "I professionisti la usano per girare film o video",
          "Ha un obiettivo che regola la messa a fuoco",
          "Serve una scheda di memoria per salvare i filmati",
          "Molti smartphone ne integrano una ormai eccellente",
          "Il treppiede la mantiene stabile durante le riprese",
        ],
      },
      {
        word: "Console",
        clues: [
          "Si collega alla televisione per giocare",
          "I controller sono indispensabili per usarla",
          "Molti bambini la desiderano per Natale",
          "Il gioco si inserisce tramite disco o file digitale",
          "Permette di giocare online con amici lontani",
          "Ogni generazione porta grafica sempre più avanzata",
        ],
      },
      {
        word: "Tastiera",
        clues: [
          "Serve per scrivere su un computer",
          "Ha tasti disposti secondo uno schema chiamato QWERTY",
          "Alcuni modelli fanno un clic meccanico soddisfacente",
          "Senza di lei digitare sarebbe molto più difficile",
          "I gamer preferiscono spesso modelli retroilluminati",
          "La barra spaziatrice è il tasto più lungo",
        ],
      },
      {
        word: "Realtà virtuale",
        clues: [
          "Immerge chi la indossa in un mondo digitale",
          "Si sperimenta con un visore sugli occhi",
          "Fa sembrare reale un ambiente che non esiste",
          "Viene usata anche per addestramenti e simulazioni",
          "Muovendo la testa cambia il punto di vista",
          "Alcuni provano un leggero senso di vertigine usandola",
        ],
      },
      {
        word: "Batteria",
        clues: [
          "Fornisce energia a dispositivi portatili",
          "Si scarica con l'uso e va ricaricata",
          "Con il tempo perde un po' della sua capacità",
          "È indispensabile per far funzionare uno smartphone",
          "Esistono modelli usa e getta e ricaricabili",
          "Il simbolo con una percentuale ne indica il livello",
        ],
      },
      {
        word: "Satellite",
        clues: [
          "Orbita attorno alla Terra a grande altezza",
          "Trasmette segnali usati anche dal GPS",
          "Alcuni servono per le trasmissioni televisive",
          "Viene lanciato nello spazio con un razzo",
          "Osserva il pianeta dall'alto per raccogliere dati",
          "Non ha equipaggio umano a bordo",
        ],
      },
    ],
  },
  {
    id: "eventi",
    label: "Feste & Eventi",
    emoji: "🎉",
    words: [
      {
        word: "Carnevale",
        clues: [
          "Si indossano maschere e costumi colorati",
          "Le sfilate di carri allegorici animano le strade",
          "I coriandoli riempiono l'aria durante i festeggiamenti",
          "Venezia è famosa in tutto il mondo per questa festa",
          "I bambini adorano travestirsi in questo periodo",
          "Precede tradizionalmente un periodo di digiuno religioso",
        ],
      },
      {
        word: "Matrimonio",
        clues: [
          "Due persone si promettono amore eterno davanti a testimoni",
          "La sposa indossa spesso un abito bianco",
          "Gli invitati lanciano il riso agli sposi",
          "Una torta a più piani chiude il banchetto",
          "Gli anelli vengono scambiati durante la cerimonia",
          "Il valzer degli sposi apre le danze",
        ],
      },
      {
        word: "Capodanno",
        clues: [
          "Si festeggia il passaggio da un anno all'altro",
          "I fuochi d'artificio illuminano il cielo a mezzanotte",
          "Molti fanno propositi che spesso non mantengono",
          "Un countdown scandisce gli ultimi secondi dell'anno",
          "Si brinda con lo spumante appena scocca la mezzanotte",
          "In alcune tradizioni si mangiano le lenticchie per portafortuna",
        ],
      },
      {
        word: "Concerto",
        clues: [
          "Un artista si esibisce dal vivo davanti al pubblico",
          "I fan cantano insieme le canzoni più famose",
          "Le luci e gli effetti scenici accompagnano lo show",
          "I biglietti vanno spesso esauriti in pochi minuti",
          "Il palco è il centro di tutta l'attenzione",
          "Molti registrano momenti dell'evento con lo smartphone",
        ],
      },
      {
        word: "Compleanno",
        clues: [
          "Si festeggia ogni anno lo stesso giorno",
          "Le candeline sulla torta si spengono con un desiderio",
          "Gli amici portano regali per l'occasione",
          "Si canta una canzone tradizionale prima di tagliare la torta",
          "I palloncini colorati decorano spesso la sala",
          "Segna il passaggio a un'età nuova",
        ],
      },
      {
        word: "Halloween",
        clues: [
          "Le zucche intagliate decorano le case in questo periodo",
          "I bambini bussano di porta in porta chiedendo dolcetti",
          "I costumi spaventosi sono protagonisti della serata",
          "Si festeggia negli ultimi giorni di ottobre",
          "Fantasmi e mostri sono i temi ricorrenti",
          "Dire una frase minacciosa scherzosa apre la richiesta di dolci",
        ],
      },
      {
        word: "Laurea",
        clues: [
          "Segna la fine di un lungo percorso di studi",
          "Si festeggia spesso con una corona di alloro in testa",
          "Una commissione valuta la tesi finale",
          "Amici e parenti festeggiano fuori dall'università",
          "Il classico regalo è spesso simbolico e scherzoso",
          "Apre le porte al mondo del lavoro",
        ],
      },
      {
        word: "Festival",
        clues: [
          "Riunisce artisti o appassionati per più giorni",
          "Può essere dedicato alla musica, al cinema o alla cultura",
          "Il pubblico si sposta tra più palchi o sale",
          "Spesso si svolge all'aperto in un'unica location",
          "I biglietti permettono l'accesso per l'intera durata",
          "Attira visitatori anche da molto lontano",
        ],
      },
      {
        word: "Sagra",
        clues: [
          "Celebra spesso un prodotto tipico locale",
          "Si tiene di solito in piazza durante l'estate",
          "Bancarelle di cibo tipico riempiono le strade",
          "È un'occasione per stare insieme in paese",
          "Musica dal vivo accompagna spesso la serata",
          "Molti la aspettano tutto l'anno per un piatto speciale",
        ],
      },
      {
        word: "Fuochi d'artificio",
        clues: [
          "Illuminano il cielo notturno con colori vivaci",
          "Accompagnano spesso la mezzanotte di Capodanno",
          "Il rumore forte spaventa a volte gli animali",
          "Vengono lanciati da un luogo sicuro e controllato",
          "Le forme che disegnano nel cielo stupiscono il pubblico",
          "Servono permessi speciali per essere accesi legalmente",
        ],
      },
      {
        word: "Presepe",
        clues: [
          "Rappresenta una scena natalizia tradizionale",
          "Napoli è famosa per la sua produzione artigianale",
          "Si allestisce solitamente durante le feste di dicembre",
          "Statuine in miniatura popolano la scena",
          "La capanna è l'elemento centrale della composizione",
          "Viene smontato dopo l'Epifania secondo la tradizione",
        ],
      },
      {
        word: "Palio",
        clues: [
          "Una corsa di cavalli molto sentita in una città toscana",
          "I diversi quartieri si sfidano rappresentati da una contrada",
          "Si corre in una piazza centrale trasformata in pista",
          "La vittoria porta enorme orgoglio al quartiere vincitore",
          "È una tradizione che dura da secoli",
          "Il fantino cavalca senza sella durante la gara",
        ],
      },
    ],
  },
  {
    id: "corpo",
    label: "Corpo umano",
    emoji: "🫀",
    words: [
      {
        word: "Cuore",
        clues: [
          "Pompa il sangue in tutto il corpo",
          "Batte senza sosta giorno e notte",
          "È simbolo universale dell'amore",
          "Uno stetoscopio ne ascolta il ritmo",
          "Un'emozione forte può farlo battere più veloce",
          "Ha quattro camere interne che si contraggono in sequenza",
        ],
      },
      {
        word: "Cervello",
        clues: [
          "Controlla tutti i pensieri e i movimenti del corpo",
          "È protetto dal cranio",
          "Elabora ogni informazione che arriva dai sensi",
          "I ricordi vengono immagazzinati proprio qui",
          "Consuma molta energia nonostante il suo peso ridotto",
          "È l'organo che rende possibile la coscienza",
        ],
      },
      {
        word: "Polmone",
        clues: [
          "Permette la respirazione dell'aria",
          "Se ne hanno due, uno per lato del petto",
          "Si riempie e si svuota a ogni respiro",
          "Il fumo può danneggiarlo gravemente nel tempo",
          "Scambia ossigeno e anidride carbonica con il sangue",
          "Un tuffo profondo mette alla prova la sua capacità",
        ],
      },
      {
        word: "Scheletro",
        clues: [
          "Dà struttura e sostegno a tutto il corpo",
          "È composto da più di duecento elementi ossei",
          "Protegge organi vitali come cuore e cervello",
          "Ad Halloween viene spesso usato come decorazione",
          "I muscoli si attaccano ad esso per muoversi",
          "Un radiologo lo osserva con una lastra",
        ],
      },
      {
        word: "Occhio",
        clues: [
          "Permette di vedere il mondo intorno a noi",
          "Ha una parte colorata chiamata iride",
          "Si chiude quando si ammicca o si dorme",
          "Le lacrime lo mantengono umido e pulito",
          "Un oculista lo controlla periodicamente",
          "Se ne hanno due, uno per lato del viso",
        ],
      },
      {
        word: "Sorriso",
        clues: [
          "Comunica gioia senza bisogno di parole",
          "Mostra spesso i denti quando è ampio",
          "È contagioso tra le persone",
          "I bambini piccoli lo regalano con grande facilità",
          "Un buon dentista aiuta a mantenerlo splendente",
          "Basta poco per farlo apparire su un volto triste",
        ],
      },
      {
        word: "Impronta digitale",
        clues: [
          "È unica per ogni persona al mondo",
          "Gli investigatori la cercano sulla scena di un crimine",
          "Molti smartphone la usano per sbloccare lo schermo",
          "Si trova sui polpastrelli delle dita",
          "Anche i gemelli identici non la condividono",
          "L'inchiostro veniva usato un tempo per rilevarla",
        ],
      },
      {
        word: "Voce",
        clues: [
          "Permette di parlare e cantare",
          "Cambia tono quando si è emozionati",
          "Un microfono la amplifica sul palco",
          "Le corde vocali vibrano per produrla",
          "Ognuno ha la sua, riconoscibile al telefono",
          "Un raffreddore può renderla più roca del solito",
        ],
      },
      {
        word: "Sistema immunitario",
        clues: [
          "Difende il corpo dalle malattie",
          "Si rafforza anche grazie ai vaccini",
          "Attacca virus e batteri che entrano nel corpo",
          "Quando è debole ci si ammala più facilmente",
          "I globuli bianchi ne sono protagonisti principali",
          "Il riposo aiuta a mantenerlo efficiente",
        ],
      },
      {
        word: "Battito cardiaco",
        clues: [
          "Accelera quando si fa attività fisica intensa",
          "Un dispositivo al polso oggi riesce a misurarlo",
          "Rallenta durante il sonno profondo",
          "Si può sentire appoggiando una mano al petto",
          "L'emozione di uno spavento lo fa impennare",
          "I medici lo controllano a ogni visita di routine",
        ],
      },
      {
        word: "Riflesso",
        clues: [
          "Il corpo reagisce prima ancora che ci si pensi",
          "Un martelletto dal medico ne testa la rapidità al ginocchio",
          "Toccare qualcosa di bollente lo attiva immediatamente",
          "È una risposta automatica e involontaria",
          "Gli atleti ne allenano la velocità",
          "Battere le palpebre quando arriva polvere è un esempio comune",
        ],
      },
      {
        word: "Respiro",
        clues: [
          "Si fa senza nemmeno pensarci per tutta la vita",
          "Trattenerlo a lungo diventa presto difficile",
          "Lo yoga insegna a controllarlo con calma",
          "Accelera quando si corre velocemente",
          "L'aria fredda lo rende visibile in inverno",
          "Un sospiro ne è una forma particolare",
        ],
      },
    ],
  },
  {
    id: "natura",
    label: "Natura & Fenomeni",
    emoji: "🌪️",
    words: [
      {
        word: "Temporale",
        clues: [
          "Il cielo si scurisce improvvisamente prima del suo arrivo",
          "Tuoni e fulmini lo accompagnano spesso",
          "La pioggia può cadere molto intensa durante il suo passaggio",
          "Molti si spaventano per il rumore improvviso che porta",
          "È più frequente nelle giornate calde d'estate",
          "Un ombrello da solo a volte non basta contro di lui",
        ],
      },
      {
        word: "Arcobaleno",
        clues: [
          "Appare spesso dopo la pioggia quando torna il sole",
          "Ha sette colori disposti in un arco nel cielo",
          "Una leggenda racconta di un tesoro alla sua fine",
          "È un fenomeno causato dalla rifrazione della luce",
          "Scompare rapidamente non appena le condizioni cambiano",
          "I bambini lo disegnano spesso nei loro temi",
        ],
      },
      {
        word: "Terremoto",
        clues: [
          "Fa tremare improvvisamente il terreno",
          "I sismologi lo misurano con un'apposita scala",
          "Può causare gravi danni agli edifici",
          "L'epicentro indica il punto di origine della scossa",
          "Le placche della Terra ne sono spesso la causa",
          "Le scosse di assestamento possono seguirlo per giorni",
        ],
      },
      {
        word: "Marea",
        clues: [
          "Fa alzare e abbassare periodicamente il livello del mare",
          "La luna esercita un'influenza fondamentale su di essa",
          "Cambia nell'arco di poche ore lungo la costa",
          "I pescatori ne studiano attentamente gli orari",
          "Può scoprire ampie zone di spiaggia quando si ritira",
          "Alta o bassa, scandisce la vita costiera",
        ],
      },
      {
        word: "Eclissi",
        clues: [
          "Un corpo celeste ne oscura temporaneamente un altro",
          "Può essere di sole o di luna",
          "Va osservata con occhiali protettivi speciali",
          "Il cielo si scurisce insolitamente in pieno giorno durante quella solare",
          "È un evento astronomico atteso da appassionati in tutto il mondo",
          "Gli antichi la consideravano spesso un presagio",
        ],
      },
      {
        word: "Valanga",
        clues: [
          "Grandi masse di neve scivolano improvvisamente a valle",
          "Gli sciatori fuoripista devono prestare molta attenzione al rischio",
          "Un rumore sordo può precederne la caduta",
          "I soccorritori usano cani specializzati per cercare eventuali dispersi",
          "Il peso della neve accumulata ne è spesso la causa scatenante",
          "Le montagne innevate ne nascondono sempre il pericolo",
        ],
      },
      {
        word: "Aurora boreale",
        clues: [
          "Illumina il cielo notturno con luci verdi e violacee",
          "È visibile soprattutto nelle regioni artiche",
          "Le particelle solari che colpiscono l'atmosfera la generano",
          "Molti viaggiano fino al circolo polare per ammirarla",
          "Danza nel cielo con movimenti ondulati",
          "Le notti limpide e buie ne favoriscono l'osservazione",
        ],
      },
      {
        word: "Nebbia",
        clues: [
          "Riduce drammaticamente la visibilità sulla strada",
          "È composta da minuscole goccioline d'acqua sospese nell'aria",
          "I fari delle auto vengono accesi appositamente per attraversarla",
          "Le mattine autunnali ne sono spesso avvolte",
          "Si dirada man mano che il sole scalda l'aria",
          "Rende tutto intorno più silenzioso e ovattato",
        ],
      },
      {
        word: "Tornado",
        clues: [
          "Un vortice d'aria fortissimo che tocca terra",
          "Può sollevare oggetti pesanti come se fossero piume",
          "Gli Stati Uniti centrali ne registrano moltissimi ogni anno",
          "Ha una forma caratteristica a imbuto",
          "I rifugi antitornado proteggono la popolazione durante il pericolo",
          "Si forma spesso da un violento temporale",
        ],
      },
      {
        word: "Corrente marina",
        clues: [
          "Muove enormi masse d'acqua attraverso gli oceani",
          "Può essere calda o fredda a seconda del percorso",
          "Influenza il clima delle coste che attraversa",
          "I naviganti la sfruttano da secoli per viaggiare più veloci",
          "Alcune specie marine la seguono nelle loro migrazioni",
          "È invisibile ma potentissima sott'acqua",
        ],
      },
      {
        word: "Brina",
        clues: [
          "Ricopre i prati di bianco nelle mattine più fredde",
          "Si forma quando l'umidità ghiaccia sulle superfici",
          "Scompare rapidamente appena il sole scalda l'aria",
          "Rende scivolosi i vetri delle auto al mattino",
          "È tipica delle albe d'autunno e d'inverno",
          "I fili d'erba sembrano cristallizzati quando ne sono coperti",
        ],
      },
      {
        word: "Vulcano attivo",
        clues: [
          "Può eruttare lava e cenere in qualsiasi momento",
          "Gli scienziati lo monitorano con strumenti sofisticati",
          "Le popolazioni vicine vivono con il rischio costante",
          "Il fumo che esce dal cratere ne segnala l'attività",
          "Un'eruzione può costringere all'evacuazione di interi paesi",
          "La sua energia proviene dalle profondità della Terra",
        ],
      },
    ],
  },
];

export function pickRandomWord(categoryId: string | null): { category: WordCategory; entry: WordEntry } {
  const pool = categoryId
    ? WORD_CATEGORIES.filter((c) => c.id === categoryId)
    : WORD_CATEGORIES;
  const category = pool[Math.floor(Math.random() * pool.length)];
  const entry = category.words[Math.floor(Math.random() * category.words.length)];
  return { category, entry };
}
