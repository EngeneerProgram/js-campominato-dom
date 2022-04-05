/*

L'utente indica un livello di difficoltà in base al quale 
viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso 
range della difficoltà prescelta: le bombe :bomba:.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e 
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando:
 il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.

*/


//selezione select

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    inizia_gioco(event);
})

function inizia_gioco(event){
    let livello = event.target[0].value;
    console.log(livello);

    let numero_celle, numero_colonne;
    switch(livello){

        case "Facile":
            
            numero_celle = 100;
            numero_colonne = 10; 
            console.log(numero_celle, numero_colonne);
            generate_number();
            
            break;
        
        case "Intermedio":
            
            numero_celle=81;
            numero_colonne= 9;
            console.log(numero_celle, numero_colonne);
            break;
        
        case "Difficile":
            
            numero_celle=49;
            numero_colonne = 7;
            console.log(numero_celle, numero_colonne);
    }

   genera_griglia(numero_celle, numero_colonne);
}


function genera_griglia(numero_celle ,numero_colonne){

const area_gioco = document.querySelector(".main .cells");

area_gioco.innerHTML=""

for(let i = 1; i<=numero_celle; i++){

    let cella = document.createElement("div");
    cella.append(i);
    cella.classList.add("cella");
    cella.style.width=`calc(100% / ${numero_colonne})`
    area_gioco.append(cella);
}

}

function generate_number(){
    for(let i = 0; i<16; i++){
        let numeri_casuali = Math.floor(Math.random() *100) +1;
        console.log(numeri_casuali);
    }
}