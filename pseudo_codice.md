# 1. Verificare se la parola inserita è palindroma:

*   DICHIARA: parolaScelta

## Definire la funzione:

*   function isPalindroma(parola) {
-       parolaInvertita = inverti(parola)
-       IF parola == parolaInvertita
-           RESTITUISCI vero
-       RESTITUISCI falso       
}

### Richiamare la funzione  e stampa il risultato

*   IF isPalindroma(parolaScelta)
-       STAMPA  "La parola: parolaScelta è palindroma"
-   ALTRIMENTI
-       STAMPA "La parola: parolaScelta non è palindroma"



# 2. Verificare chi vince a Pari & Dispari tra l'utente ed il computer:

## Input dell'utente
-  chiedere all'utente: "Scegli pari o dispari?" e lo salvo come sceltaUtente
-  chiedere all'utente: "Scegli un numero da 1 a 5?" e lo salvo come numeroUtente

## Prima funzione per il computer
-  Creo una funzione che genera un numero casuale tra 1 e 5.
-  salvo il risultato come numeroComputer

*  Calcolo della somma
-  sommaNumeri = numeroUtente + numeroComputer

## Funzione che verifica che la somma sia pari o dispari
-  creo una funzione che prende la sommaNumeri
-       If sommaNumeri % 2 == 0:
            RESTITUISCO la parola è pari
        RESTITUISCO la parola è dispari
- il risultato della funzione la salvo come risultatoSomma


#### DICHIARARE IL VINCITORE:
-   If risultatoSomma === sceltaUtente
        STAMPA "Hai vinto!"
    ALTRIMENTI
        STAMPA "il computer ha vinto"


