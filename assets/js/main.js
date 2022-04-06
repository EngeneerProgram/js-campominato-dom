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

const game = document.querySelector(".start").addEventListener("click",function(){
    start_game();
    
})

function start_game(){
    let cell_number;
    let col_number;
    const scelta = document.getElementById("scelta").value;
    console.log(scelta);

    if(scelta == "easy"){
        cell_number = 100;
        col_number = 10;
        console.log("Livello facile", col_number, cell_number);
        generateGrid(col_number, cell_number);
        
        
        
    }else if(scelta == "medium"){
        cell_number = 81;
        col_number = 9;
        console.log("Livello facile", col_number, cell_number);
        generateGrid(col_number, cell_number);
    }else if(scelta == "hard"){
        cell_number = 49;
        col_number = 7;
        console.log("Livello facile", col_number, cell_number);
        generateGrid(col_number, cell_number);
    }else{
        console.log("scelta errata");
    }

    
}

function generateGrid(col_number,cell_number){
    const area_game = document.querySelector(".cells");
    console.log(area_game);
    
    
    
    area_game.innerHTML="";
    for(let i = 1; i<=cell_number; i++){
        const cell = document.createElement("div");
        cell.append(i);
        cell.classList.add("cell");
        cell.style.width=`calc(100% / ${col_number})`;
        area_game.append(cell);
    }

}

//change color
function change_color(){
    let cella = document.querySelectorAll(".cell").addEventListener("click", function(){
        console.log("ok");
    })
}


