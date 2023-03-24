# Choose your favourite photo
---
Dato un array contenente una lista di cinque immagini, crea un carosello che faccia scorrere le immagini cliccando un bottone.

## Steps
- Creo il layout del carosello in `html` e `css`, così da avere una base grafica di partenza.
- Creo un ciclo che corrisponde al numero degli elementi presenti nell'array delle immagini.
- con questo ciclo posso stampare dinamicamente le immagini all'interno di un contenitore; queste risulteranno essere tutte nascoste poichè presentano di default la classe hide (classe che come valore ha il `display:none;`.)
- intercetto i bottoni `next` e `prev` per poter innescare al `"click"` delle azioni.
- Cliccando il bottone corrispondente a `next` faccio si che venga aggiunta la classe `hide` all'elemento che corrisponde al `counter di scorrimento` (che mi dovrò creare) e che venga rimossa all'elemento successivo.
- Si ma come? il `counter di scorrimento` si incrementa ad ogni click di `next` e si decrementa ad ogni click di `prev`.

### Future Steps...
- Work in progress :beer:



