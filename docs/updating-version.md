# Oppdatering av versjonsnummer

For å oppdatere versjonsnummeret så kan du bruke kommandoen ```pnpm run version x.x.x```. Erstatt x.x.x med hvor mye du vil endre. For eksempel, hvis den gamle versjonen var 2.1.5 og du har gjort en liten endring så kjører du ```pnpm run version 0.0.1```. Dette øker versjonsnummeret med 0.0.1

## Når og hvordan bør jeg endre versjonsnummeret?
Du trenger ikke å endre versjonsnummeret når du pusher til Dev, men om du pusher til Main så er det viktig at du endrer versjonsnummeret.

Hvis du har gjort en liten endring (lagt til en kommando i terminalen eller fikset en skrivefeil) så øker du versjonen med 0.0.1.
Om du har gjort en medium endring (Endret layouten til nettsiden eller endret noen av apiene) så øker du versjonen med 0.1.0.
Om du har gjort en veldig stor endring (Redesignet hele fuckings nettsiden) så øker du versjonen med 1.0.0.

Les mer her: [semver.org](https://semver.org/)