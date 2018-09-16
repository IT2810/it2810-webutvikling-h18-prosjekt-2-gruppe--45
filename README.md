# :skull: Galgen

## Om prosjektet

Galgen, kort for gallerigenerator er et system som kombinerer forskjellige mediaressurser for å lage et slags interaktivt kunstverk. De genererte kunstverkene gir ikke særlig mye mening; kunsten ligger i surrealiteten i de resulterende kunstverkene. Vi har antatt at dette er greit, siden formålet med prosjektet er bare å implemenetere dynamisk funksjonalitet.

Brukeren kan velge mellom tre forskjellige kategorier av bilder, tekster og lyd i en meny som på desksop er på høyresiden av galleriet. Basert på disse valgene genereres en slags utstilling som inneholder 4 bilder av denne typen som man velger blant i tabs på toppen.

## Teknologi

Dette prosjektet er en moderne React-applikasjon. Prosjektet er satt opp med `create-react-app` og dette brukes for å starte samt bygge prosjektet med henholdsvis `npm start` og `npm run-script build`. Vi har skrevet koden i ES6 og alle komponenter er implementert enten med klasser eller med arrow functions der det er mulig - det er vanlig å bruke arrow functions der det er mulig. Bilder og tekst lastes dynamisk inn med fetch den første gangen de skal vises og lagres lokalt slik at de ikke trenger å lastes på nytt.

## Struktur

Vi har fulgt en relativt standard komponentbasert mappestruktur som vi synes endte opp ganske ryddig. Mesteparten av koden ligger i mappa `src`. Her har vi 4 mapper som inneholder forskjellige komponenter og ressurser for disse komponentene.

For å opprettholde kodekvalitet har vi brukt [Prettier](https://prettier.io) som automatisk formatterer koden når den committes. Dette har gjort at koden vår er formattert på en konsekvent og moderne måte som mange andre bruker. Vi har prøvd å følge best-practice når det kommer til å dele koden opp i små og enkle komponenter

- `ArtDisplay` er selve kunstverket, hvor bildet og teksten vises og musikken spilles i bakgrunnen. Her har komponentet `ArtDisplay` som ligger i filen `index.js` som er komponentet som håndterer data-loading, samt komponentet `ArtDisplayView` som er et såkalt pure component som viser denne informasjonen. Vi har altså separert komponentet fra container-komponentet her.
- `ArtPicker` er et sett med tabs som lar brukeren velge hvilket av de 4 kunstverkene i den nåværende kategorien skal vises. Komponentet `Tab` ligger også her og representerer en individuell tab.
- `MediaPicker` lar brukeren konfigurere kategorivalget sitt.
- `Gallery` er komponentet som inneholder alle komponentene over i denne listen. Den må blant annet lagre state for hvilke tabs som er valgt og hvordan kategoriene er valgt, for at dette skal kunne sendes nedover i hierarkiet til `ArtDisplay`. Dette kompliserer Gallery en god del, men vi mener det er en fin og veldig React-aktig måte å løse problemet på. Det er mulig applikajonen kunne hatt nytte av Redux eller lignende, men målet med dette prosjektet var å bruke standard React uten statehåndteringsverktøy, og dette fungerer helt fint.

Bildene, teksten og videofilene ligger lagret strukturert i undermapper under `public`. Dette er gjort slik at vi kan enkelt generere linker til disse filene og laste de inn dynamisk med hjelp av `fetch`, som er en ny og moderne native erstatning for XMLHttpRequest. Vi genererer en link til filene basert på valget av kategori, som er enkelt siden filene ligger gruppert i mapper basert på kategori. Vi har også filen `files.js` i `Gallery`-komponentet, som lagrer de forskjellige filene som er tilgjengelige i kategorier. Dette har vi slik at applikasjonen må ha oversikt over hvilke filer som faktisk ligger lagret på filsystemet.

Filer lastes kun in den første gangen de vises. Dette gjør vi blant annet med at `componentDidUpdate` i `ArtDisplay` laster inn data når enten tabben eller kategorivalgene oppdateres. Når dataen har blitt hentet, lagres resultatet i et objekt hvor lenken til ressursen er nøkkelen. På denne måten kan vi sjekke om vi allerede har lastet dataen - hvis lenken allerede ligger i objektet, trenger vi ikke hente den på nytt og kan bare returnere den lagrede dataen. Dette gjør at informsjonen lastes med en gang dersom brukeren blar frem og tilbake mellom tabs som allerede har blitt åpnet. Lyd bruker `audio`-taggen, vi har ikke implementert noe spesiell funksjonalitet her da det ikke var krav om det.

## Utforming

Siden er bygget mobile-first, det vil si at vi tok utgangspunkt i en liten skjerm på størrelse med en mobil og deretter brukte plassen bedre for større skjermer ved hjelp av media queries. Dette gjør det ganske enkelt å lage et flytende layout som tilpasser seg skjermens størrelse. Vi valgte å alltid ha teksten under bildet, da vi synes dette så best ut. Layout skiftes mellom beddeformat og høydeformat, ved at media pickeren og tab selectoren plasseres over kunstdisplayet når skjermen er liten nok. I breddeformatet plasseres media pickeren på siden av resten av galleriet.

## Git

All utviklingen i dette prosjektet foregikk på GitHub. Vi har forsøkt å dekomponere utviklinger i tasks som ligger lagret som issues. Oppgaven lister et krav om å markere commits med hvilken issue de bidrar til. Vi har ikke gjort dette ved å eksplisitt markere issuene i hver eneste commitmelding da dette ikke virker som en veldig utbredt praksis. Det vi derimot har gjort er å gjøre all utvikling i separate branches som følger et navngivingssystem hvor branchen er koblet opp mot en issue. For eksempel er alle endringer tilknyttet dette dokumentet gjort i branchen `feat-#13-readme`, som altså er koblet opp i mot issue 13, som handler om å legge til dokumentasjon. Dette var også akseptabel praksis i faget programvareutvikling.

## Testing

Testingen i dette prosjektet fokuserte på testing av brukergrensesnittet og responsivt design. Under utviklingen brukte vi primært Chrome og testet det responsive designet ved å bruke utviklerverktøyene til å gå gjennom forskjellige skjermstørrelser som korresponderte til forskjellige enheter, slik at vi fikk sjekket at designet og media queries holdt vann på de fleste tenkelige skjermstørrelser. I tillegg testet vi nettsiden i Chrome på mobil i både horisontal og vertikal orientasjon ved hjelp av Chrome developer tools, hvor man kan bruke USB-tilkoblingen til å få frem nettsiden på mobil. Vi har også testet nettsiden ved hjelp av gratisversjonen av Browserstack, som lar oss få tilgang til flere virtuelle maskiner med forskjellige nettlesere tilgjengelig, deriblant iOS, som ingen av oss hadde tilgang til. Blant disse var Safari på Mac og iOS. Vi testet også i Firefox på desktop og gikk også der systematisk igjennom flere vindusstørrelser, slik at vi kunne verifisere at media queries var satt fornuftig. Vi fikk dermed testet prosjektet på mer enn tre forskjellige enheter, deriblant flere mobiler og datamaskiner - alle gruppemedlemmene testet selvsagt programmet på sin egen maskin og sin egen mobil.

## Kilder

Vi har ikke lagd filene i galleriet selv, men funnet bilder man har lov til å bruke på internettet. Kildene til tekstfilene, bilder og lyd står i galleriet når man velger bildet. Vi har funnet et spinner-ikon på internettet og latt det stå igjen en link i koden, slik som forfatteren ønsker.
