import Anthropic from "@anthropic-ai/sdk";

const MODEL = "claude-haiku-4-5-20251001";
const API_KEY_STORAGE_KEY = "impostore.anthropicApiKey";

export function saveApiKey(key: string) {
  localStorage.setItem(API_KEY_STORAGE_KEY, key);
}

export function loadApiKey(): string {
  return localStorage.getItem(API_KEY_STORAGE_KEY) ?? "";
}

export function clearApiKey() {
  localStorage.removeItem(API_KEY_STORAGE_KEY);
}

function getClient(apiKey: string): Anthropic {
  return new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
}

async function ask(apiKey: string, system: string, user: string, maxTokens = 100): Promise<string> {
  const client = getClient(apiKey);
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    system,
    messages: [{ role: "user", content: user }],
  });
  const block = response.content[0];
  if (block && block.type === "text") {
    return block.text.trim().replace(/^["“]|["”]$/g, "");
  }
  return "";
}

export async function testApiKey(apiKey: string): Promise<boolean> {
  try {
    const client = getClient(apiKey);
    await client.messages.create({
      model: MODEL,
      max_tokens: 4,
      messages: [{ role: "user", content: "ciao" }],
    });
    return true;
  } catch {
    return false;
  }
}

interface CluePromptContext {
  apiKey: string;
  botName: string;
  categoryLabel: string;
  previousClues: { playerName: string; text: string }[];
}

export async function generateCrewClue(
  ctx: CluePromptContext & { word: string },
): Promise<string> {
  const historyText = ctx.previousClues.length
    ? ctx.previousClues.map((c) => `${c.playerName}: "${c.text}"`).join("\n")
    : "(sei il primo a parlare in questo turno)";

  const system = `Sei ${ctx.botName}, un giocatore in una partita del gioco party "Impostore" (simile a Spyfall/Mafia).
La parola segreta di questo turno è: "${ctx.word}" (categoria: ${ctx.categoryLabel}).
Il tuo compito: dare UN SOLO breve indizio (massimo 8 parole) collegato alla parola, per dimostrare agli altri che la conosci, senza rivelarla apertamente.

Regole di difficoltà (fondamentali):
- NON troppo ovvio: non usare la parola stessa, sinonimi diretti o rime evidenti.
- NON troppo astratto o criptico: l'indizio deve restare comprensibile e chiaramente collegato al tema per chi conosce già la parola.
- Non ripetere concetti già usati dagli altri giocatori in questo turno.
- Rispondi SOLO con l'indizio, senza virgolette, senza premesse, senza spiegazioni.

Indizi già dati in questo turno:
${historyText}`;

  const text = await ask(ctx.apiKey, system, "Genera il tuo indizio ora.", 40);
  return text || "Non saprei come descriverlo...";
}

export async function generateImpostorClue(
  ctx: CluePromptContext,
): Promise<string> {
  const historyText = ctx.previousClues.length
    ? ctx.previousClues.map((c) => `${c.playerName}: "${c.text}"`).join("\n")
    : "(nessun indizio ancora disponibile)";

  const system = `Sei ${ctx.botName}, un giocatore IMPOSTORE nel gioco party "Impostore" (simile a Spyfall/Mafia).
NON conosci la parola segreta. Sai solo che la categoria è "${ctx.categoryLabel}".
Gli altri giocatori hanno già dato questi indizi in questo turno:
${historyText}

Il tuo compito: inventare UN SOLO indizio breve (massimo 8 parole) che suoni plausibile e coerente con il tema suggerito dagli indizi altrui, per mimetizzarti e non farti scoprire come impostore.

Regole:
- Non essere troppo generico o vago (risulteresti sospetto).
- Non essere troppo specifico su un dettaglio che potresti sbagliare completamente.
- Cerca di dedurre il tema generale dagli indizi altrui e resta plausibile rispetto ad essi.
- Rispondi SOLO con l'indizio, senza virgolette, senza premesse, senza spiegazioni.`;

  const text = await ask(ctx.apiKey, system, "Genera il tuo indizio ora.", 40);
  return text || "È qualcosa che conosciamo tutti bene.";
}

interface VoteContext {
  apiKey: string;
  voterName: string;
  voterIsImpostor: boolean;
  clues: { playerName: string; text: string }[];
  candidateNames: string[];
}

export async function generateBotVote(
  ctx: VoteContext,
): Promise<{ targetName: string; reason: string }> {
  const cluesText = ctx.clues.map((c) => `${c.playerName}: "${c.text}"`).join("\n");
  const roleNote = ctx.voterIsImpostor
    ? "Tu sei un impostore: non conosci la parola segreta, quindi finge di ragionare come un giocatore normale e cerca di indirizzare i sospetti su qualcun altro (mai su te stesso), per non farti scoprire."
    : "Tu conosci la parola segreta: cerca di individuare chi ha dato l'indizio meno coerente o più vago rispetto agli altri, come farebbe un vero sospetto impostore.";

  const system = `Sei ${ctx.voterName}, un giocatore nel gioco party "Impostore".
${roleNote}

Indizi dati in questo turno da ciascun giocatore:
${cluesText}

Giocatori votabili: ${ctx.candidateNames.join(", ")} (non puoi votare te stesso).

Rispondi SOLO con un oggetto JSON valido, nient'altro, in questo formato esatto:
{"targetName": "<uno tra i giocatori votabili>", "reason": "<motivazione breve in una frase>"}`;

  const text = await ask(ctx.apiKey, system, "Vota ora.", 120);
  try {
    const match = text.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(match ? match[0] : text);
    if (typeof parsed.targetName === "string" && ctx.candidateNames.includes(parsed.targetName)) {
      return { targetName: parsed.targetName, reason: parsed.reason ?? "" };
    }
  } catch {
    // fall through to random fallback below
  }
  const fallback = ctx.candidateNames[Math.floor(Math.random() * ctx.candidateNames.length)];
  return { targetName: fallback, reason: "Non era del tutto convincente." };
}
