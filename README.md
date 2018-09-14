# :skull: Galgen

## Om prosjektet

Galgen, kort for gallerigenerator er et system som kombinerer forskjellige mediaressurser for å lage et slags interaktivt kunstverk. De genererte kunstverkene gir ikke særlig mye mening; kunsten ligger i surrealiteten i de resulterende kunstverkene. Vi har antatt at dette er greit, siden formålet med prosjektet er bare å implemenetere dynamisk funksjonalitet.

## Teknologi

Dette prosjektet er en moderne React-applikasjon. Prosjektet er satt opp med `create-react-app` og dette brukes for å starte samt bygge prosjektet med henholdsvis `npm start` og `npm run-script build`. Vi har skrevet koden i ES6 og alle komponenter er implementert enten med klasser eller med arrow functions der det er mulig. Bilder og tekst lastes dynamisk inn med fetch den første gangen de skal vises og lagres lokalt slik at de ikke trenger å lastes på nytt.

## Struktur

Vi har fulgt en relativt standard komponentbasert mappestruktur. Mesteparten av koden ligger i mappa `src`. Her har vi 4 mapper som inneholder forskjellige komponenter og ressurser for disse komponentene.

- `ArtDisplay` er selve kunstverket, hvor bildet og teksten vises og musikken spilles i bakgrunnen. Her har komponentet `ArtDisplay` som ligger i filen `index.js` som er komponentet som håndterer data-loading, samt komponentet `ArtDisplayView` som er et såkalt pure component som viser denne informasjonen. Vi har altså separert komponentet fra container-komponentet her.
- `ArtPicker` er et sett med tabs som lar brukeren velge hvilket av de 4 kunstverkene i den nåværende kategorien skal vises. Komponentet `Tab` ligger også her og representerer en individuell tab.
- `MediaPicker` lar brukeren konfigurere kategorivalget sitt.
- `Gallery` er komponentet som inneholder alle komponentene over i denne listen. Den må blant annet lagre state for hvilke tabs som er valgt og hvordan kategoriene er valgt, for at dette skal kunne sendes nedover i hierarkiet til `ArtDisplay`.

Bildene, teksten og videofilene ligger lagret strukturert i undermapper under `public`. Dette er gjort slik at vi kan enkelt generere linker til disse filene og laste de inn dynamisk med hjelp av `fetch`.

## Git

All utviklingen i dette prosjektet foregikk på GitHub. Vi har forsøkt å dekomponere utviklinger i tasks som ligger lagret som issues. Oppgaven lister et krav om å markere commits med hvilken issue de bidrar til. Vi har ikke gjort dette ved å eksplisitt markere issuene i hver eneste commitmelding da dette ikke virker som en veldig utbredt praksis. Det vi derimot har gjort er å gjøre all utvikling i separate branches som følger et navngivingssystem hvor branchen er koblet opp mot en issue. For eksempel er alle endringer tilknyttet dette dokumentet gjort i branchen `feat-#13-readme`, som altså er koblet opp i mot issue 13, som handler om å legge til dokumentasjon. Dette var også akseptabel praksis i faget programvareutvikling.

## Testing

Gikk frem med å teste med responsiv modus i utviklerverktøyet i forskjellige enheter på en og en nettleser.
Først i chrome for å teste oppførsel og deretter gjorde vi det samme i mozilla firefox og safari.

## Kilder

Den eneste delen, med unntak av bilder, hvor vi har gjenbrukt kode fra noen andre er svg spinneren.
Kilden til denne er: www.kilde.com

Kildene til tekst, bilde og lyd er oppført i galleriet.
